import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState, } from 'react';
import {StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import Intro from './src/screen/HomeScreen/intro';
import NoteScreen from './src/screen/NoteScreen/NoteScreen';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NoteDetail from './src/components/NoteDetail/NoteDetail';
import NoteProvider from './src/Context/NoteProvider';
const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({});

  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    if (result !== null) {
      setUser(JSON.parse(result));
    }
  };

  const RenderNoteScreen = props => <NoteScreen {...props} user={user} />;

  useEffect(() => {
    // AsyncStorage.clear();
    findUser();
  }, []);
  if (!user.name) return <Intro onFinish={findUser}></Intro>;
  return (
    // <NoteScreen user={user}></NoteScreen>
    <NavigationContainer>
      <NoteProvider>
        <Stack.Navigator
          screenOptions={{headerTitle: '', headerTransparent: true}}>
          <Stack.Screen
            component={RenderNoteScreen}
            name="NoteScreen"></Stack.Screen>
          <Stack.Screen component={NoteDetail} name="NoteDetail"></Stack.Screen>
        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  );

  // return (
  //   <>
  //     <StatusBar />
  //     <SafeAreaView style={styles.root}>
  //       <Navigation></Navigation>
  //       <NoteScreen user={user}></NoteScreen>
  //     </SafeAreaView>
  //   </>
  // );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
