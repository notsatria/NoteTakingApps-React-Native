import React from 'react';
import {View, Text} from 'react-native';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screen/SignInScreen/SignInScreen';
import SignUpScreen from '../screen/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screen/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screen/NewPasswordScreen/NewPasswordScreen';
import Intro from '../screen/HomeScreen/intro';
import NoteScreen from '../screen/NoteScreen/NoteScreen';
import NoteDetail from '../components/NoteDetail/NoteDetail';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const RenderNoteScreen = props => (
    <NoteScreen {...props} user={user}></NoteScreen>
  );

  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
        <Stack.Screen
          name="ConfirmEmail"
          component={ConfirmEmailScreen}></Stack.Screen>
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}></Stack.Screen>
        <Stack.Screen
          name="NewPassword"
          component={NewPasswordScreen}></Stack.Screen>
        <Stack.Screen name="Intro" component={Intro}></Stack.Screen>
        <Stack.Screen
          name="NoteScreen"
          component={RenderNoteScreen}></Stack.Screen>
        <Stack.Screen name="NoteDetail" component={NoteDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
