import React, {useEffect} from 'react'
import { View, Text, StyleSheet, AsyncStorage } from 'react-native'
import colours from '../constants/Colors';
import { Button } from 'react-native-elements';
import * as Google from 'expo-google-app-auth';
import axios from 'axios'
import {inject, observer} from 'mobx-react'

const SignupScreen = inject("store")(observer(({navigation, store}) => {
  useEffect(() => {
    const fn = async () => {
      
    }
    fn()
  }, [])

  const signIn = async () => {
    const { type, accessToken, user } = await Google.logInAsync({
      iosClientId: '365092619848-k8n2c9a933n8h3c7fchjl5idjc58644m.apps.googleusercontent.com',
      androidClientId: '365092619848-5hbvtavf0b5d30g5e8sn1ic0vfr2lunt.apps.googleusercontent.com'
    });
  
  
    if (type === 'success') {
      // Then you can use the Google REST API
      let userInfoResponse = await axios.get('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      await AsyncStorage.setItem("accessToken", accessToken);
      store.setUser(user)
      store.setAccessToken(accessToken)
      navigation.push("Root")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title}>Slim Studio</Text>
      <Button
        title="Connect to YouTube"
        buttonStyle={styles.button}
        titleStyle={styles.text}
        onPress={() => signIn()}
      />
    </View>
  )
}))

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colours.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 55,
    fontFamily: "muli-black",
    color: colours.tabBar,
    color: colours.secondary
  },
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 50,
    shadowColor: 'black',
    shadowOffset: {
      height: 4
    },
    shadowRadius: 15,
    shadowOpacity: 0.3
  },
  text: {
    fontFamily: "muli-bold"
  }
})

export default SignupScreen
