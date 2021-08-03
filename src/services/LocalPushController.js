import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    //   notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);
  },
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },
  popInitialNotification: true,
  requestPermissions: true,
});

export const LocalNotification = () => {
  PushNotification.localNotification({
    channelId: 'fcm_fallback_notification_channel',
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'local notification',
    title: 'Local Notification',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    largeIconUrl:
      'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
    // actions: '["Yes", "No"]'
  });
};

export const ScheduleNotification = () => {
  PushNotification.localNotificationSchedule({
    channelId: 'fcm_fallback_notification_channel',
    //... You can use all the options from localNotifications
    bigText:
      'This is schedule notification demo in React Native app. Only shown, when expanded.',
    subText: 'schedule notification',
    title: 'Schedule Notification',
    message: 'Expand me to see more', // (required)
    date: new Date(Date.now() + 5 * 1000), // in 60 secs
    allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

    /* Android Only Properties */
    repeatTime: 2, // (optional) Increment of configured repeateType. Check 'Repeating Notifications' section for more info.
    largeIconUrl:
      'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
  });
};
