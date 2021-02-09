import React from 'react';
import { Text, View } from 'react-native';

const LabelParcial = (props) => 
    {
        return(
            <View>
                {props.items.map((item, index) => (
                    <Text>{item}</Text>
                ))}
            </View>
        )
    }
    

export default LabelParcial