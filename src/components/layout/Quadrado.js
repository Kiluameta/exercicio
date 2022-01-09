import React from 'react'
import { View, StyleSheet } from 'react-native'
import estilo from '../estilo'

export default props =>{
    const lado = props.lado || 50

    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
        }}/>
    )
}

const styke = StyleSheet.create({

})