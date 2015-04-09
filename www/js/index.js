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

    currPage: 0,
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
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
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
    onDeviceReady: function() {
        app.start();
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    // Start function
    start: function() {
        //animalId = $.mobile.activePage.attr('id');
        $.mobile.defaultPageTransition = 'slide';
        app.registerPageSwipeHandlers();
    },
    // Change page on swipe
    registerPageSwipeHandlers: function() {
        var pages = $("div:jqmData(role='content')");
        pages.each(function(i){
            $("#" + this.id).swipeleft(function() {
                // alert(app.currPage);
                // app.currPage = app.currPage + 1;
                ++app.currPage;
                if (app.currPage < app.page_ids.length) {
                    $("#" + this.id).attr("id", app.page_ids[app.currPage]);
                    $("#" + this.id + "_audio").attr("id", app.page_ids[app.currPage + "_audio"]);
                } else {
                    alert("Last page");
                }
            });

            $("#" + this.id).swiperight(function() {
                --app.currPage;
                if (app.currPage >= 0) {
                    $("#" + this.id).attr("id", app.page_ids[app.currPage]);   
                } else {
                    alert("First page");
                }
            });
        });
    }

};
