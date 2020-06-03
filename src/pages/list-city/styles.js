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
        paddingVertical: 50,
        paddingTop: Constants.statusBarHeight + 5,
    },
    citiesList:{
        padding: 15,
        backgroundColor: '#fff',
        borderRadius:5
    },
    itemList:{
        flexDirection: 'row',
        justifyContent: "space-between",
        flex: 1
    },
    nomeCidade:{
        fontSize: 15,
        color: 'gray'
    },
});