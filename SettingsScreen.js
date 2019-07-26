import React from "react";
import { View, Text, Button } from "react-native";

// this.props.navigation: the navigation prop is passed in to every screen component
// we call the navigate function with the name of the route that we'd like to move the user to.


export class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Settings Screen</Text>
          <Button
            title="Go to Profile"
            onPress={() => this.props.navigation.navigate('Profile')} 
            //
          />
          
        </View>
      );
    }
  }