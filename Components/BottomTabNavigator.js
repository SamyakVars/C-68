import { NavigationContainer, TabActions } from '@react-navigation/native'
import React, {Component} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TransactionScreen from '../Screens/TransactionScreen'
import SearchScreen from '../Screens/SearchScreen'
const Tab = createBottomTabNavigator()

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='Transaction' Component={TransactionScreen}/>  
                    <Tab.Screen name='Search' Component={SearchScreen}/>                
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}