import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Image, RefreshControl } from 'react-native'
import {inject, observer} from 'mobx-react'
import colours from '../constants/Colors';
import VideoWidget from '../components/VideoWidget';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileWidget from '../components/ProfileWidget';

const HomeScreen = inject("store")(observer(({navigation, store}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    store.getChannelInfo()
  }, [])

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false)
    }, 2000);
  }, [refreshing]);
 
  return (
    <ScrollView 
      style={styles.wrapper}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.img}></View>
      <ProfileWidget/>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.num}>
            200K 
          </Text>
          <Text style={styles.label}>views</Text>
        </View>
        
        <View style={styles.stat}>
          <Text style={styles.num}>
            200K 
          </Text>
          <Text style={styles.label}>views</Text>
        </View>

        <View style={styles.stat}>
          <Text style={styles.num}>
            200K 
          </Text>
          <Text style={styles.label}>views</Text>
        </View>
      </View>

      <View style={{padding: 10, paddingBottom: 40}}>
        <VideoWidget/>
        <VideoWidget/>
        <VideoWidget/>
        <Text 
          style={{
            textAlign: 'center',
            marginVertical: 10,
            color: colours.tintColor
          }}
          onPress={() => navigation.navigate("Videos")}
        >View all videos</Text>
      </View>
    </ScrollView>
  )
}))

export default HomeScreen

const styles = StyleSheet.create({
  statsWrapper: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(255,255,255, 0.9)',
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  video: {
    height: 205,
    borderRadius: 20,
    marginVertical: 10,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 3
    },
    shadowRadius: 10,
    position: 'relative'
  },
  videosWrapper: {
    width: '100%',
    marginTop: 30
  },
  num: {
    color: colours.secondary,
    fontWeight: '800',
  },
  label: {
    marginLeft: 5,
    opacity: 0.6
  },
  stat: {
    display: 'flex',
    flexDirection: 'row'
  },   
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
  },
  wrapper: {
    paddingTop: 40,
    flex: 1,

  },
  img: {
    width: '100%',
    backgroundColor: 'black',
    height: 143,
    borderRadius: 20
  },

})