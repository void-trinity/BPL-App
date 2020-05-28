import React from 'react';
import { View, Text, ActivityIndicator, FlatList, ToastAndroid } from 'react-native';


import styles from './styles';
import axios from '../helpers/axios-intercept';
import ListEmptyComponent from './listEmptyComponent';
import BASEURL from '../BASEURL';
import EventCard from './event_card';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            refreshing: false
        }
    }

    componentDidMount() {
        this.fetchResults();
    }

    fetchResults = () => {
        this.setState({ refreshing: true });
        axios.post(`${BASEURL}/api/get/events`)
            .then(({ data }) => {
                this.setState({ data: data.data });
            })
            .catch(error => {
                ToastAndroid.show('Error fetching leaderboard from backend, try again later', ToastAndroid.LONG)
            })
            .finally(() => this.setState({ loading: false, refreshing: false }));
    }

    openEventDetails = (index) => {
        let details = {};
        const item = this.state.data[index];
        details.game = item.game.name;
        details.scores = item.scores;
        details.time = item.time;
        this.props.navigation.navigate('Eventdetails', details);
    }

    renderList = () => {
        if(this.state.loading) {
            return <ActivityIndicator size='large' color='#00b7ff' />
        } else {
            return (
                <FlatList
                    onRefresh={this.fetchResults}
                    refreshing={this.state.refreshing}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.flatListContainer}
                    data={this.state.data}
                    renderItem={({ item, index }) => <EventCard onPress={() => this.openEventDetails(index)} game={item.game.name} time={item.time} />}
                    ListEmptyComponent={() => <ListEmptyComponent />}
                />
            )
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText}>
                        EVENTS
                    </Text>
                </View>
                {this.renderList()}
            </View>
        );
    }
}

export default Events;