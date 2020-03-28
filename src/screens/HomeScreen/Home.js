import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Products from '../../common/products.json'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialComunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
//define tab screen
import Store from './Store'
import Favorites from './Favorites'
import Shoes from './Shoes'
import History from './History'

//define navigation
const Tab = createBottomTabNavigator();

export default class Home extends Component {
    state = {
        products: []        
    }

    componentDidMount = () => {
        let { navigation, route } = this.props;
        let param = route.params.params;
        this.setState({ products: Products });
    }

    handleCart = (product,action) => {
        this.props.handleCart(product,action)
    }
    render() {
        let { navigation } = this.props;

        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor:'#FF9900',
                    inactiveTintColor:'#D3D3D3',
                    labelStyle: {
                        fontSize: 12,
                        
                      },
                    showIcon:true,
                    showLabel:false,
                    title:true
                }}
                
            >
                <Tab.Screen
                    name='Store'
                    //component={Store}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return <FontAwesome name="store" color={color} size={size} />
                        },
                        title:'Cửa Hàng'
                    }}
                >
                    {props => <Store {...props} handleCart={(product,action) => this.handleCart(product,action)}/>}
                </Tab.Screen>
                <Tab.Screen
                    name='Favorites'
                    component={Favorites}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return <MaterialIcon name="favorite-border" color={color} size={size} />
                        },
                        title:'Yêu Thích',
                        
                    }}
                />
                <Tab.Screen
                    name='Shoes'
                    component={Shoes}
                    options={{
                        tabBarIcon: ({focused, color, size}) => {
                            return <MaterialComunityIcon name='shoe-formal' color={color} size={size} />
                        },
                        title:'Giày'
                    }}
                />
                <Tab.Screen
                    name='History'
                    //component={History}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return <FontAwesome name='history' color={color} size={size} />
                        },
                        title:'Lịch Sử'
                    }}>
                    {props => <History {...props} histories={this.props.histories} />}
                </Tab.Screen>
            </Tab.Navigator>
        );
    }
}
