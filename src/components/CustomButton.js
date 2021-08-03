import React from 'react';
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

const CustomButton = props => {
  return (
    <TouchableNativeFeedback onPress={props.onClick}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#63a2bb',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomButton;
