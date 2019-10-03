Stream = require('./index.js')
const moment = require('moment');


this.namePrefix = ''
this.directory = './video/'


this.dateTime = moment().format('YYYY-MM-DD-kk-mm-ss').toString();
this.filename=this.namePrefix+this.dateTime;

stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://admin:admin@192.168.100.1/cam1/h264',
    wsPort: 9999,
    ffmpegOptions: { // options ffmpeg flags
      '-stats': '', // an option with no neccessary value uses a blank string
      '-r': 20, // options with required values specify the value after the key //FPS
      '-b:v':'120k',
    },
    fileURL:this.directory+this.filename
  })