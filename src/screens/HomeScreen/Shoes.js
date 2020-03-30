import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header} from 'react-native-elements'
import CustomRightHeader from '../../components/CustomRightHeader'

//import style
import {header} from '../../assets/css'
import HeaderElements from '../../components/HeaderElements'

export default class Shoes extends Component {
    
    render() {
        return (
            <View>
                <HeaderElements navigation={this.props} />
                <Text> Shoes </Text>
            </View>
        )
    }
}
