import React, { useEffect, useState } from 'react';
import { Text, Image, View, FlatList, ActivityIndicator } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import ListItem from './components/list-item';
import api from '../../services/api';

export default function ListCity() {

  const [cities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function listarCidade(){
    const response = await api.get('/cities');
    setCities(response.data);
    setLoading(false);
  } 

  useEffect(() => {
    listarCidade();
  }, []);

    return (
      <View style={styles.container}>
        <View styles={styles.header}>
            <Image style={{alignSelf: "center"}} source={logoImg}/>
        </View>

        <View style={styles.lista}>
          {isLoading ? <ActivityIndicator size="large" color="#ffff00"/> : (
            <FlatList
            data={cities}
            keyExtractor={city => String(city.id)}
            renderItem={ ({item: city}) => ( 
            <ListItem 
              nomeCidade={city}
              nomePais={city}
              /> 
            )}
            ItemSeparatorComponent={ () => <Separator/>}
          />
          )}
          
        </View>
      </View>
    );
}

const Separator = () => <View style={{flex:1, height: 1, width:'97%', backgroundColor: '#ddd', alignSelf:"center"}}></View>

