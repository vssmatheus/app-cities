import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import ListCity from './pages/list-city';
import AddCity from './pages/add-city';
import { MaterialIcons } from '@expo/vector-icons';
import Profile from './pages/list-profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 

function Tabs(){
   return (
    <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({color, size})=>{
                let iconName;

                if (route.name=='Cities') {               
                iconName='location-city';

                }else if(route.name=='Add City'){               
                iconName='add';
            }
            
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
   )
}

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{headerShown: true}}
            >
                <Stack.Screen name="Cities" component={Tabs} />
                <Stack.Screen name="Add City" component={AddCity} />
                <Stack.Screen name="Places" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
