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
        borderRadius: width,
        backgroundColor: '#dedede',
        padding: 25
    },
    avatarImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    modalView: {
        flex: 1,
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
        flex: 0.8
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
        borderRadius: 100
    }
});

export default styles;