import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import moment from 'moment';

import styles from './styles';
import game_uri from '../helpers/game_uri_json';

const EventCard = (props) => {
    const { game, time } = props;
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={styles.cardContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.gameText}>
                        {game}
                    </Text>
                    <Text style={styles.timeText}>
                        {moment(time).format('MMMM Do YYYY, H:mm')}
                    </Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.thumbnailContainer}>
                        <Image style={styles.imageThumbnail} source={game_uri[game.toLowerCase()]} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default EventCard;