/* React navigation */
// -Installation  
// npm install react-navigation
// -Install react-native-gesture-handler   //With expo it's already included in the SDK you don't need to do anything
// npm install react-native-gesture-handler

// -Next, we need to link it. The steps depends on your React Native version:
// with react-native v6 its autolinking but still need more congiguration 
// Link react-native link react-native-gesture-handler
// at MainActivity.java add:
// import com.facebook.react.ReactActivityDelegate;
// import com.facebook.react.ReactRootView;
// import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
// @Override
// protected ReactActivityDelegate createReactActivityDelegate() {
//   return new ReactActivityDelegate(this, getMainComponentName()) {
//     @Override
//     protected ReactRootView createRootView() {
//      return new RNGestureHandlerEnabledRootView(MainActivity.this);
//     }
//   };
// }
// Finally, run react-native run-android or react-native run-ios to launch the app on your device/simulator.


// Start..................
// createStackNavigator  is a function that returns a React component. It takes a route configuration object




// NOTICE :- react-navigation@3.x needs react-native-gesture-handler to work
// React navigation lifecycle https://reactnavigation.org/docs/en/navigation-lifecycle.html





import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen } from "./HomeScreen";
import { DetailsScreen } from "./DetailsScreen";



const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,  // by default go to the first screen without initialScreenName
    Details: DetailsScreen
  },
  {
    initialRouteName:'Home'  // change the initial route
  }

);
export default createAppContainer(AppNavigator);