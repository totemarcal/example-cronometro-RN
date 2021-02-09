import React, {useState, useRef, useEffect} from 'react'
import { Button, View } from 'react-native';
import Botao from './Botao'
import LabelCronometro from './LabelCronometro'
import LabelParcial from './LabelParcial'

function useCounter(intialCount = 0){
    const [count, setCount] = useState(0);
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });
    
    return [count, setCount];
  }

const Contador = (props) => {

    const [segundos, setSegundos] = useState(0)
    const [minutos, setMinutos] = useState(0)
    const [stop, setStop] = useState(false)
    const [nameStop, setNameStop] = useState("Stop")
    const [parcial, setParcial] = useState([])
    const [relogio, setRelogio] = useState("")


    const horaAtual = () => {
        //yarn add moment-timezone
        var moment = require('moment-timezone')
        let localTime = moment( ).tz("America/Los_Angeles").format('HH:mm:ss').toString()
        setRelogio(localTime)
    }

    const incrementar = () => {   
        if(stop==false){
            setSegundos(segundos+1)
        }
    }

    const zerar = () => {
        setSegundos(0)
    }

    const incrementarMinutos = () => {
        setMinutos(minutos + 1)
    }

    const zerarCronometro = () => {
        setSegundos(0)
        setMinutos(0)
        setParcial([])
    }

    const pararTempo = () => {
        setStop(!stop)
        if(stop)
        {
            setNameStop("Stop")
        }else
        {
            setNameStop("Play")
        } 
    }

    const parciais = () => {
        let p = minutos + ":" + segundos
        setParcial([...parcial, p])
    }

    /*useInterval(() => {
        incrementar()
        horaAtual()
    }, 1000)*/

    useEffect(() => {
        if (segundos >= 5){
            zerar()
            incrementarMinutos()
        }
    }, [segundos])

    useEffect(() => {
        let id = setInterval(() => {
            incrementar()
            horaAtual()
        }, 1000)
        return () => clearInterval(id);   
    })
        
    return(
        <View>
            <LabelCronometro name={minutos+":"+segundos}/>
            <Botao onClick={() => zerarCronometro()} label="Zerar" />
            <Botao onClick={() => pararTempo()} label={nameStop} />
            <Botao onClick={() => parciais()} label="Parcial" />
            <LabelCronometro name={relogio}/>
            <LabelParcial items={parcial}/>
        </View>
    )
}

export default Contador