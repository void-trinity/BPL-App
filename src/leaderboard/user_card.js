import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


function UserCard(props) {
    const { rank, fullname, username, totalGames, totalScore } = props.user;
    return(
        <View style={styles.cardContainer}>
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