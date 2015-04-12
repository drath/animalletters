#! /bin/bash
phonegap local build android
adb install -r /home/devendra/work/phonegap_projects/animal_sounds/platforms/android/ant-build/AnimalSounds-debug.apk
