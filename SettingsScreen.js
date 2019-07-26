import React from "react";
import { View, Text, Button } from "react-native";
import { gotoScreen } from "./utils";


// this.props.navigation: the navigation prop is passed in to every screen component
// we call the navigate function with the name of the route that we'd like to move the user to.


export class SettingsScreen extends React.Component {
    // 
    static navigationOptions = {
        title: 'Settings',
      };
    // createStackNavigator uses platform conventions by default, so on iOS the title will be centered and on Android it will be left-aligned.
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Settings View</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => gotoScreen(this.props.navigation,'Profile',{greeting:'GoodMorning'})} 
                //
                />

            </View>
        );
    }
}