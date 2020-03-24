import {StyleSheet,Dimensions} from 'react-native'

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const { titleStyle, rowStyle, blockStyle, imgStyle } = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        textAlignVertical: 'bottom'
    },
    rowStyle: {
        backgroundColor: '#FFFAFA',
        flexWrap: 'wrap'
    },
    blockStyle: {
        width: widthScreen * .5,
        height: heightScreen * .4
    },
    imgStyle: {
        width: '100%',
        height: '90%'
    }
})

export {widthScreen,heightScreen};
export {titleStyle, rowStyle, blockStyle, imgStyle};