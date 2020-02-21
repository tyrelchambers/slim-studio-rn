import React from 'react'
import { View, Text } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import VideoWidget from '../components/VideoWidget'
import { StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

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
    <View
      style={styles.wrapper}
    >
      <Text
        style={{
          fontSize: 28,
          padding:10,
          color: Colors.secondary,
          fontFamily: 'muli-black'
        }}
      >All Videos</Text>
      <FlatList 
        data={DATA}
        renderItem={({item}) => item.el}
        contentContainerStyle={{
          padding: 10
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 60,
    marginBottom: 110
  },

})

export default VideosScreen
