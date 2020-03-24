import React, { Component } from 'react'
import { Text, View } from 'react-native'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

//define screens
import Login from './src/screens/Login/Login';
import Home from './src/screens/HomeScreen/Home';
import ProductDetail from './src/screens/ProductDetail/ProductDetail'
import Cart from './src/screens/Cart/Cart';

//define navigation
const Stack = createStackNavigator();

export default class App extends Component {
  state = {
    cart:[]
  }

  handleAddToCart = (product) => {
    this.setState({cart:[...this.state.cart,product]})
    console.log(this.state.cart)
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{headerTitleAlign: 'center'}}/>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Shoes',
              headerMode:'screen',
              headerShown:false 
            }}
          />
          <Stack.Screen
            name='ProductDetail'
            //component={ProductDetail}
            options={{
              title: 'Detail',
              headerBackTitle: 'home',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
              headerTitleAlign: 'center'
            }}
          >
            {props => <ProductDetail {...props} handleCart={(product) => this.handleAddToCart(product)} />}
          </Stack.Screen>
          <Stack.Screen
            name='Cart'
            //component={Cart}
            options={{
              title:'Shopping Cart',
              headerTitleStyle:{
                fontWeight:'bold'
              },
              headerTitleAlign:'center'
            }}
          >{props => <Cart {...props} products={this.state.cart} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
