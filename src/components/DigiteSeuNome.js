import React, {useState} from 'react'
import { View, TextInput, Text } from 'react-native'
import estilo from './estilo'

export default props =>{
    const [nome, setNome] = useState()
    // let nome = 'Teste'
    return (
        <View>
            <TextInput
                placeholder="Digite seu Nome"
                textAlign="center"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}