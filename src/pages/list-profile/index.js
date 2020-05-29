import React, { useState, useEffect } from 'react';
import { Text, View,Image, ActivityIndicator } from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Profile() {

  const [profiles, setProfile] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const route = useRoute();

  const city = route.params.city;

  async function listarLocalidades(){
    setLoading(false);
  } 

  useEffect(() => {
    listarLocalidades();
  }, []);

    return (
      <View style={styles.container}>
      <View styles={styles.header}>
          <Image style={{alignSelf: "center"}} source={logoImg}/>
      </View>
      <View style={styles.locality}>
        <Text>{city.nameCity}</Text>        
      </View>
    </View>
    );
}