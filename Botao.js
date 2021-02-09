import React from 'react'
import { Button, View } from 'react-native';

const Botao = (props) => (
    <View>
        <Button onPress={props.onClick} title={props.label}></Button>
    </View>
)

export default Botao