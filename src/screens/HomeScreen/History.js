import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ListProducts from '../../components/ListProducts'
import {Header} from 'react-native-elements'
import CustomRightHeader from '../../components/CustomRightHeader'

//import style
import {header} from '../../assets/css'

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
                <Header
                    backgroundColor={header.backgroundColor}
                    //leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Lịch Sử', style: { color: header.textColor, fontSize: header.textSize } }}
                    rightComponent={<CustomRightHeader navigation = {this.props.navigation} />}
                />
                {this.renderHistories()}
            </View>
        )
    }
}
