import React from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import OneSignal from 'react-native-onesignal';

import axios from '../helpers/axios-intercept';
import UserCard from './user_card';
import styles from './styles';
import BASEURL from '../BASEURL';
import ListEmptyComponent from './listEmptyComponent';

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            renderList: [],
            loaded: false,
            searchText: '',
            refreshing: false
        };
        OneSignal.setLogLevel(6, 0);   
        OneSignal.init("3bfa2120-8586-4047-87cf-ed4416b7b7ed", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
        OneSignal.inFocusDisplaying(2);
        OneSignal.enableVibrate(true);

        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
    }
    
    onReceived(notification) {
        console.log("Notification received: ", notification);
    }
    
    onOpened(openResult) {
        console.log('Message: ', openResult.notification.payload.body);
        console.log('Data: ', openResult.notification.payload.additionalData);
        console.log('isActive: ', openResult.notification.isAppInFocus);
        console.log('openResult: ', openResult);
    }
    
    onIds(device) {
        const notificationID = device.userId;
        axios.post(`${BASEURL}/api/update/notificationid`, {
            notificationID
        });
    }

    componentDidMount() {
        this.fetchResults();
    }

    fetchResults = () => {
        this.setState({ refreshing: true })
        axios.get(`${BASEURL}/api/get/leaderboard`)
            .then(({ data }) => this.setState({ data: data.data, renderList: data.data, searchText: '' }))
            .catch(error => ToastAndroid.show('Error fetching leaderboard from backend, try again later', ToastAndroid.LONG))
            .finally(() => this.setState({ loaded: true, refreshing: false }));

    }

    renderList = () => {
        if (this.state.loaded) {
            return (
                <FlatList
                    onRefresh={this.fetchResults}
                    refreshing={this.state.refreshing}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.flatListContainer}
                    data={this.state.renderList}
                    renderItem={({ item }) => <UserCard user={item} />}
                    ListEmptyComponent={() => <ListEmptyComponent />}
                />
            );
        } else {
            return (
                <ActivityIndicator size='large' color='#00b7ff' />
            )
        }
    }

    searchUser = (searchText) => {
        this.setState({ searchText });
        if (searchText === '') {
            this.setState({ renderList: this.state.data });
        } else {
            var result = this.state.data.filter((item, index) => {
                if((item.username.toLowerCase().includes(searchText.toLowerCase())) || (item.name.toLowerCase().includes(searchText.toLowerCase())))
                    return item;
            });
            this.setState({ renderList: result });
        }
    }

    render() {
        return (
            <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'white' }}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText}>
                        LEADER
                        <Text style={{ color: '#00b7ff' }}>BOARD</Text>
                    </Text>
                    <View style={styles.searchContainer}>
                        <TextInput
                            placeholder='Search'
                            value={this.state.searchText}
                            onChangeText={this.searchUser}
                        />
                        <Icon name='search1' size={20} color='#ababab' />
                    </View>
                </View>
                {this.renderList()}
            </View>
        );
    }
}

export default Leaderboard;