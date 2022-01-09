import React from 'react'
import { View, StyleSheet } from 'react-native'

import Quadrado from './Quadrado'

export default props =>{
    return (
        <View style={style.FlexV3} >
            <Quadrado cor='#090' lado={20} />
            <Quadrado cor='#F00' lado={15}/> 
            <Quadrado cor='#0F9' lado={40}/>
            <Quadrado cor='#009' lado={30}/>   
        </View>
    )
}

const style = StyleSheet.create({

    FlexV3:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }

})