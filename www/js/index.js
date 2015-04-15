  /*
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */
var app = {

    // var currxPage = 0;
    myRecorder: null,
    extension: "mp3",
    currPageIndex: 0,
    currFilename: null,
    device: null,
    recTime: 0,
    page_ids: [ "Page_01",
                "Page_02",
                "Page_03",
                "Page_04",
                "Page_05",
                "Page_06",
                "Page_07",
                "Page_08",
                "Page_09",
                "Page_10",
                "Page_11",
                "Page_12",
                "Page_13",
                "Page_14",
                "Page_15",
                "Page_16",
                "Page_17",
                "Page_18",
                "Page_19",
                "Page_20",
                "Page_21",
                "Page_22",
                "Page_23",
                "Page_24",
                "Page_25",
                "Page_26",
                ],

    // Application Constructor
    initialize: function () {
      this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
      //This is needed so that we can debug in chrome in cloud
      if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
        document.addEventListener("deviceready", this.onDeviceReady, false);
      } else {
        app.onDeviceReady();
      }
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
      app.start();
      app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');

      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');

      console.log('Received Event: ' + id);
    },
    // Start function
    start: function () {
      // Prevent vertical scrolling - problem seen on devices only. Works fine on chrome without this.
      // http://stackoverflow.com/questions/6193016/how-to-prevent-app-running-in-phone-gap-from-scrolling-vertically

      // FIXME: THIS BREAKS THE SCROLLING IN RIPPLE. WORKS FINE ON THE DEVICE!
      //document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
      // $.mobile.defaultPageTransition = 'slide';
      app.registerPageSwipeHandlers();
      app.registerBtnHandlers();
    },
    // Change page on swipe
    registerPageSwipeHandlers: function () {
      var pages = $("div:jqmData(role='content')");
      pages.each(function () {
        $("#" + this.id).swipeleft(function () {
          app.goToNextPage();
        });

        $("#" + this.id).swiperight(function () {
          app.goToPrevPage();
        });
      });
    },
    // Play, Record and Reset Btn Handlers
    registerBtnHandlers: function () {
      $(".playBtn").on("click", function (){
        var filename = $("div[data-role='content']").attr("id") + "." + app.extension;
        if (device.platform === "Android") {
          filename = cordova.file.externalDataDirectory + filename;
        }

        // If custom recording exists, play it. Else play default sound.
        window.resolveLocalFileSystemURL(filename, app.playCustom, app.playDefault);
      }); 
      $(".recordBtn").on("click", function (event){
        $(this).toggleClass("fa-spinner fa-spin");
        $(this).toggleClass("fa-microphone");
        if ($(this).attr("class").indexOf("fa-spin") >= 0) {
          // Start recording                
          app.currFilename = app.page_ids[app.currPageIndex] + "." + app.extension;
          // For android, we need to include the correct path. 
          var filePath = "";
          if (device.platform === "Android") {
            filePath = cordova.file.externalDataDirectory;
            app.currFilename = filePath + app.currFilename;
          }
          if (app.myRecorder) {
            app.myRecorder.release();
          }
          if (device.platform === "Android") {
            app.myRecorder = new Media(app.currFilename,
                                app.onMediaSuccessCallback(),
                                app.onMediaErrorCallback());
            app.recordNow();
          } else {
            //assume iOS, first create the file
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 
                                    0, 
                                    app.onSuccessFileSystem, 
                                    function () {
	           alert("failed: creating media file in requestFileSystem");
  	        });
          }     
        } else {
          //app.stopRecording();
        }
      });
      $(".undoBtn").on("click", function (event){
        alert("You clicked the reset button");
        var externalFilename = app.getExternalFilename();

        // Does this exist?
        window.resolveLocalFileSystemURL(   externalFilename,
                                            app.gotRemoveFileEntry,
                                            app.failToDelete);

      });
      $(".flipNext").on("click", function (event){
        app.goToNextPage();
      });
      $(".flipPrev").on("click", function (event){
        app.goToPrevPage();
      });
    },
    goToNextPage: function () {
      if (app.currPageIndex < app.page_ids.length -1 ) {
        var pageElement = $("#" + app.page_ids[app.currPageIndex]); 
        pageElement.attr("id", app.page_ids[++app.currPageIndex]);
      } else {
        alert("Last page: " + app.currPageIndex + " " + app.page_ids[app.currPageIndex]);
      }
    },
    goToPrevPage: function () {
      if (app.currPageIndex > 0) {
        var pageElement = $("#" + app.page_ids[app.currPageIndex]);
        pageElement.attr("id", app.page_ids[--app.currPageIndex]);   
      } else {
        alert("First page: " + app.currPageIndex);
      }
    },
    onMediaSuccessCallback: function () {
      //alert("onMediaSuccessCallback");
    },
    onMediaErrorCallback: function () {
      //alert("onMediaErrorCallback");
    },
    /* for iOS only */
    onSuccessFileSystem: function (fileSystem) {
      fileSystem.root.getFile(app.currFilename, { create: true, exclusive: false }, app.onOK_GetFile, null);
    },
    /* for iOS only */
    onOK_GetFile: function (fileEntry) {
      app.myRecorder = new Media( fileEntry.fullPath, 
                              app.onMediaSuccessCallback, 
                              app.onMediaErrorCallback);
    },
    /* common function that starts the recording */
    recordNow: function () {
      if (app.myRecorder) {
        app.myRecorder.startRecord();
      } else {
        alert("myRecorder is NULL in startRecord");
        return;
      }
      
      //Reset the recording time
      app.recTime = 0;
      
      // Stop recording after 5 sec
	    var progressTimer = setInterval (function () {
        app.recTime = app.recTime + 1;
        // TBD: Update the counter
        if (app.recTime >= 5) {
          clearInterval(progressTimer);
          progressTimer = null;
        	app.stopRecording();
        	return;
        }
	    }, 1000);
    },
    /* common function that stops the recording */
    stopRecording: function () {
      if (app.myRecorder) {
  			app.myRecorder.stopRecord();
  			app.myRecorder.release();
  			app.myRecorder = null;
  			$('.recordBtn').toggleClass("fa-spinner fa-spin");
        $('.recordBtn').attr("class", "fa fa-microphone fa-4x recordBtn");
	    }
    },
    // If the child has recorded his own voice
    playCustom: function () {
      // audio filename for this page
      var filename = $("div[data-role='content']").attr("id") + "." + app.extension;
      if (device.platform === "Android") {
          filename = cordova.file.externalDataDirectory + filename;
      }
      var my_media = new Media(filename,null, null);
      my_media.play();
    },
    // My voice! :)
    playDefault: function () {
      var url = "audio/" + $("div[data-role='content']").attr("id") + "." + app.extension;
      if (device.platform === "Android") {
          url = "/android_asset/www/" + url;
      }
      var my_media = new Media(url,null, null);
      my_media.play();
    },
    getExternalFilename: function () {
      var filename = $("div[data-role='content']").attr("id") + "." + app.extension;
      if (device.platform === "Android") {
          filename = cordova.file.externalDataDirectory + filename;
      }
      return filename;
    },
    gotRemoveFileEntry: function (fileEntry) {
      alert(fileEntry);
      fileEntry.remove(app.deleteFileSuccess, app.deleteFilefail);
    },
    deleteFileSuccess: function () {
      alert("File deleted successfully");
    },
    deleteFilefail: function(error) {
      alert("inside deleteFilefail");
      alert("Failed to delete a file: " + error.code);
    },
    failToDelete: function() {
      alert("inside failToDelete, file does not exist");
    }
};
