import React from 'react';
import { Text, Image, View, FlatList } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import ListItem from './listItem';

export default function ListCity() {

  const cidades = [
    {id: '1', cidade: 'Maurilandia', uf:'GO'},
    {id: '2', cidade: 'Santa Helena', uf:'GO'},
    {id: '3', cidade: 'rio Verde', uf:'GO'},
    {id: '4', cidade: 'São Paulo', uf:'SP'},
    {id: '5', cidade: 'Rio de Janeiro', uf:'RJ'},
    {id: '5', cidade: 'Guaraí', uf:'TO'},

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
              estado={item}
              /> 
            )}
            ItemSeparatorComponent={ () => <Separator/>}
          />
        </View>
      </View>
    );
}

const Separator = () => <View style={{flex:1, height: 1, width:'97%', backgroundColor: '#ddd', alignSelf:"center"}}></View>

