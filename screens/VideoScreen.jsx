import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Stat from '../components/Stat'
import colours from '../constants/Colors'
import TabBarIcon from '../components/TabBarIcon'

const VideoScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Image 
        style={styles.thumbnail}
        source={{uri: 'https://images.unsplash.com/photo-1581806760632-eacab2d0b84a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}}
      />
      <Text style={styles.title}>Seven True Stalker Stories</Text>

      <View style={styles.statsWrapper}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Stat
            iconType="material"
            stat="500"
            size={15}
            colour={colours.secondary}
            icon="graphic-eq"
          />
          <Stat
            iconType="material"
            stat="500"
            size={15}
            colour={colours.secondary}
            icon="mode-comment"
          />
          <Stat
            iconType="material"
            stat="500"
            size={15}
            colour={colours.secondary}
            icon="thumb-up"
          />
          <Stat
            iconType="material"
            stat="500"
            size={15}
            colour={colours.secondary}
            icon="thumb-down"
          />
        </View>

        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
            <TabBarIcon 
            iconType="material"
            size={15}
            name="visibility"
            color={colours.secondary}
          />
          <TabBarIcon 
            iconType="material"
            size={15}
            name="monetization-on"
            color="green"
          />             
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30
  },
  statsWrapper: {
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(255,255,255, 0.9)',
    width: '95%',
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  thumbnail: {
    width: '95%',
    borderRadius: 20,
    marginHorizontal: 10,
    height: 205,
    borderRadius: 20,
    marginVertical: 10,

  },
  title: {
    fontSize: 40,
    margin: 10,
    fontFamily: 'muli-bold'
  }
})


export default VideoScreen
