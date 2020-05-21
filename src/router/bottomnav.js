import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Leaderboard from '../leaderboard';
import Profile from '../profile';

const Tab = createBottomTabNavigator();

function BottomNav() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Leaderboard') {
                    iconName = 'Trophy';
                } else if (route.name === 'Profile') {
                    iconName = 'user'
                }

                return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#00b7ff',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Leaderboard" component={Leaderboard} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default BottomNav;