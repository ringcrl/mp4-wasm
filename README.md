# WebCodecs + WebAssembly 实现浏览器视频解码编码

使用 Pixi.js 进行视频渲染，并使用 minimp4 编码出 mp4 文件

## 开发

```sh
# 编译 wasm 文件
npm run build

# 开启服务，打开 public 下的 demo-xxx 目录
npm run dev
```

## emscripten 配置

```sh
# 安装最新 cmake
yum -y install python-pip
pip install cmake --upgrade

# 按步骤安装：https://emscripten.org/docs/getting_started/downloads.html
```

## 待完成

[] MP4 音频编码
