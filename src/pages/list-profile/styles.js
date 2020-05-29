import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#7159c1',
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    lista:{
        shadowColor:'#000',
        paddingTop: Constants.statusBarHeight + 5,
    },
});