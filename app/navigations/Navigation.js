import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import RestaurantsStack from '../navigations/RestaurantsStack'
import Account from '../screens/Account'
import Favourites from '../screens/Favourites'
import Search from '../screens/Search'
import TopRestaurants from '../screens/TopRestaurants'

const Tab = createBottomTabNavigator()
export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='restaurantsStack'
                    component={RestaurantsStack}
                    options={{title:'Restaurantes'}}
                />
                <Tab.Screen
                    name='account'
                    component={Account}
                    options={{title:'Cuenta'}}
                />
                <Tab.Screen
                    name='favourite'
                    component={Favourites}
                    options={{title:'Favoritos'}}
                />
                <Tab.Screen
                    name='search'
                    component={Search}
                    options={{title:'Buscar'}}
                />
                <Tab.Screen
                    name='tops'
                    component={TopRestaurants}
                    options={{title:'Top'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
