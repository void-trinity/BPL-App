import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const ListEmptyComponent = () => {
    return(
        <View style={styles.emptyComponentContainer}>
            <Text style={{ alignSelf: 'center', color: 'rgba(0, 0, 0, 0.5)', fontWeight: 'bold' }}>Seems like nothing's here </Text>
            <Icon name='Trophy' style={{ marginTop: 50 }} size={50} color='rgba(0, 0, 0, 0.05)' />
        </View>
    );
}

export default ListEmptyComponent;