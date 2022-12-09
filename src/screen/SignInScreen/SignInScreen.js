import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/gdglogo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onSignInPressed = () => {
    // validate user

    navigation.navigate('Intro');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"></Image>
        <Text style={styles.name}>Note App Satria</Text>
        <View style={{marginVertical: 10}}></View>
        <CustomInput
          placeholder={'Username'}
          value={username}
          setValue={setUsername}></CustomInput>
        <CustomInput
          placeholder={'Password'}
          value={password}
          setValue={setPassword}
          secureTextEntry></CustomInput>
        <CustomButton
          text="Sign In"
          onPress={onSignInPressed}
          type="PRIMARY"></CustomButton>
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"></CustomButton>
        <SocialSignInButton></SocialSignInButton>
        <CustomButton
          text="Don't have an account? Sign Up"
          onPress={onSignUpPressed}
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
  logo: {
    width: '60%',
    maxWidth: 500,
    height: 20,
    maxHeight: 200,
    marginTop: 20,
  },
  name: {
    fontSize: 32,
    padding: 20,
    color: 'black',
  },
});

export default SignInScreen;
