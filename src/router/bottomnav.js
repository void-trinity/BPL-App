import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Leaderboard from '../leaderboard';

const Tab = createBottomTabNavigator();

function BottomNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Leaderboard} />
            <Tab.Screen name="Settings" component={Leaderboard} />
        </Tab.Navigator>
    );
}

export default BottomNav;