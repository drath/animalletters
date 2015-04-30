var audio = {
    extPath: "",
    url: "",
    recorder: null,
    devicePlatform: window.device.platform,
    
    // Set variables based on platform
    initialize: function () {
      alert("inside initialize");
      if (audio.devicePlatform === "Android") {
        audio.extPath = cordova.file.externalDataDirectory;
      } else {
        audio.extPath = cordova.file.applicationStorageDirectory + "Documents/";
      }
    },
    // Play a sound file that is located inside the project dir.
    playInternal: function (url) {
      if (audio.devicePlatform === "Android") {
        url = "/android_asset/www/" + url;
      }
         
      var my_media = new Media(url,null, null);
      my_media.play();
    },
    // Play a sound file located outside the project dir. You need this API
    // because when you record a sound, the location of the recorded file 
    // cannot be inside the project dir - it has to be outside it
    playExternal: function (url) {
      if (audio.devicePlatform === "Android") {
          url = audio.extPath + url;
      } else {
          // Media plugin needs the documents://!
          url = "documents://" + url;
      }
        
      var my_media = 
          new Media(url, 
                    function () { 
                      alert("played ok"); 
                    }, 
                    function (error) { 
                      alert("Error playing media: " + error.message);
                    });
      my_media.play();
    },
    // Start recording
    recordAudioStart: function (url) {
      if (audio.recorder) {
        audio.recorder.release();
      }
      
      if (audio.devicePlatform == "Android") {
        // In Android, the media plugin will create the audio file
        audio.recorder = new Media( audio.extPath + url, 
                                    function () {
                                      alert("Recording completed!");
                                    }, 
                                    function () {
                                      alert("Recording failed");
                                    });
        audio.recorder.startRecord();
      } else {
        // But for iOS, the file needs to be created first
        audio.url = url;
        // Get the fs
        window.requestFileSystem( 
          LocalFileSystem.PERSISTENT,
          0,
          function (fileSystem) {
            //Got fs, create the file to record to
            fileSystem.root.getFile(
              audio.url,
              {create: true, exclusive: false},
              function (fileEntry) {
                // File created!
                app.recorder = 
                  new Media( "documents://" + fileEntry.fullPath);
                app.recorder.startRecord();
              },
              function (error) {
                alert("Failed to create file: " + error.message);
              });
          },
          function(error) {
            alert("failed to get the fs: " + error.message);
          });
      }
    },
    // Stop recording
    recordAudioEnd: function () {
      if (audio.recorder) {
        audio.recorder.stopRecord();
        audio.recorder.release();
        audio.recorder = null;
      }
    },
    // Delete recording (external)
    deleteRecording: function (url) {
      window.resolveLocalFileSystemURL(   
        audio.extPath + url,
        function (fileEntry) {
          fileEntry.remove(
            function () {
              // File deleted!
            }, 
            function (error) {
              alert("Failed to delete file: " + error.message);
            }); 
        },
        function (error) {
          alert("Failed to get fs: " + error.message);
        });
    }
}