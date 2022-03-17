/* 
Victory has a react and a react native version. Unfortunately neither work on both web and mobile platforms due to how react native handles SVGs

This is a platform-specific workaround. You may reference in a file as, say, "file.ts", and if in the same location there is a sibling file called "file.native.ts", the appropriate file will be called depending on the platfrom (i.e., the native version for mobile platforms).

See here for further details: https://reactnative.dev/docs/platform-specific-code
*/

import * as VictoryNative from "victory-native";

export default VictoryNative;
