import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

function SplashScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/logo.png')} resizeMode='contain' style={{ height: width* 0.9, width: width*0.9 }} />
        </View>
    );
}

export default SplashScreen;