import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header} from 'react-native-elements'
import CustomRightHeader from '../components/CustomRightHeader'
import {header} from '../assets/css'

export default class HeaderElements extends Component {

    render() {
        let{route,navigation} = this.props.navigation
        return (
            <View>
                <Header
                    backgroundImage={require('../assets/img/header_bgr.jpg')}
                    backgroundColor={header.backgroundColor}
                    //leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: route.name, style: { color: header.textColor, fontSize: header.textSize } }}
                    rightComponent={<CustomRightHeader navigation = {this.props.navigation.navigation} />}
                />
            </View>
        )
    }
}
