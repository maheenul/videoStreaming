node-rtsp-stream
================

Stream any RTSP stream and output to websocket for consumption by [jsmpeg](https://github.com/phoboslab/jsmpeg). HTML5 streaming video! (Requires ffmpeg)

Usage:

```
$ npm install node-rtsp-stream
```

On server:
```
Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name',
  streamUrl: 'rtsp://184.72.239.149/vod/mp4:BigBuckBunny_115k.mov',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30 // options with required values specify the value after the key
  }
})
    
```

On client:
```
<html>
<body>
	<canvas id="canvas"></canvas>
</body>

<script type="text/javascript" src="jsmpeg.min.js"></script>
<script type="text/javascript">
	player = new JSMpeg.Player('ws://localhost:9999', {
	  canvas: document.getElementById('canvas') // Canvas should be a canvas DOM element
	})	
</script>
</html>
```

For more information on how to use jsmpeg to stream video, visit https://github.com/phoboslab/jsmpeg

Please note that framerate from cameras must be greater than or equal to 15fps for mpeg1 encoding, otherwise ffmpeg errors will prevent video encoding to occur. If you have a camera with advanced configuration options, make sure it streams video at a recommended 25fps.

-------------------------------------------------------------------
Edited by Maheen
================


Slightly to save ouput and add timestamp to the saved file.

start.js -> File added
mpeg1muxer-> File Modified
videoStream.js-> File Modified

For Windows: Place ffmpeg file on the root directory.
For linux: Install ffmpeg.

On server:
-Run the start.js file

On client:
For angular:
- download jsmpeg.min.js from [here](https://jsmpeg.com)
- Copy the jsmpeg.min.js into the assets folder
- In the angular.json (root folder) file include the jsmpeg.min.js in the scripts
```
"scripts": [
              "src/assets/vxgplayer/vxgplayer-1.8.23.min.js",
            ]


```
- On html add the player using the code below
```
<div class="jsmpeg" data-audio='false'  data-url="ws://IP_OF_SERVER:PORT_OF_SERVER"></div>
```