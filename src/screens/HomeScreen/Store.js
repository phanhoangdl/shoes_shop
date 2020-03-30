import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import Products from '../../common/products.json'
import Content from '../../components/Content'

import HeaderElements from '../../components/HeaderElements'

export default class Store extends Component {
    state = {
        products: Products
    }

    // thêm/xóa sản phẩm khỏi giỏ hàng
    handleCart = (product,action) => {
        this.props.handleCart(product,action)
    }

    renderContent = () => {
        let {navigation} = this.props;
        return (this.state.products.map((item, index) => {
            return (
                <Content product={item} key={index} navigation={navigation} handleCart={(product,action) => this.handleCart(product,action)}/>
            )
        }))
    }

    render() {
        return (
            <Grid>
                <HeaderElements navigation={this.props} />
                <Row size={10}>
                    <ScrollView >
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                            {/* hiển thị danh sách toàn bộ sản phẩm */}
                            {this.renderContent()}
                        </View>
                    </ScrollView>
                </Row>
            </Grid>
        )
    }
}
