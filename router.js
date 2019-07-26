/* React navigation */
// -Installation  
// npm install react-navigation
// -Install react-native-gesture-handler   //With expo it's already included in the SDK you don't need to do anything
// npm install react-native-gesture-handler

// -Next, we need to link it. The steps depends on your React Native version:
// with react-native v6 its autolinking but still need more congiguration 
// Link react-native link react-native-gesture-handler .................
// ........... with react-native 6.0 and more react-native cli autolinking this library


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
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import { HomeScreen } from "./HomeScreen";
import { DetailsScreen } from "./DetailsScreen";
import { SettingsScreen } from './SettingsScreen';
import { ProfileScreen } from './ProfileScreen';


// there is no tabs...........

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,  // by default go to the first screen without initialScreenName
//     Details: DetailsScreen
//   },
//   {
//     initialRouteName:'Home'  // change the initial route
//   }
// );

// stack for Home tab
const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
);

// stack for Settings tab
const SettingsNavigator = createStackNavigator(
  {
    Settings: SettingsScreen,
    Profile: ProfileScreen,
  }
);

// tabs
const tabNavigator = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    Settings: SettingsNavigator
  }
)

const AppContainer = createAppContainer(tabNavigator)
//  In v2 and earlier,the containers in React Navigation are automatically provided by the create*Navigator functions. As of v3, you are required to use the container directly.
// In v3 we also renamed createNavigationContainer to createAppContainer.
export default AppContainer;