import React from 'react'
import { Text } from 'react-native'
// import Filho from './Filho'

export default props =>{
    return (
        <>
            <Text>Membros dessa família:</Text>
            {props.children}
        </>
    )
}