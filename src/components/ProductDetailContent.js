import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

export default class ProductDetailContent extends Component {
    render() {
        let product = this.props.detail;
        return (
            <View>
                <View style={{ marginLeft: 10, marginRight: 10, paddingRight: 10, width: widthScreen }}>
                    <Image source={{ uri: product.hinhAnh }} style={{ height: '40%', width: '40%', justifyContent: 'center', alignSelf: 'center' }} />
                    <Text style={{ color: '#FFCC00', fontSize: 20, fontWeight: 'bold' }}>{product.tenSP}</Text>
                    <Text style={{ color: '#000000', textAlign: 'auto' }}>{product.moTa}</Text>
                    <Text style={{ color: '#FF0000', fontSize: 20 }}>Giá: {numberWithCommas(product.gia)}</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}><Size sizes={product.size} /></View>
                    <View style={{ alignSelf: 'flex-end', marginRight: 10, marginTop: 20, marginBottom: 20 }}>
                        <TouchableOpacity style={{ backgroundColor: '#FFCC00', width: 120, height: 40, borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginTop: 8 }}>Đặt mua <FontAwesomeIcon name='cart-arrow-down' size={16} /></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

{/* <View style={{ marginLeft: 10, marginRight: 10, paddingRight: 10, width: widthScreen }}>
    <Image source={{ uri: product.hinhAnh }} style={{ height: '40%', width: '40%', justifyContent: 'center', alignSelf: 'center' }} />
    <Text style={{ color: '#FFCC00', fontSize: 18, fontWeight: 'bold' }}>{product.tenSP}</Text>
    <Text style={{ color: '#000000', textAlign: 'auto' }}>{product.moTa}</Text>
    <Text style={{ color: '#FF0000', fontSize: 20 }}>Giá: {numberWithCommas(product.gia)}</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}><Size sizes={product.size} /></View>
    <View style={{ alignSelf: 'flex-end', marginRight: 10, marginTop: 20, marginBottom: 20 }}>
        <TouchableOpacity style={{ backgroundColor: '#FFCC00', width: 120, height: 40, borderRadius: 10 }}>
            <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginTop: 8 }}>Đặt mua <FontAwesomeIcon name='cart-arrow-down' size={16} /></Text>
        </TouchableOpacity>
    </View>

</View> */}