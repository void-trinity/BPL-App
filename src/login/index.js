import * as React from 'react';
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';

import styles from './styles';
import InputComponent from './input';
import BASEURL from '../BASEURL';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggingIn: false,
            username: '',
            password: ''
        }
    }
    tryLogin = () => {
        const { username, password } = this.state;
        this.setState({ loggingIn: true });

        axios.post(`${BASEURL}/api/login`, {
            user: {
                username, password
            }
        })
            .then(async ({ data }) => {
                await AsyncStorage.setItem('token', data.token);
                this.props.navigation.dispatch(
                    StackActions.replace('Bottomnav')
                );
            })
            .catch((error) => {
                Alert.alert('Error', 'Something went wrong while trying to log you in, check your username and password or try again after some time.');
                console.log('Error: ', error);    
            })
            .finally(() => this.setState({ loggingIn: false }));
    }

    renderBottomArea = () => {
        if (this.state.loggingIn)
            return <ActivityIndicator size='large' color='purple' />
        return (
            <>
                <View style={{ flexDirection: 'row' }}>
                    <Text> Not a member? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.push('Signup')}>
                        <Text style={styles.signupText}>
                            SignUp!
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.tryLogin}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}> > </Text>
                    </View>
                </TouchableOpacity>
            </>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/logo.png')} resizeMode='contain' style={styles.logoImage} />
                </View>
                <KeyboardAvoidingView style={styles.inputContainer}>
                    <Text style={styles.heading}>
                        Login
                    </Text>
                    <View>
                        <InputComponent
                            placeholder='Username'
                            onChangeText={username => this.setState({ username })}
                            value={this.state.username}
                        />
                        <InputComponent
                            placeholder='Password'
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.bottomContainer}>
                        {this.renderBottomArea()}
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default Login;