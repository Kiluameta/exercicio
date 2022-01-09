import React from 'react'
import { View, StyleSheet } from 'react-native'


export default props =>{
    return (
        <View style={style.FlexV4} >
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({

    FlexV4:{
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },

    V0:{
        flexGrow:1,
        height: 300,
        backgroundColor: '#0F9'
    },
    
    V1:{
        flexGrow:1,
        backgroundColor: '#090'
    },

    V2:{
        flexGrow:1,
        backgroundColor: '#009'
    },

})