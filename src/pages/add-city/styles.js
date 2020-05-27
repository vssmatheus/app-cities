import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#7159c1',
        paddingTop: Constants.statusBarHeight + 20,
    },
    formulario:{
        paddingTop: Constants.statusBarHeight + 1,
        flex: 1,
    },
    logo:{
      backgroundColor: "#000"  
    },
    entrada:{
        height: 45,
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 5,
        padding: 12,
    },
    botao:{
        alignItems:"center",
        backgroundColor: "#ffff00",
        borderRadius: 5,
        paddingVertical: 13,
        paddingHorizontal:45,
        marginTop:10
    }
});