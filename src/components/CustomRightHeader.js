import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'

export default class CustomRightHeader extends Component {
    handleCartPress = () => {
        let { navigation } = this.props;
        navigation.navigate('Cart');
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.handleCartPress()}><AntIcon name='shoppingcart' size={30} color='#fff' /></TouchableOpacity>
            </View>
        )
    }
}
