import React from "react";
import { View, Text, Button } from "react-native";
import { gotoScreen } from "./utils";

// this.props.navigation: the navigation prop is passed in to every screen component
// we call the navigate function with the name of the route that we'd like to move the user to.


export class ProfileScreen extends React.Component {
    greet;
    static navigationOptions =({navigation})=> {
        return  {title: navigation.getParam('greeting'),}
      };
    UNSAFE_componentWillMount() {
        // this.greet = this.props.navigation.state.params.greeting; // it may return null and you have to handle this case
        this.greet = this.props.navigation.getParam('greeting'); // you don't have to deal with null case.
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.greet}</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => gotoScreen(this.props.navigation, 'Settings')}
                //
                />

            </View>
        );
    }
}





// ADDITIONAL 
// if you want to access the params directly you can use  'react-navigation-props-mapper' package
// read about it https://github.com/vonovak/react-navigation-props-mapper
// /// import { withMappedNavigationParams } from 'react-navigation-props-mapper'