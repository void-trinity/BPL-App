import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    imageContainer: {
        flex: 0.2,
        width
    },
    inputContainer: {
        width,
        backgroundColor: 'white',
        padding: 30,
    },
    inputBox: {
        borderWidth: 1,
        borderRadius: 2,
        justifyContent: 'center',
        marginVertical: height * 0.02,
        paddingHorizontal: 5,
        borderColor: 'purple'
    },
    heading: {
        fontWeight: 'bold',
        color: 'purple',
        fontSize: 28,
        marginVertical: 20,
        marginLeft: 30
    },
    button: {
        height: 0.07*height,
        width: 0.07*height * 2,
        marginRight: 5,
        marginTop: 20,
        backgroundColor: 'purple',
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
        alignItems: 'center'
    },
    signupText: {
        fontWeight: 'bold',
        color: 'blue',
        textDecorationLine: 'underline',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: 'purple',
        width: width * 0.3,
        marginVertical: 10,
    }
});

export default styles;