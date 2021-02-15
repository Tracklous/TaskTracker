import { StyleSheet } from 'react-native';
import { fullWidth, vh, vw } from '../../utils/dimension';
import { Colors } from '../../themes';

export default StyleSheet.create({
    container: {
        height: vh(60),
        width: fullWidth,
        backgroundColor: Colors.tealBlue,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.3,
        elevation: 6,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white
    }
});