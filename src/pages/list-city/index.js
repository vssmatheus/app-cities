import React, { useEffect, useState } from 'react';
import { Text, Image, View, FlatList, ActivityIndicator } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import ListItem from './components/list-item';
import api from '../../services/api';

export default function ListCity() {

  const [cidades, setCidades] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function listarCidade(){
    /* api json esta na pasta api cidades.json */
    fetch('http://192.168.100.5:3000/cidades', {
     /*  body: JSON.stringify({
        nomeCidade: cidades.nomeCidade,
        nomePais: cidades.nomePais   
      }), */
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((json) => setCidades(json.cidades))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  } 

  useEffect(() => {
    listarCidade();
  }, []);

    return (
      <View style={styles.container}>
        <View styles={styles.header}>
            <Image style={{alignSelf: "center"}} source={logoImg}/>
        </View>

        <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator size="large" color="#ffff00"/> : (
        <FlatList
          data={cidades}
          keyExtractor={cidade => String(cidade.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: cidade }) => (
            <Text>{cidade.nomeCidade} - {cidade.nomePais}</Text>
          )}
        />
      )}
    </View>
        {/* <View style={styles.lista}>
          <FlatList
            data={cidades}
            keyExtractor={item => item.id}
            renderItem={ ({item}) => ( 
            <ListItem 
              nomeCidade={item}
              nomePais={item}
              /> 
            )}
            ItemSeparatorComponent={ () => <Separator/>}
          />
        </View> */}
      </View>
    );
}

const Separator = () => <View style={{flex:1, height: 1, width:'97%', backgroundColor: '#ddd', alignSelf:"center"}}></View>

