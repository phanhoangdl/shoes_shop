import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ListProducts from '../../components/ListProducts'
import {Header} from 'react-native-elements'
import CustomRightHeader from '../../components/CustomRightHeader'

//import style
import {header, heightScreen} from '../../assets/css'
import HeaderElements from '../../components/HeaderElements'

export default class History extends Component {

    renderHistories = () => {
        let histories = this.props.histories
        if(histories.length > 0){
            return (
                <ListProducts products={histories} />
            )
        } else {
            return <Text>Không có sản phẩm nào</Text>
        }
        
    }
    
    render() {
        return (
            <View>
                <HeaderElements navigation={this.props} />
                <View><Text style={{ fontSize: 20, marginTop: 5, marginBottom: 5, fontWeight: 'bold' }}>Các Sản Phẩm Đã Mua({this.props.histories.length})</Text></View>
                <View style={{ maxHeight: heightScreen * .7 }}>
                    {this.renderHistories()}
                </View>

            </View>
        )
    }
}
