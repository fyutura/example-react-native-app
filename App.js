import React, { Fragment } from 'react';
import { StatusBar, Platform } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as AntdProvider } from '@ant-design/react-native';
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';
import { NativeRouter, Route, Switch } from 'react-router-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import store from 'shared/store';
import screens from '~/screens';
// // FIXME: fonts for some reason can not use aliases
// eslint-disable-next-line import/order
import antfill from '../node_modules/@ant-design/icons-react-native/fonts/antfill.ttf';
// // FIXME: fonts for some reason can not use aliases
// eslint-disable-next-line import/order
import antoutline from '../node_modules/@ant-design/icons-react-native/fonts/antoutline.ttf';

// For expo it doesn't work properly
// For real device it works
// Source: https://github.com/expo/expo/issues/3874#issuecomment-481459231
StatusBar.setBarStyle('dark-content');

if (Platform.OS === 'android') {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
}

class App extends React.Component {
  state = {
    isReady: false,
  };

  async componentDidMount() {
    await Font.loadAsync('antoutline', antoutline);

    await Font.loadAsync('antfill', antfill);

    // eslint-disable-next-line
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }
    return (
      <AntdProvider locale={enUS}>
        <ReduxProvider store={store}>
          <Fragment>
            <StatusBar />
            <NativeRouter>
              <Switch>
                {screens.map(screen => (
                  <Route key={screen.path} {...screen} />
                ))}
              </Switch>
            </NativeRouter>
          </Fragment>
        </ReduxProvider>
      </AntdProvider>
    );
  }
}

export default App;
