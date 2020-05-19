import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageContainer: {
        flex: 0.4,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        height: height*0.5,
        width: height*0.5
    },
    inputContainer: {
        flex: 0.6,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width,
        backgroundColor: 'white',
        padding: 30,
        justifyContent: 'space-between'
    },
    inputBox: {
        borderWidth: 1,
        borderRadius: 2,
        justifyContent: 'center',
        marginVertical: height * 0.03,
        paddingHorizontal: 5,
        borderColor: 'purple'
    },
    heading: {
        fontWeight: 'bold',
        color: 'purple',
        fontSize: 28,
        marginVertical: 20
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
    }
});

export default styles;