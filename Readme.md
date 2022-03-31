# **Public Health Trends Frontend App in React Native & TypeScript**

The official NativeBase TypeScript template for [Expo](https://docs.expo.io/)

## **Technologies**

1. ### [React Native](https://reactnative.dev/docs/intro-react-native-components)

2. ### [Expo](https://docs.expo.dev/)

3. ### [NativeBase UI Library](https://docs.nativebase.io/?utm_source=HomePage&utm_medium=header&utm_campaign=NativeBase_3)

4. ### [React Navigation](https://reactnavigation.org/)

5. ### [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/usage)

## **Themes (Dark Mode)**

NativeBase has a wealth of theming functionality. See [here](https://docs.nativebase.io/3.0.x/color-mode) for details.

Our theme file can be found in "./app/src/theme/index.ts"

Values found here are exposed to the entire app via hooks like "useColorMode" and "useBreakpointValue".
These hooks allow us to add "theme-aware" logic to our JSX components.

## **Development Instruction**

Globally install the [expo cli](https://www.npmjs.com/package/expo-cli)

```
  npm i -g expo-cli
```

Globally install the [yarn package manager](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

```
  npm install --global yarn
```

From "./app", run the following to install the packages into the "node_modules" folder:

```
  yarn install
```

While still in "./app" then run one of the following to start the app:

```
  yarn run
  yarn run web
  yarn run android
```

### **Responsiveness**

With the useBreakpointsValue hook, you can define how the app should look at different breakpoints. See "flexDir" on the Home.tsx file.

### **Phone versions**

Download the expo app from the Google Play or Apple Store on your phone. When you run the web version, it will generate a QR code.
Activate the camera within the Expo app to read the QR code. The app will bundle and be loaded onto your phone. It supports hot reload.

You can also use Android Studio with an Android Virtual Device to run the app on an emulated Android device, as described below. For further details please lookup guides on YouTube.

1. download [Android Studio](https://developer.android.com/studio), configure it properly, add a virtual device, and have React Native display on the emulated device

2. download the [Expo](https://expo.dev/client) app from the Goolge Play Store, or Expo Go from Apple's App Store, and use the QR Code generated in the CLI to get the app running on your phone

### **Troubleshooting**

You can clear expo's cache with the following command:

```
  expo r -c
```

There is an unfortunate issue with react-native-reanimated and Android. I cannot use version 2.x, and instead have to use version 1.x. What is more, I needed to apply the following code to node-modules/react-native-reanimated/src/Animated.js. Everyone will have to do this if they want to test their code on Android. For now it works, but I'll have to find a better solution later.

```
  global.\_\_reanimatedWorkletInit = () => {};
```

Since we're only using Android Studio for device emulation, if there is an error with your emulator (e.g., I lost mine and could not get it back due to corruption within the Android Studio project), simply start a new Android Studio project. This will create a new emulator for you.

If you're running into package issues that are not installed on your local machine but seem to be apart of the project, you might want to try and get those packages using yarn. You can get them by moving into your ./app directory and running the following code. This error will likely be present when you're trying to perform a 'yarn run' command.

```
yarn
yarn install
```