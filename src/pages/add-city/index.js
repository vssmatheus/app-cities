import React from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity  } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function AddCity() {
    return (
    <View style={styles.container}>
        <View styles={styles.header}>
            <Image style={{alignSelf: "center"}} source={logoImg}/>
        </View>
        
        <View style={styles.formulario}>
            <View>
                <TextInput style={styles.entrada} placeholder="Cidade"/>
            </View>
            
            <View>
                <TextInput style={styles.entrada} placeholder="País"/>
            </View>
            <View>
                <TouchableOpacity style={styles.botao}>
                    <Text style={{color: '#7159c1'}}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
}