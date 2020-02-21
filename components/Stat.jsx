import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TabBarIcon from './TabBarIcon'
import Colors from '../constants/Colors'

const Stat = ({stat, iconType, colour, icon, size}) => {
  return (
    <View style={styles.wrapper}>
      <TabBarIcon name={icon} iconType={iconType} color={Colors.secondary} size={size}/>
      <Text style={[{...styles.text}, {color: colour}]}>{stat}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10
  },
  text: {
    fontFamily: 'muli-bold'
  }
})
export default Stat
