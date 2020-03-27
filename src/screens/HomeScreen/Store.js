import React, { Component } from 'react'
import { Text, View, Dimensions, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { Grid, Row, Col } from 'react-native-easy-grid'
import FonttistoIcon from 'react-native-vector-icons/Fontisto'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Products from '../../common/products.json'
import Content from '../../components/Content'

//import styles
import {titleStyle} from '../../assets/css'
import { Header } from 'react-native-elements'

export class CustomRightHeader extends Component {
    render(){
        return(
            <View>
                    <TouchableOpacity onPress={() => this.props.cartPress()}><AntIcon name='shoppingcart' size={30} color='#fff' /></TouchableOpacity>
                </View>
        )
    }
    
}
export default class Store extends Component {
    state = {
        products: Products
    }

    renderContent = () => {
        let {navigation} = this.props;
        return (this.state.products.map((item, index) => {
            return (
                <Content product={item} key={index} navigation={navigation} />
            )
        }))
    }

    handleCartPress = () => {
        let {navigation} = this.props;
        navigation.navigate('Cart');
    }

    render() {
       // let item = this.state.products[0];
        return (
            <Grid>
                <Header
                    //leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Store', style: { color: '#fff',fontSize:30 } }}
                    rightComponent={<CustomRightHeader cartPress = {() => this.handleCartPress()}/>}
                />
                {/* <Row size={1} >
                    <Text style={[titleStyle]}> Shoes </Text>
                    <View style={{ justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.handleCartPress()}><Text style={{ textAlign: 'right', color: 'red' }}><AntIcon name='shoppingcart' size={30} />Giỏ Hàng</Text></TouchableOpacity>
                    </View>
                </Row> */}
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
