import React from 'react';
import { Image, View, TouchableOpacity, Modal, Text, FlatList, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import avatar_uri from '../helpers/avatar_uri_json';
import ModalButton from './modalButton';


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSelected: 1,
            modalVisible: false,
            avatarChoice: 1,
            loading: true
        }
        this.avatars = [];
    }

    componentDidMount() {
        for(var i = 1; i <= 80; i++) {
            this.avatars.push(i);
        }
        AsyncStorage.getItem('avatar')
            .then(data => {
                if(data)
                    this.setState({ avatarSelected: data, avatarChoice: data });
                else
                    throw new Error('Avatar not found');
            })
            .catch(error => {
                this.setState({ avatarSelected: 1, avatarChoice: 1 })
            })
            .finally(() => this.setState({ loading: false }));
    }

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
            return <ActivityIndicator size='large' color='#dedede' />;
        return <Image source={this.getImageUri(this.state.avatarSelected)} style={styles.avatarImage} />
    }

    setAvatar = () => {
        this.setState({ avatarSelected: this.state.avatarChoice, modalVisible: false });
        AsyncStorage.setItem('avatar', this.state.avatarChoice.toString());
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
                        <View style={styles.avatarContainer}>
                            {this.renderAvatar()}
                        </View>
                    </TouchableOpacity>
                </View>
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
                                <ModalButton title='OK' onPress={this.setAvatar}/>
                                <ModalButton title='Cancel' onPress={() => this.setState({ modalVisible: false, avatarChoice: this.state.avatarSelected })} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default Profile;