import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import moment from 'moment';

import styles from './styles';
import game_uri from '../helpers/game_uri_json';
import avatar_uri from '../helpers/avatar_uri_json';

const assignRanks = (scores) => {
    let points = new Set();
    scores.forEach(item => {
        points.add(item.points)
    });

    let points_array = [...points]
    points_array.sort().reverse();

    let result = {};

    if(points_array.length === 2) {
        result[points_array[0]] = 'first';
        result[points_array[1]] = 'last';
    } else if (points_array.length === 3) {
        result[points_array[0]] = 'first';
        result[points_array[1]] = 'second';
        result[points_array[2]] = 'last';
    } else if (points_array.length === 4) {
        result[points_array[0]] = 'first';
        result[points_array[1]] = 'second';
        result[points_array[2]] = 'third';
        result[points_array[3]] = 'last';
    }

    return result;
}

const getRankColor = (rank) => {
    switch(rank.toLowerCase()) {
        case 'first': {
            return { backgroundColor: 'gold' }
        }
        case 'second': {
            return { backgroundColor: '#ebebeb' }
        }
        case 'third': {
            return { backgroundColor: '#ffa347' }
        }
        default: {
            return { backgroundColor: '#d9fcff' }
        }
    }
}

const WinnerCard = (props) => {
    const { points, rank, user } = props;
    return (
        <View style={[styles.winnerCard, getRankColor(rank)]}>
            <View style={styles.winnerAvatarContainer}>
                <View style={styles.winnerThumbnailContainer}>
                    <Image source={avatar_uri[user.avatar]} style={styles.imageThumbnail} />
                </View>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.fullnameText}>
                    {user.username.toUpperCase()}
                </Text>
                <Text style={styles.rankText}>
                    {rank.toUpperCase()}
                </Text>
            </View>
            <View style={styles.scoreContainer}>
                <View style={styles.pointsCard}>
                    <Text style={styles.pointsText}>
                        {points}
                    </Text>
                    <Text style={{...styles.pointsText, fontSize: 8 }}>
                        POINTS
                    </Text>
                </View>
            </View>
        </View>
    )
}

const EventDetails = (props) => {
    const { game, scores, time } = props.route.params;
    const scores_to_ranks = assignRanks(scores);
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.avatarContainer}>
                    <Image source={game_uri[game.toLowerCase()]} style={styles.avatarImage} />
                </View>
                <View style={styles.gameTextContainerDesc}>
                    <Text style={styles.gameDescText}>
                        {`${game} (${moment(time).format('MMMM Do, YYYY')})`}
                    </Text>
                </View>
            </View>
            <View style={styles.winnerContainer}>
                <FlatList
                    data={scores}
                    contentContainerStyle={styles.flatListContainer}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <WinnerCard
                                user={item.user}
                                points={item.points}
                                rank={scores_to_ranks[item.points]}
                            />
                        );
                    }}
                />
            </View>
        </View>
    );
}

export default EventDetails;