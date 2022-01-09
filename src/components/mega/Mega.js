import React from "react";
import { View, Button, Text, TextInput } from "react-native";
import estilo from '../estilo';

import MegaNumero from "./Numero";

export default class Mega extends React.Component {

    state = {
        qtdNumero: this.props.qtdNumero,
        numeros: []
    }

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         qtdNumero: this.props.qtdNumero
    //     }

    //     this.alterarNum = this.alterarNum.bind(this)
    // }

    alterarNum = (qtd) => {
        this.setState({qtdNumero: +qtd})
    }

    gerarNumeroNaoContido = num => {
        const novo = parseInt(Math.random() * 60) + 1
        return num.includes(novo) ? this.gerarNumeroNaoContido(num) : novo
    } 

    // funcional

    gerarNum = () => {
        const numeros = Array(this.state.qtdNumero)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    // procedural

    // gerarNum = () => {
    //     const { qtdNumero } = this.state
    //     const numeros = []

    //     for(let i = 0; i < qtdNumero; i ++){
    //         const n = this.gerarNumeroNaoContido(numeros)
    //         numeros.push(n)
    //     }

    //     this.setState({ numeros })
    // }

    exibirNumeros = () =>{
        const nums = this.state.numeros
        return nums.map(num =>{
            return  <MegaNumero key={num} num={num} />
        })
    }

    render(){

        return(
            <>
                <Text style={estilo.fontG} >
                    Gerador da Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Quantidade de números:"
                    value={`${this.state.qtdNumero}`}
                    // onChangeText={qtd => this.alterarNum(qtd)}
                    onChangeText={this.alterarNum}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNum}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: "wrap",
                    justifyContent: "center"
                }} >
                    {this.exibirNumeros()}
                </View>
                {/* <Text>
                    {this.state.numeros.join(',')}
                </Text> */}
            </>
        )

    }

}