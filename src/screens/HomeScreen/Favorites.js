import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header} from 'react-native-elements'
import CustomRightHeader from '../../components/CustomRightHeader'

//import css
import {header} from '../../assets/css'

export default class Favorites extends Component {
    
    render() {
        return (
            <View>
                <Header
                    backgroundColor={header.backgroundColor}
                    //leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Yêu Thích', style: { color:header.textColor, fontSize: header.textSize } }}
                    rightComponent={<CustomRightHeader navigation = {this.props.navigation} />}
                />
                <Text> Favorites </Text>
            </View>
        )
    }
}
