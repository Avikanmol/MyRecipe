import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class LevelScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Levels</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"grey",
},
text:{
    color:"Black",
    fontSize:0
}

})