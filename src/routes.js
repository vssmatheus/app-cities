import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListCity from './pages/list-city';
import AddCity from './pages/add-city';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Cities" component={ListCity} />
                <Tab.Screen name="Add City" component={AddCity} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
