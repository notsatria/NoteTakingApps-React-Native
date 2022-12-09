import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const {username, setUsername} = useState('');
  const {email, setEmail} = useState('');
  const {password, setPassword} = useState('');
  const {passwordRepeat, setPasswordRepeat} = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('Terms');
  };

  const onPrivacyPressed = () => {
    console.warn('Privacy');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <View style={{marginVertical: 10}}></View>
        <CustomInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}></CustomInput>
        <CustomInput
          placeholder={'Email'}
          value={email}
          setValue={setEmail}></CustomInput>
        <CustomInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry></CustomInput>
        <CustomInput
          placeholder={'Repeat Password'}
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry></CustomInput>
        <CustomButton
          text="Register"
          onPress={onRegisterPressed}
          type="PRIMARY"></CustomButton>
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButton></SocialSignInButton>

        <CustomButton
          text="Have an account? Sign In"
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

export default SignUpScreen;
