import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListCity from './pages/list-city';
import AddCity from './pages/add-city';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon:({color, size})=>{
                 let iconName;

                 if (route.name=='Cities') {               
                   iconName='location-city';

                 }else if(route.name=='Add City'){               
                 iconName='add';
                }
               /* Estilização do icone */
                return <MaterialIcons name={iconName} size={28} color={color} />
                }
               })}
               tabBarOptions={{
                activeTintColor: '#7159c1',
                inactiveTintColor: 'gray',
                }}
               >
                <Tab.Screen name="Cities" component={ListCity} />
                <Tab.Screen name="Add City" component={AddCity} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}