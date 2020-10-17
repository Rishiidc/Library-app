import React from 'react';
import { Text , View, TextComponent } from 'react-native';
export default class TransactionScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1,justifyContent:"center",alignItems:"center"}}>
                 <Text>
                     This is a Transaction Screen.
                 </Text>
            </View>
        )
    }
}