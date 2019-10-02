Stream = require('./index.js')

stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://admin:admin@192.168.100.1/cam1/h264',
    wsPort: 9999,
    ffmpegOptions: { // options ffmpeg flags
      '-stats': '', // an option with no neccessary value uses a blank string
      '-r': 40 // options with required values specify the value after the key //FPS
    }
  })