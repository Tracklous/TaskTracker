import { StyleSheet } from 'react-native';
import { fullWidth, normalize, vh, vw } from '../../utils/dimension';
import { Colors } from '../../themes';

export default StyleSheet.create({
    container: {
        height: vh(60),
        width: fullWidth,
        marginTop: vh(15),
        marginBottom: normalize(5),
        paddingHorizontal: vw(10)
    },
    searchInput:{
        paddingVertical: normalize(15),
        paddingHorizontal: vw(10),
        borderRadius: normalize(4),
        backgroundColor: Colors.taskBackground
    }
});