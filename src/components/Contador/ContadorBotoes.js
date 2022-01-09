import React from 'react'
import { View, Button } from 'react-native'

export default ({inc, dec}) =>{
    return (
        <View>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </View>
    )
}