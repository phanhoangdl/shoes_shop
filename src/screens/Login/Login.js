import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions, TextInput, StyleSheet, Alert } from 'react-native'
import LoginInfo from '../../common/login.json';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const { textInputStyle, buttonStyle, titleStyle,buttonTextStyle } = StyleSheet.create({
    textInputStyle: {
        width: widthScreen * .75,
        borderBottomColor: '#9999FF',
        borderBottomWidth: 3
    },
    buttonStyle: {
        marginTop: 20, 
        width: widthScreen * .4, 
        height: 50, 
        backgroundColor: '#9999FF', 
        borderRadius:10
    },
    titleStyle: {
        fontSize:40
    },
    buttonTextStyle:{ 
        textAlign: 'center', 
        marginTop: 10, 
        color: '#FFFFFF', 
        fontSize: 20, 
        fontWeight: 'bold' 
    }
})

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
            Alert.alert('Login successful')
            navigation.navigate('Home', { params: {email: email, password: password} });
        }
        else {
            console.log('login failed')
            Alert.alert('Notice', 'Email or password incorrect!')
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={titleStyle}>Login</Text>
                <TextInput style={textInputStyle} onChangeText={this.handleTextChange.bind(this,'email')} placeholder='Email' defaultValue='cybersoft@gmail.com'/>
                <TextInput style={textInputStyle} secureTextEntry placeholder='Password' onChangeText={(value) => {this.handleTextChange('password',value)}} defaultValue='cybersoft@123'/>
                <TouchableOpacity style={buttonStyle} onPress={this.handleSubmit}><Text style={buttonTextStyle}>Login</Text></TouchableOpacity>
            </View>
        )
    }
}
