import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity  } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function AddCity() {

    const [city, setCity] = useState({nameCity:''});
    const [country, setCountry] = useState({nameCountry:''});
    const navigation = useNavigation();

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
        navigation.navigate('Cities');     
    }
    
    return (
    <View style={styles.container}>
        <View styles={styles.header}>
            <Image style={{alignSelf: "center"}} source={logoImg}/>
        </View>
        
        <View style={styles.formulario}>
            <View>
                <TextInput
                    style={styles.entrada} 
                    placeholder="Cidade"
                    onChangeText={nameCity => setCity({nameCity})}
                    defaultValue={city.nameCity}                    
                />
            </View>
            
            <View>
                <TextInput 
                    style={styles.entrada} 
                    placeholder="País"
                    onChangeText={nameCountry => setCountry({nameCountry})}
                    defaultValue={country.nameCountry}                    
                />
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