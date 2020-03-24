import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'

//data
import data from '../common/products.json'

//import styles
//const widthScreen = Dimensions.get('window').width;
import { widthScreen } from '../assets/css'

export default class Related extends Component {
    state = {
        product:this.props.product,

    }

    

    renderRelated = () => {
        let products = data
        let relatedProducts = this.state.product.dsSanPhamLienQuan
        if (relatedProducts.length > 0) {
            return (relatedProducts.map((item, index) => {
                let related = products.find(x => x.maSP == item);
                try {
                    return (
                        <TouchableOpacity key={index} activeOpacity={0.1} >
                            <View  style={{ flexDirection: 'row', width: widthScreen }}>
                                <View style={{ flex: 1 }}>
                                    <Image style={{ marginLeft: 2, width: 90, height: 90 }} source={{ uri: related.hinhAnh }} />
                                </View>
                                <View style={{ flex: 4, justifyContent: 'center', marginLeft: 20 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{related.tenSP}</Text>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FF0000' }}>{numberWithCommas(related.gia)}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }
                catch {
                    return null
                }
            }))
        }
        else {
            return <Text>Không có sản phẩm nào</Text>
        }
    }

    render() {
        return (
            <ScrollView>
                {this.renderRelated()}
            </ScrollView>
        )
    }
}
