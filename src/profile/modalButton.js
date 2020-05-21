import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';


const ModalButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.modalButton}>
                <Text>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default ModalButton;