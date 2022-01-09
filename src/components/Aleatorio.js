import React from "react";
import { Text }from "react-native";
import estilo from "./estilo";

export default props => {
    const { min, max } = props
    const delta = max - min
    const aleatorio = parseInt(Math.random() * delta) + min
    return(
        <Text style={estilo.fontG}>
            Valor aleatorio {aleatorio}
        </Text>
    )

}