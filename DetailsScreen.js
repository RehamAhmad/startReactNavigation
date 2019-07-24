import React from "react";
import { View, Text, Button } from "react-native";

// using push instead of navigate to add the same current route to the stack 
// IMPO : if there are more than one screen in the stack back button will be added automatically to the header by stack navigator....
// if you want to trigger back button yourself you can use this.props.navigate.goBack();
// FOR YOUR INFO : On Android, React Navigation hooks in to the hardware back button and fires the goBack() function for you when the user presses it, so it behaves as the user would expect. 
// to go to the first screen without back button or navigate use : navigation.popToTop()

export class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

