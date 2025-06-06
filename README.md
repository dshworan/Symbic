# Install apk  and watch logs on phone
eas build -p android --profile preview    ... create APK
eas build -p android --profile preview --clear-cache    ... create APK cache cleared
adb logcat *:S ReactNative:V ReactNativeJS:V    ... USB connect and see live console.logs

npx expo start --web     ...to run in localhost (browser) 

npx expo start
npx expo start --clear
    ...to run on the phone app ... Fast refresh/live reload/Metro bundler logs/Console logs in the terminal/pressing a, r, m, d, etc. to reload/debug

# `FREE local build of apk via USB` - delete old version
npx expo prebuild        ... creates android folder only if we add packages
npx expo run:android     ... USE to run full android app ... `BUT delete android folder!`  (? must be installed: npx expo install expo-dev-client)

npx expo-doctor ...  15/15 checks passed. No issues detected!

`full app`
eas build:configure
npx expo prebuild    --- if we add native stuff
eas build -p android --profile preview      ...uploads your project to Expo server, builds .apk or .aab
eas build -p android --profile production   ...for release builds.

`git`
git status
git add .
git add -A
git commit -m "whatever"
git push


`list packages`
npm list --depth=0


`fix for node_modules`
"react-native": {
  "android": {
    "sourceDir": "android"
  }
}

`cleanup --- if we add / remove dependecies packages`
node_modules   ...delete
package-lock.json  ...delete
npm install

# SYMBIC APP ID
ca-app-pub-7569267138426237~5058149272
`Ad Unit ID - Interstitial Development`
ca-app-pub-3940256099942544/1033173712
`Ad Unit ID - Interstitial Production Android`
ca-app-pub-7569267138426237/2000725188
`Ad Unit ID - Reward Ad Development`
ca-app-pub-3940256099942544/5224354917
`Ad Unit ID - Reward Ad Production Android`
ca-app-pub-7569267138426237/6876055022


# TRIOS APP ID
ca-app-pub-7569267138426237~6830607970
`Ad Unit ID - Interstitial Development`
ca-app-pub-3940256099942544/1033173712
`Ad Unit ID - Interstitial Production Android`
ca-app-pub-7569267138426237/9860111905
`Ad Unit ID - Reward Ad Development`
ca-app-pub-3940256099942544/5224354917
`Ad Unit ID - Reward Ad Production Android`
ca-app-pub-7569267138426237/3683292773




# Trios Key
Key alias ... trioskey
Password: dave444
Android Credentials     
Project                 native-trios
Application Identifier  com.shworan.trios
Type                JKS
Key Alias           71af6b078f3344931dd4fba638346450
MD5 Fingerprint     2F:FB:84:32:B6:14:E2:A2:F2:A6:F1:34:D1:9B:56:58
SHA1 Fingerprint    85:79:69:77:7E:B4:77:67:00:9F:C0:4F:BE:E3:75:FE:4A:E6:00:46
SHA256 Fingerprint  EF:BF:7E:47:72:3B:E2:71:7F:3E:EA:2A:B8:0F:7A:CB:97:07:99:F7:A6:51:0F:2E:FA:F5:C5:15:F8:9B:3A:F3
