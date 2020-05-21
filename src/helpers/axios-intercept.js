import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

axios.interceptors.request.use(async function (config) {
    let token = await AsyncStorage.getItem('token');
    config.headers.Authorization =  token;

    return config;
});

export default axios;