import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    topContainer: {
        flex: 0.3,
        width,
        alignItems: 'center',
        justifyContent: 'center',
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    modalView: {
        flex: 0.8,
        backgroundColor: 'white',
        width,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 5,
    },
    imageThumbnail: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    thumbnailContainer: {
        width: width * 0.3,
        flexDirection: 'column',
        padding: 20,
    },
    flatListContainer: {
        flex: 0.8,
        backgroundColor: 'white'
    },
    flatListContentContainer: {
        width,
        alignItems: 'center'
    },
    modalHeaderContainer: {
        flex: 0.1,
        width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalBottomContainer: {
        flex: 0.1,
        width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    modalHeading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#00b7ff'
    },
    modalButton: {
        width: width * 0.3,
        height: height * 0.05,
        backgroundColor: '#dedede',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    statsContainer: {
        flex: 0.2,
        width,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    pointContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'gold'
    },
    gamesContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#ffa347'
    },
    statsText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'rgba(0,0,0,0.3)'
    },
    usernameContainer: {
        flex: 0.1,
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    usernameCard: {
        backgroundColor: '#ebebeb',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    usernameText: {
        color: '#3d3d3d',
        fontWeight: 'bold',
        fontSize: 18
    },
    modal2Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    textInputContainer: {
        height: height * 0.06,
        backgroundColor: '#dedede',
        borderRadius: 5,
        width: width * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal2View: {
        height: height * 0.2,
        width,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingTop: 20,
        width: width * 0.8,
        borderRadius: 5,
        elevation: 2
    },
    modal2Button: {
        flex: 0.5,
        padding: 5,
        backgroundColor: '#dedede',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        aspectRatio: 3
    },
    modal2BottomContainer: {
        flexDirection: 'row',
        width: width * 0.6,
        justifyContent: 'space-evenly',
        height: height * 0.06,
    },
    nameContainer: {
        flex: 0.1,
        width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 26,
        color: 'rgba(0,0,0,0.6)'
    },
    eventButtonContainer: {
        flex: 0.2,
        width,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: width*0.06
    },
    eventCard: {
        backgroundColor: '#dedede',
        flex: 1,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logOutContainer: {
        flex: 0.05,
        width: width * 0.89,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'red',
        marginTop: 20,
        borderRadius: 10
    },
    logOutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(255,255,255,0.9)'
    },
});

export default styles;