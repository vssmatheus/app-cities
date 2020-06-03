import React, { useEffect, useState } from 'react';
import { Text, Image, View, FlatList, ActivityIndicator, SafeAreaView, Animated, RefreshControl } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import Profile from '../list-profile';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Alert } from 'react-native';

export default function ListCity() {

  const [cities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();

  function NavigateToProfile(city) {
      navigation.navigate('Places', { city });
  }

  function LeftActions(progress, dragX){
    return(
      <View >
        <TouchableOpacity onPress={DeletarCidade}>
          <Animated.View>
            <AntDesign name="close" size={20} color="#F86464" style={{marginRight:25}}/>
          </Animated.View>
        </TouchableOpacity>        
      </View>
    );
  }

  async function DeletarCidade(city){
   Alert.alert(
     'Excluir',
     'Tem certeza que deseja excluir esta cidade ?',
     [
       {text: 'Não', onPress: () => {}, style: 'cancel'},
       {text: 'Sim', onPress: () =>{}}
     ],
     {cancelable: true}
   );
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
                      <Swipeable renderLeftActions={LeftActions}>
                        <TouchableOpacity style={styles.itemList} onPress={() => NavigateToProfile(city)}>
                            <Text style={styles.nomeCidade}>{city.nameCity} - {city.nameCountry} </Text>
                            <AntDesign name="right" size={15} color="gray" style={{alignSelf:'flex-end'}}/>
                        </TouchableOpacity>
                      </Swipeable>           
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

