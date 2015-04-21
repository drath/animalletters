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
   
  /*
   * (c) Devendra
   */
   
var app = {

    myRecorder: null,
    extension: "wav",
    device: null,
    currPageIndex: 0,
    extPath: "",
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

      // Initialize global consts

      // app.extPath stores the external loc where custom recording is saved.
      if (device.platform === "Android") {
        app.extPath = cordova.file.externalDataDirectory;
      } else {
        // Assume iOS
        app.extPath = cordova.file.applicationStorageDirectory + "Documents/";
      }
      
      // Setup the button handlers
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
      $(".playBtn").on("click", function () {
        // If custom recording exists, play it. Else play default sound.
        window.resolveLocalFileSystemURL( app.extPath + app.getCurrentFileName(), 
                                          app.playCustom, 
                                          app.playDefault);
      }); 
      // Record: Record user's voice
      $(".recordBtn").on("click", function () {
        $("#micRecording").toggleClass("fa fa-x fa-circle");

        if ($("#micRecording").attr("class").indexOf("fa-circle") >= 0) {
          // Start flashing a red dot to indicate recording started
          app.blinkMic();

          // Clear any past recordings
          if (app.myRecorder) {
            app.myRecorder.release();
          }

          // For Android, the Media plugin will create the file if reqd
          if (device.platform === "Android") {
            app.myRecorder = new Media(app.extPath + app.getCurrentFileName(),
                                app.onMediaSuccessCallback(),
                                app.onMediaErrorCallback());
            app.recordNow();
          } else {
            // But for iOS, we need to create the file first
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 
                                    0, 
                                    app.onSuccessFileSystem, 
                                    function () {
             alert("failed: creating media file in requestFileSystem");
            });
          }     
        } else {
          //Do nothing. 
        }
      });
      // Undo: Delete the audio file recorded by user, if it exists.
      $(".undoBtn").on("click", function (event){
        // Does this exist?
        window.resolveLocalFileSystemURL(   app.extPath + app.getCurrentFileName(),
                                            app.gotRemoveFileEntry,
                                            app.failToDelete);

        window.plugins.toast.showLongTop( "Replaced recording with the default one", 
                                          null, 
                                          null);
      });
      // Prev and Next Arrows
      $(".flipNext").on("click", function (event){
        app.goToNextPage();
      });
      $(".flipPrev").on("click", function (event){
        app.goToPrevPage();
      });
    },
    // Page navigation: Set the ID attribute to 'change' the page
    goToNextPage: function () {
      if (app.currPageIndex < app.page_ids.length -1 ) {
        var pageElement = $("#" + app.page_ids[app.currPageIndex]); 
        pageElement.attr("id", app.page_ids[++app.currPageIndex]);
      } else {
        //alert("Last page: " + app.currPageIndex + " " + app.page_ids[app.currPageIndex]);
      }
    },
    goToPrevPage: function () {
      if (app.currPageIndex > 0) {
        var pageElement = $("#" + app.page_ids[app.currPageIndex]);
        pageElement.attr("id", app.page_ids[--app.currPageIndex]);   
      } else {
        //alert("First page: " + app.currPageIndex);
      }
    },
    // Create the file that will be used to record audio (iOS only)
    onSuccessFileSystem: function (fileSystem) {
      fileSystem.root.getFile(app.getCurrentFileName(),
                              { create: true, exclusive: false },
                              app.onOK_GetFile,
                              function () {
                                alert("Failed to create file!");
                                return;
                              });
    },
    onMediaSuccessCallback: function () {
      //alert("onMediaSuccessCallback: Recording complete!");
    },
    onMediaErrorCallback: function (error) {
      //alert("onMediaErrorCallback: Recording failed: " + error.message);
    },
    // File is created inside Documents folder, can record now! 
    onOK_GetFile: function (fileEntry) {
      app.myRecorder = new Media( "documents://" + fileEntry.fullPath, 
                              app.onMediaSuccessCallback, 
                              app.onMediaErrorCallback);
      app.recordNow();
    },
    // Common function that starts the recording for iOS and Android
    recordNow: function () {
      if (app.myRecorder) {
        app.myRecorder.startRecord();
      } else {
        alert("myRecorder is NULL in startRecord");
        return;
      }
      
      //Reset the recording time
      var secs = 0;
      
      // Stop recording after 5 sec
      var progressTimer = setInterval (function () {
        secs = secs + 1;
        app.setRecordingText(secs + " sec");
        if (secs >= 5) {
          clearInterval(progressTimer);
          progressTimer = null;
          app.stopRecording();
          app.setRecordingText("");
          return;
        }
      }, 1000);
    },
    // Common function that stops the recording for iOS and Android
    stopRecording: function () {
      if (app.myRecorder) {
        app.myRecorder.stopRecord();
        app.myRecorder.release();
        app.myRecorder = null;
        $("#micRecording").toggleClass("fa fa-x fa-circle");
      }
    },
    // If the child has recorded his own voice
    playCustom: function () {
      // audio file name for this page
      var fileName = app.getCurrentFileName();
      if (device.platform === "Android") {
        fileName = app.extPath + fileName;
      } else {
        // Media plugin needs the documents://!
        fileName = "documents://" + fileName;
      }
      
      var my_media = new Media(fileName, 
                              function () { 
                                //alert("played ok"); 
                              }, 
                              function (error) { 
                                alert("Error playing media: " + error.message);
                              });
      my_media.play();
    },
    // My voice! :)
    playDefault: function () {
      var url = "audio/" + app.getCurrentFileName();
      if (device.platform === "Android") {
          url = "/android_asset/www/" + url;
      }
      var my_media = new Media(url,null, null);
      my_media.play();
    },
    // Various callbacks to remove audio recorded by user
    gotRemoveFileEntry: function (fileEntry) {
      fileEntry.remove(app.deleteFileSuccess, app.deleteFilefail);
    },
    deleteFileSuccess: function () {
    },
    deleteFilefail: function(error) {
      alert("Failed to delete a file: " + error.code);
    },
    failToDelete: function() {
    },
    // Display a flashing red dot
    blinkMic: function() {
      $('.fa-circle').delay(100).fadeTo(100,0.5).delay(100).fadeTo(100,1, app.blinkMic);
    },
    // Displays 1...2...3...4...5
    setRecordingText: function (text){
      $('#audio_position').text(text);
    },
    // Audio file for the current page
    getCurrentFileName: function () {
      var fileName = $("div[data-role='content']").attr("id") + "." + app.extension;
      return fileName;
    }
};