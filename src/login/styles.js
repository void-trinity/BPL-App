import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    imageContainer: {
        flex: 0.3,
        width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImage: {
        height: height*0.4,
        width: height*0.4
    },
    inputContainer: {
        flex: 0.7,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width,
        backgroundColor: 'white',
        padding: 30,
        justifyContent: 'space-between',
        elevation: 10
    },
    inputBox: {
        borderWidth: 1,
        borderRadius: 2,
        justifyContent: 'center',
        marginVertical: height * 0.03,
        paddingHorizontal: 5,
        borderColor: '#00b7ff'
    },
    heading: {
        fontWeight: 'bold',
        color: '#00b7ff',
        fontSize: 28,
        marginVertical: 20
    },
    button: {
        height: 0.07*height,
        width: 0.07*height * 2,
        marginRight: 5,
        marginTop: 20,
        backgroundColor: '#00b7ff',
        borderRadius: 100,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    signupText: {
        fontWeight: 'bold',
        color: '#00b7ff',
        textDecorationLine: 'underline',
    }
});

export default styles;