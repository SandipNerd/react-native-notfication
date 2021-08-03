/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, LogBox} from 'react-native';

import RemotePushController from './src/services/RemotePushController';
import {
  LocalNotification,
  ScheduleNotification,
} from './src/services/LocalPushController';

// import {apiNotificationHandler} from './src/services/APIPushController';
import CustomButton from './src/components/CustomButton';

LogBox.ignoreAllLogs();

const App = () => {
  // fcm_fallback_notification_channel

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>REACT NATIVE PUSH NOTIFICATION</Text>
      <View style={styles.container}>
        <CustomButton
          title="Push LocalNotification"
          onClick={() => {
            LocalNotification();
          }}
        />
        <CustomButton
          title="Schedule LocalNotification"
          onClick={ScheduleNotification}
        />
        {/* <CustomButton
          title="API Notification"
          onClick={() => {
            apiNotificationHandler();
          }}
        /> */}
        <RemotePushController />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 30,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
