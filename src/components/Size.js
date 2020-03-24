import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Size extends Component {
    render() {
        let { sizes } = this.props;
        
        return (
            sizes.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={{ width: 30,height:30,marginLeft:8, backgroundColor: '#CCCCCC',borderRadius:5 }}><Text style={{ color: '#000000',textAlign:'center',paddingTop:5 }}>{item}</Text></TouchableOpacity>
                )
            })
        )
    }
}