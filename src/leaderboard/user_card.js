import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import avatar_uri from '../helpers/avatar_uri_json';

const getRankColor = (rank) => {
    switch(rank) {
        case 1: {
            return { backgroundColor: 'gold' }
        }
        case 2: {
            return { backgroundColor: '#ebebeb' }
        }
        case 3: {
            return { backgroundColor: '#ffa347' }
        }
        default: {
            return { backgroundColor: '#d9fcff' }
        }
    }
}

getImageUri = (index) => {
    return avatar_uri[index];
}

function UserCard(props) {
    const { rank, name, totalGames, totalScore, avatar } = props.user;
    return(
        <View style={[styles.cardContainer, getRankColor(rank)]}>
            <View style={styles.rankContainer}>
                <Text style={styles.rankText}>
                    {rank}
                </Text>
            </View>
            <View style={styles.avatarContainer}>
                <View style={styles.thumbnailContainer}>
                    <Image source={getImageUri(avatar)} style={styles.imageThumbnail} />
                </View>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.fullnameText}>
                    {name}
                </Text>
                <Text style={styles.gamesText}>
                    {`${totalGames} games`}
                </Text>
            </View>
            <View style={styles.scoreContainer}>
                <View style={styles.pointsCard}>
                    <Text style={styles.pointsText}>
                        {totalScore}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default UserCard;