import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import VideosScreen from '../screens/VideosScreen';
import CommentsScreen from '../screens/CommentsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html

  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME} 
      tabBarOptions={{
        showLabel: false,
        style: {
          borderRadius: 20,
          width: '95%',
          marginHorizontal: 10,
          height: 50,
          marginBottom: 30,
          paddingBottom: 0,
          shadowColor: 'black',
          shadowOpacity: 0.2,
          shadowOffset: {
            height: 3
          },
          shadowRadius: 20,
          position: 'absolute'
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon iconType="ionicons" focused={focused} size={25} name="md-home" />,
        }}
      />

      <BottomTab.Screen
        name="Videos"
        component={VideosScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon iconType="ionicons" focused={focused} size={25} name="ios-play" />,
        }}
      />

      <BottomTab.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon iconType="material" focused={focused} size={20} name="chat-bubble" />,
        }}
     
      />
      
    </BottomTab.Navigator>
  );
}

