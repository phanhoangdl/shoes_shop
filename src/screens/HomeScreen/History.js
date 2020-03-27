import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ListProducts from '../../components/ListProducts'

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
                {this.renderHistories()}
            </View>
        )
    }
}
