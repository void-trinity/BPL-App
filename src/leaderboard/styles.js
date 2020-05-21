import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        flex: 1,
        padding: 20,
        justifyContent: 'space-between',
        height: height * 0.12,
        margin: 10,
        borderRadius: 10
    },
    rankContainer: {
        flex: 0.2,
        justifyContent: 'center'
    },
    nameContainer: {
        flex: 0.6,
        justifyContent: 'space-between'
    },
    scoreContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    rankText: {
        color: 'rgba(0,0,0,0.3)',
        fontWeight: 'bold'
    },
    fullnameText: {
        fontSize: 18,
        color: '#6d6d6d',
        fontWeight: 'bold'
    },
    usernameText: {
        color: 'rgba(0,0,0,0.3)',
        fontWeight: 'bold'
    },
    itemSeperator: {
        width: width * 0.9,
        alignSelf: 'center',
        height: 1,
        backgroundColor: '#dedede'
    },
    pointsCard: {
        borderRadius: 5,
        width: 0.1 * width,
        backgroundColor: '#00b7ff',
        paddingVertical: 5,
        alignItems: 'center'
    },
    pointsText: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 'bold'
    },
    gamesText: {
        fontWeight: 'bold',
        color: '#6d6d6d'
    },
    headingContainer: {
        width,
        height: height * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    headingText: {
        color: '#3d3d3d',
        fontWeight: 'bold',
        fontSize: 24
    },
    searchContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 10,
        backgroundColor: '#efefef',
        height: height * 0.06,
        width: width * 0.8,
        borderRadius: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flatListContainer: {
        width
    },
    emptyComponentContainer: {
        flex: 1,
        alignItems: 'center'
    }
});

export default styles;