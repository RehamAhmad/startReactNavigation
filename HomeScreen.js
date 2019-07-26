import React from "react";
import { View, Text, Button } from "react-native";

// this.props.navigation: the navigation prop is passed in to every screen component
// we call the navigate function with the name of the route that we'd like to move the user to.


export class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle:  'test Header Btn',
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#000"
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

 
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen {this.state.count}</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')} 
            color="#000"
          />
          
        </View>
      );
    }
  }