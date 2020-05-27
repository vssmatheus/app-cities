import React from 'react';
import { Text, Image, View, FlatList } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import ListItem from './listItem';

export default function ListCity() {

  const cidades = [
    {id: '1', cidade: 'Maurilandia', pais:'Brasil'},
    {id: '2', cidade: 'Santa Helena', pais:'Brasil'},
    {id: '3', cidade: 'rio Verde', pais:'Brasil'},
    {id: '4', cidade: 'São Paulo', pais:'Brasil'},
    {id: '5', cidade: 'Toronto', pais:'Canada'},
    {id: '6', cidade: 'Londres', pais:'Inglaterra'},

  ];
    return (
      <View style={styles.container}>
        <View styles={styles.header}>
            <Image style={{alignSelf: "center"}} source={logoImg}/>
        </View>

        <View style={styles.lista}>
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
        </View>
      </View>
    );
}

const Separator = () => <View style={{flex:1, height: 1, width:'97%', backgroundColor: '#ddd', alignSelf:"center"}}></View>

