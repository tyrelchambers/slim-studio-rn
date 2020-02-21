import * as React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  if (props.iconType === "ionicons") {
    return (
      <Ionicons
        name={props.name}
        size={props.size}
        style={{marginRight: 5}}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }

  if (props.iconType === "material") {
    return (
      <MaterialIcons
        name={props.name}
        size={props.size}
        style={{marginRight: 5}}
        color={props.color ? props.color : props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
