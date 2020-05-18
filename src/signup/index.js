import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';
import {Picker} from '@react-native-community/picker';

import styles from './styles';
import InputComponent from './input';
import BASEURL from '../BASEURL';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signingUp: false,
            username: '',
            fullname: '',
            password: '',
            conf_pass: '',
            email: '',
            gender: 'M'
        }
    }


    validateFields = () => {
        const { username, password, fullname, conf_pass, email } = this.state;
        if (username === '' || password === '' || fullname === '' || conf_pass === '' || email === '') {
            Alert.alert('Warning', 'One or more fields is empty, fill them before proceeding');
            return false;
        }
        if (password !== conf_pass) {
            Alert.alert('Warning', 'The passwords do not match, check them.');
            return false;
        }

        return true;
    }

    trySignup = () => {
        this.setState({ signingUp: true });
        if (this.validateFields()) {
            const { username, password, fullname, email, gender } = this.state;
            axios.post(`${BASEURL}/api/add/user`, {
                user: {
                    username, password, fullname, email, gender
                }
            })
                .then(() => {
                    Alert.alert('Success', 'The user was successfully registered, Log in to continue');
                    this.props.navigation.pop();
                })
                .catch(error => {
                    Alert.alert('Error', 'The username/email is already in use, try using some other username, email');
                })
                .finally(() => this.setState({ signingUp: false }));
        } else {
            this.setState({ signingUp: false });
        }
    }

    renderBottomArea = () => {
        if (this.state.signingUp)
            return <ActivityIndicator size='large' color='purple' />
        return (
            <>
                <View style={{ flexDirection: 'row' }}>
                    <Text> Already a user? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                        <Text style={styles.signupText}>
                            Login!
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.trySignup}>
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
                <Text style={styles.heading}>
                    Signup
                </Text>
                <ScrollView contentContainerStyle={styles.inputContainer}>
                    <View>
                        <InputComponent
                            value={this.state.fullname}
                            onChangeText={fullname => this.setState({ fullname })}
                            placeholder='Full Name'
                        />
                        <InputComponent placeholder='Username'
                            value={this.state.username}
                            onChangeText={username => this.setState({ username })}
                        />
                        <InputComponent
                            placeholder='Password'
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry
                        />
                        <InputComponent
                            value={this.state.conf_pass}
                            onChangeText={conf_pass => this.setState({ conf_pass })}
                            secureTextEntry
                            placeholder='Confirm Password'
                        />
                        <InputComponent
                            placeholder='Email'
                            keyboardType='email-address'
                            autoCapitalize = 'none'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={this.state.gender}
                                style={{height: 50, width: 100 }}
                                onValueChange={(itemValue) =>
                                    this.setState({language: itemValue})
                            }>
                                <Picker.Item label="Male" value="M" />
                                <Picker.Item label="Female" value="F" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        {this.renderBottomArea()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SignUp;