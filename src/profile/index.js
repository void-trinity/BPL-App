import React from 'react';
import { Image, View, TouchableOpacity, Modal, Text, FlatList, TouchableWithoutFeedback, ActivityIndicator, Alert, ToastAndroid, TextInput } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import avatar_uri from '../helpers/avatar_uri_json';
import ModalButton from './modalButton';
import axios from '../helpers/axios-intercept';
import BASEURL from '../BASEURL';
import Icon from 'react-native-vector-icons/Feather';


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSelected: 1,
            modalVisible: false,
            usernameModalVisible: false,
            avatarChoice: 1,
            loading: true,
            user: {},
            username: '',
            usernameChoice: ''
        }
        this.avatars = [];
    }

    componentDidMount() {
        for(var i = 1; i <= 80; i++) {
            this.avatars.push(i);
        }

        axios.post(`${BASEURL}/api/get/user`)
            .then(({ data }) => {
                this.setState({
                    user: data.data,
                    username: data.data.username,
                    usernameChoice: data.data.username,
                    avatarSelected: data.data.avatar,
                    avatarChoice: data.data.avatar 
                });
            })
            .catch(error => console.log(error))
            .finally(() => this.setState({ loading: false }));
    }

    logOut = () => {
        Alert.alert(
            'Wait',
            'Are you sure you want to log out?',
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
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
                }
            ],
            { cancelable: false }
          );
    }

    getImageUri = (index) => {
        return avatar_uri[index];
    }
    getAvatarStyle = (index) => {
        if (index.toString() !== this.state.avatarChoice.toString())
            return styles.thumbnailContainer;
        return {...styles.thumbnailContainer, backgroundColor: '#dedede', borderRadius: 100 };
    }

    renderAvatar = () => {
        if(this.state.loading)
            return <ActivityIndicator size='large' color='black' />;
        return <Image source={this.getImageUri(this.state.avatarSelected)} style={styles.avatarImage} />
    }

    setAvatar = () => {
        this.setState({ loading: true, modalVisible: false  });
        axios.post(`${BASEURL}/api/update/avatar`, {
            avatar: this.state.avatarChoice
        })
            .then(() => {
                ToastAndroid.show('Updated your avatar !', ToastAndroid.SHORT);
                this.setState({ avatarSelected: this.state.avatarChoice });
            })
            .catch(() => {
                Alert.alert('Error', 'Something went wrong while updating your avatar')
            })
            .finally(() => this.setState({ loading: false, avatarChoice: this.state.avatarSelected }))
    }

    renderStats = () => {
        if(!this.state.loading) {
            return (
                <>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>
                            {this.state.user.name}
                        </Text>
                    </View>
                    <View style={styles.usernameContainer}>
                        <TouchableOpacity onPress={() => this.setState({ usernameModalVisible: true })}>
                            <View style={styles.usernameCard}>
                                <Text style={styles.usernameText}>
                                    {`${this.state.username}`}
                                </Text>
                                <Icon color='rgba(0,0,0,0.5)' name='edit' size={16} style={{ marginLeft: 10 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.statsContainer}>
                        <View style={styles.pointContainer}>
                            <Text style={styles.statsText}>
                                {`${this.state.user.totalScore} POINTS`}
                            </Text>
                        </View>
                        <View style={styles.gamesContainer}>
                            <Text style={styles.statsText}>
                                {`${this.state.user.totalGames} GAMES`}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.eventButtonContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Events')} style={styles.eventCard}>
                            <Text style={styles.statsText}>
                                VIEW PLAYED GAMES
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.logOutContainer} onPress={this.logOut}>
                        <Text style={styles.logOutText}>
                            LOG OUT
                        </Text>
                    </TouchableOpacity>
                </>
            )
        }
    }

    updateUsername = () => {
        this.setState({ loading: true, usernameModalVisible: false  });
        axios.post(`${BASEURL}/api/update/username`, {
            username: this.state.usernameChoice
        })
            .then(() => {
                ToastAndroid.show('Updated your username!', ToastAndroid.SHORT);
                this.setState({ username: this.state.usernameChoice });
            })
            .catch(() => {
                Alert.alert('Error', 'The username is already taken, try something else!')
            })
            .finally(() => this.setState({ loading: false, usernameChoice: this.state.username }))
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={this.state.loading ? {} : () => this.setState({ modalVisible: true })}>
                        <View style={styles.avatarContainer}>
                            {this.renderAvatar()}
                        </View>
                    </TouchableOpacity>
                </View>
                {this.renderStats()}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({ modalVisible: false })
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <View style={styles.modalHeaderContainer}>
                                <Text style={styles.modalHeading}>
                                    Select Avatar
                                </Text>
                            </View>
                            <View style={styles.flatListContainer}>
                                <FlatList
                                    data={this.avatars}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableWithoutFeedback onPress={() => this.setState({ avatarChoice: item })}>
                                                <View style={this.getAvatarStyle(item)}>
                                                    <Image style={styles.imageThumbnail} source={this.getImageUri(item)} />
                                                </View>
                                            </TouchableWithoutFeedback>
                                        );
                                    }}
                                    numColumns={3}
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={styles.flatListContentContainer}
                                />
                            </View>
                            <View style={styles.modalBottomContainer}>
                                <ModalButton style={styles.modalButton} title='OK' onPress={this.setAvatar}/>
                                <ModalButton style={styles.modalButton} title='Cancel' onPress={() => this.setState({ modalVisible: false, avatarChoice: this.state.avatarSelected })} />
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.usernameModalVisible}
                    onRequestClose={() => {
                        this.setState({ usernameModalVisible: false })
                    }}
                >
                    <View style={styles.modal2Container}>
                        <View style={styles.modal2View}>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={{ padding: 0 }}
                                    underlineColorAndroid='transparent'
                                    autoCapitalize='none'
                                    autoCompleteType='off'
                                    autoFocus
                                    value={this.state.usernameChoice}
                                    onChangeText={usernameChoice => this.setState({ usernameChoice })}
                                />
                            </View>
                            <View style={styles.modal2BottomContainer}>
                                <ModalButton title='OK' onPress={this.updateUsername} style={styles.modal2Button}/>
                                <ModalButton title='Cancel' style={styles.modal2Button} onPress={() => this.setState({ usernameModalVisible: false, usernameChoice: this.state.username })} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default Profile;