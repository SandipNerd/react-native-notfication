import {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

const RemotePushController = () => {
  useEffect(() => {
    messaging().onMessage(payload => {
      console.log('Message received. ', payload);
      // apiNotificationHandler();
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      alert('Notification');
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log('REMOTE NOTIFICATION ==>', notification);

        // process the notification here
      },
      // Android only: GCM or FCM Sender ID
      senderID: '331730732809',
      popInitialNotification: true,
      requestPermissions: true,
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      PushNotification.localNotification({
        channelId: 'fcm_fallback_notification_channel',
        subText: 'local notification',
        title: remoteMessage.notification.title,
        message: remoteMessage.notification.body,
        vibrate: true,
        vibration: 300,
        playSound: true,
        soundName: 'default',
        largeIconUrl:
          'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
      });
    });

    return unsubscribe;
  }, []);

  return null;
};

export default RemotePushController;
