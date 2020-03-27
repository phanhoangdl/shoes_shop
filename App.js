import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

//define screens
import Login from './src/screens/Login/Login';
import Home from './src/screens/HomeScreen/Home';
import ProductDetail from './src/screens/ProductDetail/ProductDetail'
import Cart from './src/screens/Cart/Cart';
import Content from './src/components/Content';

//define navigation
const Stack = createStackNavigator();

export default class App extends Component {
  state = {
    cart: [],
    histories: []
  }

  handleCart = () => {
    console.log('add to cart')
  }
  handleAddToCart = (product) => {
    console.log(product)
    if(this.state.cart.find(x => x.maSP == product.maSP)){
      Alert.alert("Thông báo", `Sản phẩm "${product.tenSP}" đã có trong giỏ hàng`)
    }else{
      this.setState({cart:[...this.state.cart,product]})
      Alert.alert("Thông báo", `Sản phẩm "${product.tenSP}" đã được thêm vào giỏ hàng`)
    }
  }

  handleClearCart = () => {
    this.setState({cart:[]});
  }

  handleAddToHistory = (products) => {
    // products.map((product,index) => {
    //   this.setState({histories:[...this.state.histories,product]})
    // })
    products.forEach(element => {
      this.state.histories.push(element)
      //this.addToHistory(element)
    })
  }

  addToHistory = (product) => {
    let joined = this.state.histories.concat(product)
      this.setState({histories:joined})
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Login' 
            component={Login} 
            options={{headerTitleAlign: 'center'}}
            />
          <Stack.Screen
            name='Home'
            //component={Home}
            options={{
              title: 'Cửa Hàng',
              headerMode:'screen',
              headerShown:false 
            }}
          >
            {props => <Home {...props} histories={this.state.histories} />}
          </Stack.Screen>
          <Stack.Screen
            name='ProductDetail'
            //component={ProductDetail}
            options={{
              title: 'Sản Phẩm',
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
              title:'Giỏ Hàng',
              headerTitleStyle:{
                fontWeight:'bold'
              },
              headerTitleAlign:'center'
            }}
          >{props => <Cart {...props} products={this.state.cart} clearCart={() => this.handleClearCart()} addHistory={(products) => this.handleAddToHistory(products)}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
