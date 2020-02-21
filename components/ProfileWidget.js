import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {inject, observer} from 'mobx-react'
import colours from '../constants/Colors'
const ProfileWidget = inject("store")(observer(({store}) => {
  return (
    <View style={styles.widget}>
      <View style={styles.avatar}></View>
      <View>
        <Text style={styles.title}>Stories After Midnight</Text>
        <Text style={styles.subtitle}>3,400 subscribers</Text>
      </View>
    </View>
  )
}))

const styles = StyleSheet.create({
  widget: {
    width: '100%',
    height: 90,
    backgroundColor: 'white',
    borderRadius: 50,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 3
    },
    shadowRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    marginTop: -60
  },
  avatar: {
    width: 57,
    height: 57,
    backgroundColor: 'grey',
    borderRadius: 50,
    marginRight: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colours.secondary,
    marginBottom: 5
  },
  subtitle: {
    color: colours.secondary
  }
})

export default ProfileWidget
