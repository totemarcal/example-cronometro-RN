import React from 'react'
import { Button, View } from 'react-native';
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'
import LabelParcial from './LabelParcial'


class Contador extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            segundos: 0,
            minutos: 0,
            stop: false,
            nameStop: "Stop",
            parcial: [],
            relogio: ""
        }
    }

    relogio(){
        //yarn add moment-timezone
        var moment = require('moment-timezone')
        let localTime = moment( ).tz("America/Los_Angeles").format('HH:mm:ss').toString()
        this.setState({relogio: localTime}) 
    }

    incrementar(){
        this.setState(
                (state) => {    
                    if(this.state.stop==false){
                        if (state.segundos >= 5){
                            this.zerar()
                            this.incrementarMinutos()
                        }
                        return({
                                segundos: state.segundos + 1})
                    }
                }
        )
    }

    zerar(){
        this.setState({
            segundos: 0,
        })
    }

    incrementarMinutos(){
        this.setState({minutos: this.state.minutos + 1})
    }

    zerarCronometro(){
        this.setState({
            segundos: 0,
            minutos: 0,
            parcial: []
        })
    }

    pararTempo(){
        this.setState({
            stop: !this.state.stop
        })
        if(this.state.stop)
                {this.setState({
                    nameStop: "Stop"
                }) }
            else
                {this.setState({
                    nameStop: "Play"
                })} 
    }

    parciais(){
        let p = this.state.minutos + ":" + this.state.segundos
        this.setState({
            parcial: [...this.state.parcial, p]
          })
          console.log("dchj")
    }

    componentDidMount(){
        setInterval( () => this.incrementar(), 1000)
        setInterval( () => this.relogio(), 1000)
    }

    render(){
        return(
            <View>
                <LabelCronometro name={this.state.minutos+":"+this.state.segundos}/>
                <Botao onClick={() => this.zerarCronometro()} label="Zerar" />
                <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
                <Botao onClick={() => this.parciais()} label="Parcial" />
                <LabelCronometro name={this.state.relogio}/>
                <LabelParcial items={this.state.parcial}/>
            </View>
        )
    }
}

export default Contador