import React from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import axios from '../helpers/axios-intercept';
import UserCard from './user_card';
import styles from './styles';
import BASEURL from '../BASEURL';

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
    }

    componentDidMount() {
        this.fetchResults();
    }

    fetchResults = () => {
        this.setState({ refreshing: true })
        axios.get(`${BASEURL}/api/get/leaderboard`)
            .then(({ data }) => this.setState({ data: data.data, renderList: data.data, searchText: '' }))
            .catch(error => console.log('Error: ', error))
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
                    ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
                    ListEmptyComponent={() => <Text style={{ alignSelf: 'center' }}>Seems like nothing's here </Text>}
                />
            );
        } else {
            return (
                <ActivityIndicator size='large' color='#00b7ff' />
            )
        }
    }

    searchUser = (searchText) => {
        console.log(this.state.data);
        this.setState({ searchText });
        if (searchText === '') {
            this.setState({ renderList: this.state.data });
        } else {
            var result = this.state.data.filter((item, index) => {
                if((item.username.toLowerCase().includes(searchText.toLowerCase())) || (item.fullname.toLowerCase().includes(searchText.toLowerCase())))
                    return item;
            });
            console.log(result)
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