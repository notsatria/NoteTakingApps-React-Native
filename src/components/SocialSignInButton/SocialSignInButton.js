import React from 'react';
import {View} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButton = () => {
  
  const onSignInFacebook = () => {
    console.warn('Facebook');
  };

  const onSignInGoogle = () => {
    console.warn('Google');
  };

  return (
    <>
      <CustomButton
        text="Sign Up with Google"
        onPress={onSignInGoogle}
        type="PRIMARY"
        bgColor={'#FAE9EA'}
        fgColor={'#DD4D44'}></CustomButton>
      <CustomButton
        text="Sign Up with Facebook"
        onPress={onSignInFacebook}
        type="PRIMARY"
        bgColor={'#E7EAF4'}
        fgColor={'#4765A9'}></CustomButton>
    </>
  );
};

export default SocialSignInButton;
