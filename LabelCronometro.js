import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LabelCronometro = (props) => (
    <View>
        <Text style={styles.mytitle}>{props.name}</Text>
    </View>
)

const styles = StyleSheet.create({
    mytitle: {
        color: 'blue',
        fontSize: 20
    },
  });
  

export default LabelCronometro