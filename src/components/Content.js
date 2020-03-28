import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import {Card} from 'react-native-elements'
//define utils
import numberWithCommas from '../common/util/format_price'

//import styles
import {widthScreen,heightScreen} from '../assets/css'

import { blockStyle, imgStyle, contentProductName } from '../assets/css'

export default class Content extends Component {
    state = {
        product: this.props.product,
        navigation: this.props.navigation,
        count: 0
    }

    //click vào product chuyển đến màn hình chi tiết sản phẩm
    handleProductPress = () => {
        let navigation = this.state.navigation;
        navigation.navigate('ProductDetail', { params: { product: this.state.product } });
    }

    //tăng hoặc giảm số khi click vào nút +/-
    handleCount = (action) => {
        let count = this.state.count
        let product = this.state.product
        if (action == 'minus') {
            if (count > 0) {
                this.setState({ count: count - 1 })
                this.props.handleCart(product, action)
            }
            else {
                this.props.handleCart(product, action)
            }
        }
        else if (action == 'plus') {
            this.setState({ count: count + 1 })
            this.props.handleCart(product, action)
        }
        else {
            return null
        }
    }

    render() {
        let item = this.state.product;
        return (
            // <View>
            //     <View style={[blockStyle]}>
            //         <View style={{ flex: 8 }}>
            //             <TouchableOpacity onPress={() => this.handleProductPress()}>
            //                 <Image style={[imgStyle]} source={{ uri: item.hinhAnh }} />
            //             </TouchableOpacity>
            //         </View>
            //         <View style={{ paddingLeft: 10 }}>
            //             <Text style={[contentProductName]}>{item.tenSP}</Text>
            //         </View>
            //         <View style={{ flex: 1, paddingLeft: 10, alignSelf: 'center' }}>
            //             <Text style={{ color: '#FF0000' }}>Giá: {numberWithCommas(item.gia)}</Text>
            //         </View>
            //         <View style={{ flex: 1, marginBottom: 5, paddingLeft: 10, flexDirection: 'row', justifyContent: 'center' }}>
            //             <TouchableOpacity onPress={() => this.handleCount('minus')} style={{ marginRight: 5 }}><AntIcon name='minussquare' size={25} color='#CCCCCC' /></TouchableOpacity>
            //             <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20 }}>{this.state.count}</Text>
            //             <TouchableOpacity onPress={(item) => this.handleCount('plus')} style={{ marginLeft: 5 }}><AntIcon name='plussquare' size={25} color='#CCCCCC' /></TouchableOpacity>
            //         </View>
            //     </View>
            // </View>
            <View style={{ maxWidth: widthScreen * .5, maxHeight: heightScreen * .5 }}>
                <Card containerStyle={{padding:10,paddingBottom:0}} style={{ width: '100%' }}>
                    <View style={[blockStyle]}>
                        <View style={{ flex: 6 }}>
                            <TouchableOpacity onPress={() => this.handleProductPress()}>
                                <Image style={[imgStyle]} source={{ uri: item.hinhAnh }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 3, paddingRight: 40 }}>
                            <Text style={[contentProductName]}>{item.tenSP}</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 10 }}>
                            <Text style={{ color: '#FF0000' }}>Giá: {numberWithCommas(item.gia)}</Text>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => this.handleCount('minus')} style={{marginLeft:10, marginRight: 5 }}><AntIcon name='minussquare' size={25} color='#CCCCCC' /></TouchableOpacity>
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20 }}>{this.state.count}</Text>
                            <TouchableOpacity onPress={() => this.handleCount('plus')} style={{ marginLeft: 5 }}><AntIcon name='plussquare' size={25} color='#CCCCCC' /></TouchableOpacity>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }
}
