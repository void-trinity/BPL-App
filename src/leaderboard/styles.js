import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between',
        margin: 10,
        borderRadius: 10
    },
    rankContainer: {
        flex: 0.05,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    nameContainer: {
        flex: 0.6,
        justifyContent: 'center',
        padding: 5
    },
    scoreContainer: {
        flex: 0.15,
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
    itemSeperator: {
        width: width * 0.9,
        alignSelf: 'center',
        height: 1,
        backgroundColor: '#dedede'
    },
    pointsCard: {
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#00b7ff',
        paddingVertical: 5,
        alignItems: 'center'
    },
    pointsText: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 'bold'
    },
    gamesText: {
        color: 'rgba(0,0,0,0.3)',
        fontWeight: 'bold'
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
    },
    thumbnailContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 200,
    },
    imageThumbnail: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
});

export default styles;