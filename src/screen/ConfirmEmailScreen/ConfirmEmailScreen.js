import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const {code, setCode} = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('HomeScreen');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onResendPressed = () => {
    console.warn('Resend Code');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <View style={{marginVertical: 10}}></View>
        <CustomInput
          placeholder={'Enter your confirmation code'}
          value={code}
          setValue={setCode}></CustomInput>

        <CustomButton
          text="Confirm"
          onPress={onConfirmPressed}
          type="PRIMARY"></CustomButton>

        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="SECONDARY"></CustomButton>

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"></CustomButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#051C60',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
    width: 300,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
