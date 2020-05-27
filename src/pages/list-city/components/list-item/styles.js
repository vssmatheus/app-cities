import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
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