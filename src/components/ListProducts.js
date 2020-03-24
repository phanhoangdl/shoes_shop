import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

//import styles 
import {widthScreen} from '../assets/css'

export default class ListProducts extends Component {
    render() {
        let products = this.props.products
        return (
            <ScrollView>
                {products.map((item,index) => {
                    return(
                        <View key={index} style={{ flexDirection: 'row', width: widthScreen,borderBottomColor:'#F4A460',borderBottomWidth:1 }}>
                            <View style={{ flex: 1 }}>
                                <Image style={{ marginLeft: 2, width: 90, height: 90 }} source={{ uri: item.hinhAnh }} />
                            </View>
                            <View style={{ flex: 4, justifyContent: 'center', marginLeft: 20 }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.tenSP}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FF0000' }}>{numberWithCommas(item.gia)}</Text>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}
