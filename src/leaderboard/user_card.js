import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

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

function UserCard(props) {
    const { rank, fullname, username, totalGames, totalScore } = props.user;
    return(
        <View style={[styles.cardContainer, getRankColor(rank)]}>
            <View style={styles.rankContainer}>
                <Text style={styles.rankText}>
                    {rank}
                </Text>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.fullnameText}>
                    {fullname}
                </Text>
                <Text style={styles.usernameText}>
                    {`@${username}`}
                </Text>
            </View>
            <View style={styles.scoreContainer}>
                <View style={styles.pointsCard}>
                    <Text style={styles.pointsText}>
                        {totalScore}
                    </Text>
                </View>
                <Text style={styles.gamesText}>
                    {`${totalGames} games`}
                </Text>
            </View>
        </View>
    );
}

export default UserCard;