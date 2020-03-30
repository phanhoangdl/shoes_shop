import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid';

//define components
import ListProducts from '../../components/ListProducts';

//import utils
import numberWithCommas from '../../common/util/format_price'
import { widthScreen } from '../../assets/css';
import { Card } from 'react-native-elements';

const sum = (arr) => {
    var sum = 0;
    arr.forEach(element => {
        sum += element.gia
    });
    return sum;
}

export default class Cart extends Component {
    state = {
        products: this.props.products
    }

    renderCart = () => {
        let products = this.state.products
        if (products != null && products.length > 0) {
            return (
                <ListProducts products={products} />
            )
        }
        else {
            return (
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: '#FF33FF', fontWeight: 'bold', textAlign: 'center' }}>Không có sản phẩm nào!</Text>
                </View>
            )
        }
    }

    renderCartSummary = () => {
        let products = this.state.products
        if (products != null && products.length > 0) {
            return (
                <Card containerStyle={{ padding: 15,backgroundColor:'rgba(124,205,124,0.7)' }} style={{ width: widthScreen}}>
                    <View style={{ width: widthScreen * .88, paddingLeft: 10 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
                            - Bạn đã chọn mua {products.length} sản phẩm {"\n"}
                        - Tổng tiền thanh toán: {numberWithCommas(sum(products))}đ
                    </Text>
                    </View>
                </Card>


            )

        } else {
            return null
        }
    }

    hanldePay = () => {
        Alert.alert('Thanh toán thành công, đơn hàng đã được lưu vào History')
        this.props.clearCart();
        let products = this.state.products
        this.props.addHistory(products)
        this.setState({ products: null })
    }
    renderButton = () => {
        let products = this.state.products
        if (products != null && products.length > 0) {
            return (
                <View>
                    <TouchableOpacity onPress={() => this.hanldePay()} style={{ backgroundColor: '#FF3333', width: widthScreen * .95, height: 50, borderRadius: 5, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, textAlign: 'center', color: '#FFFFFF' }}>Tiến Hành Thanh Toán</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return null
        }
    }
    render() {
        return (
            <Grid style={{ backgroundColor: 'rgba(152,251,152,0.2)' }}>
                <Row size={4} style={{ justifyContent: 'center' }}>{this.renderCart()}</Row>
                <Row size={1}>
                    {this.renderCartSummary()}
                </Row>
                <Row size={1} style={{ justifyContent: 'center', paddingTop: 10, paddingBottom: 10, alignItems: 'flex-end' }}>
                    {this.renderButton()}
                </Row>
            </Grid>
        )
    }
}
