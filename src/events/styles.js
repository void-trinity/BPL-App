import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    headingContainer: {
        width,
        height: height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    headingText: {
        color: '#3d3d3d',
        fontWeight: 'bold',
        fontSize: 24
    },
    flatListContainer: {
        width
    },
    emptyComponentContainer: {
        flex: 1,
        alignItems: 'center'
    },
    cardContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'space-between',
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#ededed'
    },
    gameText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'rgba(0,0,0,0.6)'
    },
    timeText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#00b7ff',
        marginTop: 10
    },
    leftContainer: {
        height: '100%',
        flex: 0.6,
        justifyContent: 'space-between'
    },
    rightContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    thumbnailContainer: {
        flex: 1,
        width: undefined,
        aspectRatio: 1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 200,
    },
    imageThumbnail: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    topContainer: {
        flex: 0.4,
        width,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    avatarContainer: {
        width: width * 0.4,
        aspectRatio: 1,
        borderRadius: 200,
        backgroundColor: '#dedede',
        padding: 25,
        justifyContent: 'center'
    },
    avatarImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    winnerContainer: {
        flex: 0.6,
        width,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    gameTextContainerDesc: {
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#ededed',
        borderRadius: 5
    },
    gameDescText: {
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.4)',
        fontSize: 20
    },
    winnerCard: {
        flexDirection: 'row',
        paddingHorizontal: 20,
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
    pointsCard: {
        borderRadius: 5,
        flex: 1,
        width: '100%',
        backgroundColor: '#00b7ff',
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pointsText: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 'bold'
    },
    winnerAvatarContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    winnerThumbnailContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 200,
    },
    flatListContainer: {
        width
    },
});

export default styles;