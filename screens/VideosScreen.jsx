import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import VideoWidget from '../components/VideoWidget'
import { StyleSheet } from 'react-native'

const VideosScreen = () => {
  const DATA = [
    {
      el: <VideoWidget/>
    },
    {
      el: <VideoWidget/>
    },
    {
      el: <VideoWidget/>
    }
  ]
  return (
    <FlatList 
      data={DATA}
      contentContainerStyle={styles.wrapper}
      renderItem={({item}) => item.el}
    />
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    marginTop: 20
  }
})

export default VideosScreen
