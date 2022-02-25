# Public Health Trends Frontend App in React Native & TypeScript

The official NativeBase TypeScript template for [Expo](https://docs.expo.io/)

## Technologies

1. ### [React Native](https://reactnative.dev/docs/intro-react-native-components)

2. ### [Expo](https://docs.expo.dev/)

3. ### [NativeBase UI Library](https://docs.nativebase.io/?utm_source=HomePage&utm_medium=header&utm_campaign=NativeBase_3)

4. ### [React Navigation](https://reactnavigation.org/)

5. ### [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/usage)

## Themes (Dark Mode)

NativeBase has a wealth of theming functionality. See [here](https://docs.nativebase.io/3.0.x/color-mode) for details.

## Development Instructions

Globally install the [expo cli](https://www.npmjs.com/package/expo-cli)

```
  npm i -g expo-cli
```

Globally install the [yarn package manager](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

```
  npm install --global yarn
```

To run the app via yarn, change directory to ./app, then run one of the following

```
  yarn web
  yarn run web
  yarn run android
```

### Web version

When given the option, press "w" to run the web version of the app.

### Phone versions

You can also try to android version, but you'll need to access it through one of two ways:

1. download [Android Studio](https://developer.android.com/studio), configure it properly, add a virtual device, and have React Native display on the emulated device

2. download the [Expo](https://expo.dev/client) app from the Goolge Play Store, or Expo Go from Apple's App Store, and use the QR Code generated in the CLI to get the app running on your phone

### Troubleshooting

You can clear expo's cache with the following command:

```
  expo r -c
```

There is an unfortunate issue with react-native-reanimated and Android. I cannot use version 2.x, and instead have to use version 1.x. What is more, I needed to apply the following code to node-modules/react-native-reanimated/src/Animated.js. Everyone will have to do this if they want to test their code on Android. For now it works, but I'll have to find a better solution later.

```
  global.\_\_reanimatedWorkletInit = () => {};
```
