import { StyleSheet } from 'react-native';
import { fullWidth, normalize, vh, vw } from '../../utils/dimension';
import { Colors } from '../../themes';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    itemView: {
        height: normalize(105),
        width: fullWidth - 20,
        backgroundColor: Colors.taskBackground,
        borderWidth: 1,
        borderColor: Colors.tealBlue,
        marginTop: normalize(10),
        alignSelf: 'center',
        borderRadius: vw(5),
        padding: normalize(12),
        overflow: 'hidden'
    },
    taskTitleText: {
        fontSize: 16,
        maxWidth: vw(260)
    },
    descText: {
        fontSize: 13,
        color: Colors.grey_140,
        height: normalize(46),
        marginBottom: vw(4),
        maxWidth: vw(260)
    },
    timerView: {
        position: 'absolute',
        height: vh(90),
        right: 0,
        width: fullWidth - vw(300),
        paddingTop: vw(12.5),
        flexDirection: 'row',
    },
    clockIcon: {
        height: vw(12),
        width: vw(12),
        marginRight: vw(4)
    },
    timeText: {
        fontSize: 13,
        color: Colors.orange_shade,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: vw(150),
        justifyContent: 'space-between'
    },
    startButton: {
    },
    buttonText: {
        color: Colors.tealBlue,
        fontWeight: 'bold'
    },
    emptyView: {
        height: normalize(500),
        width: fullWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyText:{
        fontSize: 18,
        fontSize: 20,
        fontStyle:'italic'
    }
});