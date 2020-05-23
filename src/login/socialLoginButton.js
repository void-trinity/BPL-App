import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const SocialLoginButton = (props) => {
    const { onPress, title, backgroundColor } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ ...styles.buttonCard, backgroundColor }}>
                <Icon name={title.toLowerCase()} size={25} color='white'/>
            </View>
        </TouchableOpacity>
    )
}

export default SocialLoginButton;