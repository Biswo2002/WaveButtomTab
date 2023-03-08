import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomFabBar } from 'rn-wave-bottom-bar';
import { NavigationContainer } from '@react-navigation/native';

const Bottomtab = () => {

  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     tabBarOptions={{
    //       activeTintColor: 'purple', // Used for the FAB background Color
    //     }}
    //     tabBar={(props) => <BottomFabBar color="purple" {...props} />}
    //   >
    //     <Tab.Screen
    //       options={{ tabBarIcon: tabBarIcon('aliwangwang-o1') }}
    //       name="Home"
    //       component={generateScreen('Home')}
    //     />
    //     <Tab.Screen
    //       name="Account"
    //       options={{ tabBarIcon: tabBarIcon('meh') }}
    //       component={generateScreen('Meh')}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>;
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5F0B65',
        tabBarActiveBackgroundColor: '#5F0B65',
        tabBarInactiveBackgroundColor: 'red',
      }}
      tabBar={(props: any) => (
        <BottomFabBar
          mode={'square' | 'default'}
          isRtl={false}
          // Add Shadow for active tab bar button
          focusedButtonStyle={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
          }}
          // - You can add the style below to show screen content under the tab-bar
          // - It will makes the "transparent tab bar" effect.
          bottomBarContainerStyle={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          {...props}
        />
      )}
    >
      <Tab.Screen
        options={{
          tabBarIcon: tabBarIcon('aliwangwang-o1'),
        }}
        name="Home"
        component={generateScreen('Home')}
      />
      <Tab.Screen
        name="Meh"
        options={{ tabBarIcon: tabBarIcon('meh') }}
        component={generateScreen('Meh')}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabBarIcon('rocket1'),
          tabBarActiveBackgroundColor: '#45014A',
          tabBarActiveTintColor: 'purple',
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <Tab.Screen
        options={{ tabBarIcon: tabBarIcon('Trophy') }}
        name="Trophy"
        component={generateScreen('Trophy')}
      />
      <Tab.Screen
        options={{ tabBarIcon: tabBarIcon('wallet') }}
        name="Wallet"
        component={generateScreen('Wallet')}
      />
    </Tab.Navigator>
  )
}

export default Bottomtab

const styles = StyleSheet.create({})