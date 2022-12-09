import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  const {code, setCode} = useState('');
  const {newPassword, setNewPassword} = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('HomeScreen');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <View style={{marginVertical: 10}}></View>
        <CustomInput
          placeholder={'Code'}
          value={code}
          setValue={setCode}></CustomInput>
        <CustomInput
          placeholder={'Enter your new password'}
          value={newPassword}
          setValue={setNewPassword}></CustomInput>

        <CustomButton
          text="Submit"
          onPress={onSubmitPressed}
          type="PRIMARY"></CustomButton>

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

export default NewPasswordScreen;
