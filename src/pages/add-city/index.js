import React, { useState } from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity  } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function AddCity() {

    const [city, setCity] = useState({nameCity:''});
    const [country, setCountry] = useState({nameCountry:''});

    async function EnviarDados(){
        fetch('http://192.168.100.5:3333/cities', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nameCity: city.nameCity,
            nameCountry: country.nameCountry
        })
        });
        
    }
    
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
                <TouchableOpacity style={styles.botao} onPress={EnviarDados}>
                    <Text style={{color: '#7159c1'}}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
}