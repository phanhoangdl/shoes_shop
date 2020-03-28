import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions, TextInput, StyleSheet, Alert } from 'react-native'
import LoginInfo from '../../common/login.json';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
import {textInputStyle,buttonStyle,titleStyle,buttonTextStyle} from '../../assets/css'

export default class Login extends Component {
    state = {
        email: 'cybersoft@gmail.com',
        password: 'cybersoft@123'
    }

    handleTextChange = (name, value) => {
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {
        let { navigation } = this.props;
        let loginInfo = LoginInfo;
        let { email, password } = this.state;

        if (email.trim() == loginInfo.email && password.trim() == loginInfo.password) {
            console.log('Login success');
            Alert.alert('Thành công', email + ' đăng nhập thành công')
            navigation.navigate('Home', { params: {email: email, password: password} });
        }
        else {
            console.log('login failed')
            Alert.alert('Thất bại', 'Email hoặc mật khẩu không chính xác!')
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={titleStyle}>Đăng Nhập</Text>
                <TextInput style={textInputStyle} onChangeText={this.handleTextChange.bind(this,'email')} placeholder='Email' defaultValue='cybersoft@gmail.com'/>
                <TextInput style={textInputStyle} secureTextEntry placeholder='Password' onChangeText={(value) => {this.handleTextChange('password',value)}} defaultValue='cybersoft@123'/>
                <TouchableOpacity style={buttonStyle} onPress={this.handleSubmit}><Text style={buttonTextStyle}>Login</Text></TouchableOpacity>
            </View>
        )
    }
}
