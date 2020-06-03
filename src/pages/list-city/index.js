import React, { useEffect, useState } from 'react';
import { Text, Image, View, FlatList, ActivityIndicator, SafeAreaView, RefreshControl } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import Profile from '../list-profile';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export default function ListCity() {

  const [cities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();

  function NavigateToProfile(city) {
      navigation.navigate('Places', { city });
  }

  async function listarCidade(){
    const response = await api.get('/cities')
    .finally(()=>setLoading({isLoading:false}));
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
            <SafeAreaView>
                {isLoading ? <ActivityIndicator size="large" color="#ffff00"/> : (
                <FlatList
                data={cities}
                keyExtractor={city => String(city.id)}
                showsVerticalScrollIndicator={true}
                refreshing={isLoading}
                onRefresh={listarCidade}
                renderItem={ ({item: city}) => (                 
                  <View style={styles.citiesList}>
                    <TouchableOpacity style={styles.itemList} onPress={() => NavigateToProfile(city)}>
                        <Text style={styles.nomeCidade}>{city.nameCity} - {city.nameCountry} </Text>
                        <AntDesign name="right" size={15} color="gray" style={{alignSelf:'flex-end'}}/>
                    </TouchableOpacity>            
                  </View> 
                )}
                ItemSeparatorComponent={ () => <Separator/>}
              />
              )}
            </SafeAreaView>        
        </View>
      </View>
    );
}

const Separator = () => <View style={{flex:1, height: 1, width:'97%', backgroundColor: '#ddd', alignSelf:"center"}}></View>

