import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header} from 'react-native-elements'
import CustomRightHeader from '../../components/CustomRightHeader'

//import css
import {header} from '../../assets/css'
import HeaderElements from '../../components/HeaderElements'

export default class Favorites extends Component {
    
    render() {
        return (
            <View>
                <HeaderElements navigation={this.props} />
                <Text> Favorites </Text>
            </View>
        )
    }
}
