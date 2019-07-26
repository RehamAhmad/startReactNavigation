export function gotoScreen(navigation, screenName: string, passProps?: Object, action?) {
    if (action) {
      action();
    }
    console.log('********** Go to Screen', screenName);
    navigation.navigate({ routeName: screenName, key: screenName, params: passProps });
  }