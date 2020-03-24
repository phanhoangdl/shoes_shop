// ===================================
// hiển thị thông tin chi tiết về sản phẩm
// ==================================

import React, { Component } from 'react'
import { Text, View,Image,Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import {Grid,Row,Col} from 'react-native-easy-grid'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import Size from '../../components/Size';

//defines component
import Related from '../../components/Related'

//define utils
import numberWithCommas from '../../common/util/format_price'

//import styles
import {widthScreen} from '../../assets/css'

export default class ProductDetail extends Component {
    state ={
        product:null
    }

    componentDidMount () {
        let {route} = this.props;
        let {product} = route.params.params;
        this.setState({product:product});
    }

    handleBuyClick = () => {
        this.props.handleCart
    }
    // hiển thị phần chi tiết sản phẩm
    renderDetail = () => {
        let product = this.state.product;
        
        if (product == null) {
            return (
                <Text>Không có sản phẩm</Text>
            )
        }
        else {
            return (
                <View style={{ marginLeft: 10, marginRight: 10, paddingRight: 10, width: widthScreen }}>
                    <Image source={{ uri: product.hinhAnh }} style={{ height: '40%', width: '40%', justifyContent: 'center', alignSelf: 'center' }} />
                    <Text style={{ color: '#FFCC00', fontSize: 18, fontWeight: 'bold' }}>{product.tenSP}</Text>
                    <Text style={{ color: '#000000', textAlign: 'auto' }}>{product.moTa}</Text>
                    <Text style={{ color: '#FF0000', fontSize: 20 }}>Giá: {numberWithCommas(product.gia)}</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}><Size sizes={product.size} /></View>
                    <View style={{ alignSelf: 'flex-end', marginRight: 10, marginTop: 10, marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => this.props.handleCart(product)} style={{ backgroundColor: '#FFCC00', width: 120, height: 40, borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', marginTop: 8 }}>Đặt mua <FontAwesomeIcon name='cart-arrow-down' size={16} /></Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        }
    }

    // hiển thị phần sản phẩm liên quan
    renderRelated = () => {
        let product = this.state.product;
        if(product == null){
            <Text>Không có sản phẩm liên quan</Text>
        }
        else{
            return(
                <Related product={this.state.product} />
            )
        }
    }

    render() {
        return (
            <Grid>
                <Row size={2} style={{ minHeight:50 }}>
                    {this.renderDetail()}
                </Row>
                <Row size={1}>
                    <View></View>
                </Row>
                <Row size={1} style={{ width: widthScreen, maxHeight: 30, marginTop: 40, backgroundColor: 'blue' }}>
                    <View style={{ paddingLeft: 10, paddingTop: 5, backgroundColor: 'lightgrey', width: '100%', height: 30 }}>
                        <Text style={{}}>SẢN PHẨM LIÊN QUAN</Text>
                    </View>

                </Row>
                <Row size={2}>
                    {this.renderRelated()}
                </Row>
            </Grid>
        )
    }
}
