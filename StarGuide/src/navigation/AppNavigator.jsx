import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import DashboardScreen from '../screens/DashboardScreen';
import ExplorerScreen from '../screens/ExplorerScreen';
import DetailScreen from '../screens/DetailScreen';
import EventsScreen from '../screens/EventsScreen';
import LogScreen from '../screens/LogScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExplorerStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExplorerMain" component={ExplorerScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#0B0F19', borderTopColor: '#1F2937' },
          tabBarActiveTintColor: '#38BDF8',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Dashboard') iconName = focused ? 'compass' : 'compass-outline';
            else if (route.name === 'Explorer') iconName = focused ? 'search' : 'search-outline';
            else if (route.name === 'Events') iconName = focused ? 'calendar' : 'calendar-outline';
            else if (route.name === 'Log') iconName = focused ? 'book' : 'book-outline';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Explorer" component={ExplorerStack} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Log" component={LogScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}