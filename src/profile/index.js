import React from 'react';
import { Button, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';


class Profile extends React.Component {

    logOut = () => {
        AsyncStorage.removeItem('token');
        this.props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: 'Login' },
              ],
            })
        );
    }

    render() {
        return (
            <View>
                <Button title='Logout' onPress={this.logOut} />
            </View>
        );
    }
}

export default Profile;