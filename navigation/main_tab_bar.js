import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import About from '../components/about';
import SearchTab from '../navigation/search_tab';


const MainTabBar = createBottomTabNavigator(
  {
    SearchTab: {
      screen: SearchTab,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Search',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="search"
            size={26}
            color={focused ? '#58AADA' : 'grey'}
          />
        ),
      }),
    },
    AboutTab: {
      screen: About,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'About',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="info-circle"
            size={26}
            color={focused ? '#58AADA' : 'grey'}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'SearchTab',
  },
);


export default MainTabBar;
