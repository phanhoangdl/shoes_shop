import {StyleSheet,Dimensions} from 'react-native'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const loginColor = '#004400'
const { titleStyle, rowStyle, blockStyle, imgStyle, textInputStyle,buttonStyle,buttonTextStyle,contentProductName } = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        textAlignVertical: 'bottom',
        color:loginColor
    },
    rowStyle: {
        backgroundColor: '#FFFAFA',
        flexWrap: 'wrap'
    },
    blockStyle: {
        width: widthScreen * .53,
        height: heightScreen * .4,
        marginBottom:0,
        
    },
    imgStyle: {
        width: '70%',
        height: '90%'
        
    },
    textInputStyle: {
        width: widthScreen * .75,
        borderBottomColor: loginColor,
        borderBottomWidth: 3,
        color:loginColor
    },
    buttonStyle: {
        marginTop: 20, 
        width: widthScreen * .4, 
        height: 50, 
        backgroundColor: loginColor, 
        borderRadius:10
    },
    buttonTextStyle:{ 
        textAlign: 'center', 
        marginTop: 10, 
        color: '#FFFFFF', 
        fontSize: 20, 
        fontWeight: 'bold' 
    },
    contentProductName:{
        textAlign:'auto', 
        color: '#003333',
        fontSize:14
    }
})

const header = {
    backgroundColor : '#006600',
    textColor : '#fff',
    textSize : 25
}

export {header};
export {widthScreen,heightScreen};
export {titleStyle, rowStyle, blockStyle, imgStyle,textInputStyle,buttonStyle,buttonTextStyle,contentProductName};