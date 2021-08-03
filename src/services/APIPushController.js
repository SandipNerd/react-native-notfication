import PushNotification from 'react-native-push-notification';

export const apiNotificationHandler = async () => {
  const message = {
    to: 'f897PSgqQ0OVeTurB_oFiP:APA91bEtLUPGAXjC5_DRoweAsKtE51lgZ--tctEQklFXW_yjOdN3L1tqOmKYIwjKt3QTh8th36Wo9YWGTbqpoHluOi554mJxpWdOjTOx-DA0BfptbfiEJ3QuvDk0SDn_2L3_Dz5b-UIv',
    notification: {
      title: 'Api Notification',
      boby: 'This is api notification demo in React Native app. Only shown, when expanded.',
      vibrate: 1,
      sound: 1,
      show_in_foreground: true,
      priority: 'high',
      content_available: true,
    },
  };

  let headers = new Headers({
    'Content-Type': 'application/json',
    Authorization:
      'key=AAAATTyxRwk:APA91bG9Iybpv8W4ZwF-pGdhXdnheHT7v_Z6ih0kZafIfhiffqYcg8gU0EtHQHoMis-NxGXPvEfx7LOffjAc_EN6O0h1CarQMrSn7iCIgJFBuo7SpiyM5LPlPhPfMOI5UfmJFamjym72',
  });

  try {
    let response = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers,
      body: JSON.stringify(message),
    });
    response = await response.json();
    PushNotification.localNotification({
      channelId: 'fcm_fallback_notification_channel',
      bigText: message.notification.body,
      subText: 'api notification',
      title: message.notification.title,
      message: 'Expand me to see more',
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
    });
    console.log('response ', response);
  } catch (error) {
    console.log('error ', error);
  }
};
