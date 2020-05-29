import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function ListItem({nomeCidade,nomePais}){
    return(
        <View style={styles.citiesList}>
            <TouchableOpacity style={styles.itemList}>
                <Text style={styles.nomeCidade}>{nomeCidade.nameCity} - {nomePais.nameCountry} </Text>
                <AntDesign name="right" size={15} color="gray" style={{alignSelf:'flex-end'}}/>
            </TouchableOpacity>            
        </View>
    );
}