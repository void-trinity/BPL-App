import * as React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

const InputComponent = (props) => {
    return (
        <View style={styles.inputBox}>
            <TextInput
                placeholder={props.placeholder ? props.placeholder: ''}
                keyboardType={props.keyboardType ? props.keyboardType: 'default'}
                autoCapitalize={props.autoCapitalize}
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
}

export default InputComponent;