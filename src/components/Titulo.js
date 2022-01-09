import React, { Fragment } from "react";
import { Text } from 'react-native';
import estilo from "./estilo";

export default props => (
    <Fragment>
        <Text style={estilo.fontG}> {props.principal} </Text>
        <Text> {props.secundario} </Text>
    </Fragment>
)