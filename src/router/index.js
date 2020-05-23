import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../login';
import BottomNav from './bottomnav';
import SplashScreen from '../splashscreen';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

class Router extends React.Component {
    constructor(props) {
        super(props);
        this.initialRouteName = '';
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token')
            .then((data) => {
                if (data)
                    this.initialRouteName = 'Bottomnav';
                else
                    throw new Error('Data not found');
            })
            .catch(() => this.initialRouteName = 'Login')
            .finally(() => this.setState({ loading: false }));
    }

    render() {
        if(this.state.loading)
            return <SplashScreen />
        return (
            <Stack.Navigator headerMode='none' initialRouteName={this.initialRouteName}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Bottomnav' component={BottomNav} />
            </Stack.Navigator>
        )
    }
}


export default Router;