import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headingContainer: {
        flex: 0.2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width,
        backgroundColor: 'white'
    },
    heading: {
        fontWeight: 'bold',
        color: '#3d3d3d',
        fontSize: 28,
        marginVertical: 10
    },
    imageContainer: {
        flex: 0.4,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logoImage: {
        height: undefined,
        width: '100%',
        aspectRatio: 1
    },
    secondaryText: {
        color: '#ababab',
        textAlign: 'center'
    },
    bottomContainer: {
        flex: 0.2,
        width,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        width,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: height * 0.08,
    },
    buttonCard: {
        width: width*0.4,
        justifyContent: 'center',
        padding: 5,
        alignItems: 'center',
        aspectRatio: 3,
        borderRadius: 3,
        elevation: 3
    },
    footerContainer: {
        flex: 0.2,
        width,
        justifyContent: 'flex-end',
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    footerText: {
        color: '#ababab',
        textAlign: 'center',
        fontSize: 10
    }
});

export default styles;