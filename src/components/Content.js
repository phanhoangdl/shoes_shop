import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native'
//import {titleStyle, rowStyle, blockStyle, imgStyle} from '../assets/css'
import FonttistoIcon from 'react-native-vector-icons/Fontisto'
import AntIcon from 'react-native-vector-icons/AntDesign'

//define utils
import numberWithCommas from '../common/util/format_price'

//import styles
import {widthScreen,heightScreen, blockStyle, imgStyle} from '../assets/css'

export default class Content extends Component {
    state = {
        product:this.props.product,
        navigation:this.props.navigation,
        count:1
    }
    handleProductPress = () => {
        let navigation = this.state.navigation;
        navigation.navigate('ProductDetail', { params: { product: this.state.product } });
    }

    handleCount = (action) => {
        let count = this.state.count
        if(action == 'minus'){
            if(count > 0) this.setState({count:count-1})
            else return null
        }
        else if (action == 'plus') {
            this.setState({count:count+1})
        }
        else {
            return null
        }
    }

    render() {
        let item = this.state.product;
        return (
            <View>
                <View style={[blockStyle]}>
                    <View style={{ flex: 8 }}>
                        <TouchableOpacity onPress={() => this.handleProductPress()}>
                            <Image style={[imgStyle]} source={{ uri: item.hinhAnh }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ textAlignVertical: 'top' }}>{item.tenSP}</Text>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10, alignSelf: 'center' }}>
                        <Text style={{ color: '#FF0000' }}>Giá: {numberWithCommas(item.gia)}</Text>
                    </View>
                    <View style={{ flex: 1, marginBottom: 5, paddingLeft: 10, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.handleCount('minus')} style={{ marginRight: 5 }}><AntIcon name='minussquare' size={25} color='#CCCCCC' /></TouchableOpacity>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20 }}>{this.state.count}</Text>
                        <TouchableOpacity onPress={() => this.handleCount('plus')} style={{ marginLeft: 5 }}><AntIcon name='plussquare' size={25} color='#CCCCCC' /></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
