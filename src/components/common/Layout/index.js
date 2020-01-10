import React, { Component } from 'react';
import { View } from 'react-native';
import { Notifications } from 'expo';
import { withRouter } from 'react-router-native';
import { statusBarHeight } from '~/constants';
import PropTypes from 'prop-types';

class MainLayout extends Component {
  componentDidMount() {
    this.subscribePushNotifications();
  }

  componentWillUnmount() {
    this.unSubscribePushNotifications();
  }

  subscribePushNotifications = () => {
    this.notificationSubscription = Notifications.addListener(this.handleNotification);
  };

  unSubscribePushNotifications = () => {
    this.notificationSubscription.remove();
  };

  handleNotification = notification => {
    if (notification.origin === 'selected' && notification.data.chatId) {
      this.props.history.push(`chats/${notification.data.chatId}`);
    }
  };

  render() {
    const { children } = this.props;

    return (
      <View
        style={{
          paddingTop: statusBarHeight,
          flex: 1,
        }}
      >
        {children}
      </View>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(MainLayout);
