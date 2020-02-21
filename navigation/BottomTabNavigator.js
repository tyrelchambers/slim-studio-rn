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
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon iconType="ionicons" focused={focused} size={20} name="md-home" />,
        }}
      />

      <BottomTab.Screen
        name="Videos"
        component={VideosScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon iconType="ionicons" focused={focused} size={20} name="ios-play" />,
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

