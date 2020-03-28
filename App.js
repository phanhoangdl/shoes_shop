import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//define screens
import Login from './src/screens/Login/Login';
import Home from './src/screens/HomeScreen/Home';
import ProductDetail from './src/screens/ProductDetail/ProductDetail'
import Cart from './src/screens/Cart/Cart';
import Content from './src/components/Content';

//define navigation
const Stack = createStackNavigator();
const notice = {
  add : 'Thêm mới',
  remove : 'Xóa sản phẩm',
  exist : 'Đã có'
}

export default class App extends Component {
  state = {
    cart: [],
    histories: []
  }

  handleCart = (product,action) => {
    let cart = this.state.cart
    if(action){
      if(action == 'minus'){
        const index = cart.indexOf(product)
        if(index > -1){
          cart.splice(index,1)
          Alert.alert(notice.remove, 'Sản phẩm đã được xóa khỏi giỏ hàng')
        }
          
      }else if(action == 'plus'){
        if (cart.find(x => x.maSP == product.maSP)) {
          Alert.alert(notice.exist, `Sản phẩm "${product.tenSP}" đã có trong giỏ hàng`)
        } else {
          this.setState({ cart: [...this.state.cart, product] })
          Alert.alert(notice.add, `Sản phẩm "${product.tenSP}" đã được thêm vào giỏ hàng`)
        }
      }else{
        return null
      }
    }else{
      if (cart.find(x => x.maSP == product.maSP)) {
        Alert.alert(notice.exist, `Sản phẩm "${product.tenSP}" đã có trong giỏ hàng`)
      } else {
        this.setState({ cart: [...this.state.cart, product] })
        Alert.alert(notice.add, `Sản phẩm "${product.tenSP}" đã được thêm vào giỏ hàng`)
      }
    }
  }
  
  handleClearCart = () => {
    this.setState({ cart: [] });
  }

  handleAddToHistory = (products) => {
    products.forEach(element => {
      this.state.histories.push(element)
    })
  }

  addToHistory = (product) => {
    let joined = this.state.histories.concat(product)
    this.setState({ histories: joined })
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name='Home'
            //component={Home}
            options={{
              title: 'Cửa Hàng',
              headerMode: 'screen',
              headerShown: false
            }}
          >
            {props => <Home {...props} histories={this.state.histories} handleCart={(product,action) => this.handleCart(product,action)}/>}
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
            {props => <ProductDetail {...props} handleCart={(product,action) => this.handleCart(product,action)} />}
          </Stack.Screen>
          <Stack.Screen
            name='Cart'
            //component={Cart}
            options={{
              title: 'Giỏ Hàng',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
              headerTitleAlign: 'center'
            }}
          >{props => <Cart {...props} products={this.state.cart} clearCart={() => this.handleClearCart()} addHistory={(products) => this.handleAddToHistory(products)} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
