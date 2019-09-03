https://immutable-js.github.io/immutable-js/

https://egghead.io/courses/getting-started-with-redux

https://www.youtube.com/watch?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&time_continue=621&v=nYkdrAPrdcw

https://alligator.io/react/react-native-redux/



Some issues after 'expo eject' :

https://facebook.github.io/react-native/docs/running-on-device
https://facebook.github.io/react-native/docs/getting-started.html

Don't forget to put the phone in dev mode, activate dev mode, and set MPT protocol:
https://eu.community.samsung.com/t5/Autres-Smartphones/Probl%C3%A8me-de-Connexion-Samasung-S6-au-PC/td-p/237719

to relaunch a device run : adb kill-server ; adb devices

Don't forget to install  npm install --save react-native-gesture-handler
Don't forget to react-native link

Try refactor > migrate to androidX

If some issues with NULL at buidle time :
npm i jetifier
npx jetifier

Don't forget to add  (in android/gradle.properties):
android.useAndroidX=true
android.enableJetifier=true


If experiencing an error 500 at launch :
relaunch metro bundler

