import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';

import Mega from "./components/mega/Mega";
// import FlaxboxV4 from "./components/layout/FlaxboxV4";
// import FlaxboxV3 from "./components/layout/FlaxboxV3";
// import FlaxboxV2 from "./components/layout/FlaxboxV2";
// import FlaxboxV1 from "./components/layout/FlaxboxV1";
// import Quadrado from "./components/layout/Quadrado";
// import DigiteSeuNome from "./components/DigiteSeuNome";
// import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";
// import ListaProdutos from "./components/produtos/ListaProdutos";
// import UsuarioLogado from "./components/UsuarioLogado";
// import Pai from "./components/relacao/Pai";
// import Filho from "./components/relacao/Filho";
// import ParImpar from "./components/ParImpar";
// import ContadorV2 from "./components/Contador/ContadorV2";
// import Pai from "./components/indireta/Pai";
// import Pai from "./components/direta/Pai";
// import Contador from "./components/Contador";
// import Botao from "./components/Botao";
// import Titulo from "./components/Titulo";
// import Aleatorio from "./components/Aleatorio";
// import MinMax from "./components/MinMax";
// import ComPadrao, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from "./components/Primeiro";

export default () => (
    <SafeAreaView style={style.App}> 
        <Mega qtdNumero={0} />
        {/*
        <FlaxboxV4/>
        <FlaxboxV3/>
        <FlaxboxV2/>
        <FlaxboxV1/>
        <Quadrado/>
        <Quadrado cor='#F00'/> 
        <Quadrado cor='#0F9' />
        <Quadrado cor='#009' />
        <DigiteSeuNome/>
        <ListaProdutosV2/>
        <ListaProdutos/>
        <Pai>
            <Filho nome="Bia" sobrenome="Arruda" />
            <Filho nome="Carlos" sobrenome="Arruda" />
        </Pai> 
        <Pai>
            <Filho nome="Bernado" sobrenome="Silva" />
            <Filho nome="Mari" sobrenome="Silva" />
        </Pai>
        <ParImpar num={3} />
        <ContadorV2/> 
        <Pai/>
        <Contador inicial={100} passo={10} />
        <Contador/> 
        <Botao/>
        <Titulo principal="Cadastro Produto"
            secundario="Tela de Cadastro de Produto"/>
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} /> 
        <MinMax min={3} max={30} />
        <MinMax min={1} max={100} />
        <ComPadrao/>
        <Comp1/>
        <Comp2/>           
        <Primeiro/> */}
    
    </SafeAreaView>
)

const style = StyleSheet.create({

    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }

})