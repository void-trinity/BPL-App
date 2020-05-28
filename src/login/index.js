import * as React from 'react';
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity, Button, Alert, ActivityIndicator, Platform } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import styles from './styles';
import BASEURL from '../BASEURL';
import SocialLoginButton from './socialLoginButton';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggingIn: false,
            username: '',
            password: ''
        }
    }
    componentDidMount() {
        GoogleSignin.configure({
            webClientId: '957298805206-fplj2up2j61o60sgo0nknrm3637cg960.apps.googleusercontent.com',
            forceConsentPrompt: true,
            androidClientId: '957298805206-3s3b3soal0ti7pgqaatqcje6kkjrvpmt.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        });
    }

    loginWithServer = (token, type) => {
        axios.post(`${BASEURL}/api/login`, {
            token,
            type
        })
        .then(({ data }) => {
            AsyncStorage.setItem('token', data.token)
                .then(() => {
                    this.props.navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [
                                { name: 'Bottomnav' },
                            ],
                        })
                    );
                })
                .catch(error => {
                    Alert.alert('Error', 'Something went wrong with the app, try again later.');
                    this.setState({ loggingIn: false });
                })
        })
        .catch(error => {
            Alert.alert('Error', 'Error on the backend, please try logging in later');
            this.setState({ loggingIn: false });
        });
    }

    googleSignIn = () => {
        this.setState({ loggingIn: true });
        GoogleSignin.hasPlayServices()
            .then(async res => {
                GoogleSignin.signIn()
                    .then(res => this.loginWithServer(res.idToken, 'G'))
                    .catch(error => {
                        Alert.alert('Error', 'Something went wrong, try again later');
                        this.setState({ loggingIn: false });
                    });
            })
            .catch(err => {
                Alert.alert('Error', 'Something went wrong, try again later');
                this.setState({ loggingIn: false });
            });
    };

    fbSignIn = () => {
        this.setState({ loggingIn: true });
        LoginManager.logInWithPermissions(["public_profile", 'email'])
            .then(async result => {
                if (result.isCancelled) {
                    Alert.alert('Warning', 'Login cancelled by user');
                } else {
                    AccessToken.getCurrentAccessToken()
                        .then((data) => this.loginWithServer(data.accessToken.toString(), 'F'))
                        .catch((error) => {
                            Alert.alert('Error', 'Something went wrong, try again later');
                            this.setState({ loggingIn: false });
                        })
                }
            })
            .catch((error) => {
                Alert.alert('Error', 'Something went wrong, try again later');
                this.setState({ loggingIn: false });
            })
    }

    renderButtons = () => {
        if(this.state.loggingIn) {
            return <ActivityIndicator size='large' color='#00b7ff' />
        } else {
            return (
                <View style={styles.buttonContainer}>
                    <SocialLoginButton title='Google' backgroundColor='#de5246' onPress={this.googleSignIn}/>
                    <SocialLoginButton title='Facebook' backgroundColor='#3b5998' onPress={this.fbSignIn} />
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>
                        Welcome
                    </Text>
                    <Text style={styles.secondaryText}>
                        Please login to continue
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/logo.png')} resizeMode='contain' style={styles.logoImage} />
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.secondaryText}>
                        Please select a preferred social login
                    </Text>
                    {this.renderButtons()}
                </View>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>
                        We don't collect any data, we only store user email and name for data management purpose
                    </Text>
                </View>
            </View>
        );
    }
}

export default Login;