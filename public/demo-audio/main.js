function splitBuffer(buffer, length) {
  const result = [];
  const channels = [];
  for (let i = 0; i < buffer.numberOfChannels; i++) {
    channels.push(buffer.getChannelData(i));
  }
  for (let offset = 0; offset < buffer.length; offset += length) {
    const len = Math.min(length, buffer.length - offset);
    const small_buf = new AudioBuffer({
      length: len,
      numberOfChannels: buffer.numberOfChannels,
      sampleRate: buffer.sampleRate,
    });

    for (let i = 0; i < buffer.numberOfChannels; i++) {
      small_buf.copyToChannel(channels[i].slice(offset, offset + len), i);
    }
    result.push(small_buf);
  }
  return result;
}

async function main() {
  // 2 channels file
  const raw_music_wav = await fetch(
    'https://cdn.glitch.com/f92b40ba-41b8-4076-a8c7-f66c1ccfd371%2Fnews.wav?v=1631836633526',
  );

  // One channel file
  // let raw_music_wav = await fetch("https://cdn.glitch.com/f92b40ba-41b8-4076-a8c7-f66c1ccfd371%2Fmusic.wav?v=1616487361153");
  const outputCtx = new AudioContext();
  const music_buffer = await outputCtx.decodeAudioData(
    await raw_music_wav.arrayBuffer(),
  );
  const sampleRate = music_buffer.sampleRate;

  let total_encoded_size = 0;

  const decoder = new AudioDecoder({
    error(e) {
      console.log(e);
    },
    async output(audio_data) {
      const source = outputCtx.createBufferSource();
      source.buffer = new AudioBuffer({
        length: audio_data.numberOfFrames,
        numberOfChannels: audio_data.numberOfChannels,
        sampleRate: audio_data.sampleRate,
      });
      for (let i = 0; i < audio_data.numberOfChannels; i++) {
        audio_data.copyTo(source.buffer.getChannelData(i), {
          planeIndex: i,
          frameOffset: 0,
          frameCount: audio_data.numberOfFrames,
          format: 'f32-planar',
        });
      }
      source.connect(outputCtx.destination);
      source.start(audio_data.timestamp / 1000000);
      audio_data.close();
    },
  });

  const encoder = new AudioEncoder({
    error(e) {
      console.log(e);
    },
    output(chunk, metadata) {
      total_encoded_size += chunk.byteLength;
      if (metadata.decoderConfig) {
        decoder.configure(metadata.decoderConfig);
      }
      decoder.decode(chunk);
    },
  });

  const config = {
    numberOfChannels: music_buffer.numberOfChannels,
    sampleRate,
    codec: 'opus',
    bitrate: 48000,
  };

  encoder.configure(config);

  let base_time = outputCtx.currentTime + 0.3;
  const buffers = splitBuffer(music_buffer, sampleRate / 2);
  for (const buffer of buffers) {
    const planar_data = new Float32Array(
      buffer.length * buffer.numberOfChannels,
    );
    for (let i = 0; i < buffer.numberOfChannels; i++) {
      planar_data.set(buffer.getChannelData(i), i * buffer.length);
    }
    const audio_data = new AudioData({
      timestamp: base_time * 1000000,
      data: planar_data,
      numberOfChannels: buffer.numberOfChannels,
      numberOfFrames: buffer.length,
      sampleRate,
      format: 'f32-planar',
    });

    base_time += buffer.duration;
    encoder.encode(audio_data);
  }
  await encoder.flush();
  await decoder.flush();
  document.getElementById('total').innerText = `Total encoded size: ${total_encoded_size}`;
}
