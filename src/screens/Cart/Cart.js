import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Grid,Row,Col } from 'react-native-easy-grid';
import Related from '../../components/Related';

//define components
import ListProducts from '../../components/ListProducts';

//import utils
import {numberWithCommas} from '../../common/util/format_price'
import { widthScreen } from '../../assets/css';

const sum = (arr) => {
    var sum = 0;
    arr.forEach(element => {
        sum += element.gia
    });
    console.log(sum)
    return sum;
}

export default class Cart extends Component {
    state = {
        products:null
    }

    componentDidMount() {
        let cart = this.props.products;
        this.setState({products:cart})
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
                <View style={{justifyContent:'center'}}>
                    <Text style={{ color: '#FF33FF', fontWeight: 'bold', textAlign:'center'}}>Bạn chưa chọn sản phẩm nào!</Text>
                </View>
                
            )
        }
    }

    renderCartSummary = () => {
        let products = this.state.products
        
        if(products != null && products.length > 0){
            return (
                <View style={{backgroundColor:'rgba(124,205,124,0.7)',width:widthScreen,paddingLeft:10}}>
                    <Text style={{color:'#FFFFFF',fontSize:20}}>
                    - Bạn đã chọn mua {products.length} sản phẩm {"\n"}
                    - Tổng tiền thanh toán: {sum(products)}đ
                </Text>
                    </View>
                
            )
                
        }else{
            return null
        }
    }
    renderButton = () => {
        let products = this.state.products
        if(products != null && products.length > 0){
            return (
                <View>
                    <TouchableOpacity style={{backgroundColor:'#FF3333',width:widthScreen*.95,height:50,borderRadius:5,justifyContent:'center'}}>
                        <Text style={{fontSize:16,textAlign:'center',color:'#FFFFFF'}}>Tiến Hành Thanh Toán</Text>
                    </TouchableOpacity>
                </View>
            )
                
        }else{
            return null
        }
    }
    render() {
        return (
            <Grid style={{backgroundColor:'rgba(152,251,152,0.2)'}}>
                <Row size={4} style={{justifyContent:'center'}}>{this.renderCart()}</Row>
                <Row size={1}>
                    {this.renderCartSummary()}
                </Row>
                <Row size={1} style={{justifyContent:'center',paddingTop:10,paddingBottom:10,alignItems:'flex-end'}}>
                    {this.renderButton()}
                </Row>
            </Grid>            
        )
    }
}
