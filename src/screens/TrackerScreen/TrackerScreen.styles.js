import { StyleSheet } from 'react-native';
import { vh, vw } from '../../utils/dimension';
import { Colors } from '../../themes';

export default StyleSheet.create({
    trackerContainer: {
        flex: 1
    },
    creatTaskView: {
        height: vw(50),
        width: vw(50),
        borderRadius: vw(50 / 2),
        backgroundColor: Colors.taskBackground,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: vh(40),
        right: vw(30),
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    createText: {
        fontSize: 26,
        lineHeight: 30,
        fontWeight: 'bold',
        color: Colors.tealBlue
    }
});