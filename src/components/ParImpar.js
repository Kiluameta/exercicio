import React from 'react'
import { View, Text } from 'react-native'
import estilo from './estilo'

export default ({num = 0}) =>{
    
    // if (num % 2 === 0){
    //     return (
    //         <View>
    //             <Text>
    //                 O resultado é:
    //             </Text>
    //             <Text style={estilo.fontG}>
    //                 Par
    //             </Text>
    //         </View>
    //     )
    // } else {
    //     return (
    //         <View>
    //             <Text>
    //                 O resultado é:
    //             </Text>
    //             <Text style={estilo.fontG}>
    //                 Ímpar
    //             </Text>
    //         </View>
    //     )
    // }

    return (
        <View>
            <Text>
                O resultado é:
            </Text>
            {num % 2 === 0
                ?<Text style={estilo.fontG}>Par</Text>
                :<Text style={estilo.fontG}>Ímpar</Text>
            }
        </View>
    )

}