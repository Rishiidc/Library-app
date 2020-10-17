import React from 'react';
import { Text , View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner'
export default class SearchScreen extends React.Component{
    constructor(){
        super ()
        this.state={hascamerapermissions:null,scanned:false,scandata:'',buttonstate:'normal'}
    }
    getcamerapermission = async() =>{
       const {status} = await permissions.askAsync(permissions.CAMERA)
       this.setState({
           hascamerapermissions:status==='granted',
        buttonstate:'clicked'
       })
    }
    handlebarcode = async ({type,data}) =>{
        this.setState({scanned:true,scandata:data,buttonstate:'normal'})
    }
    render(){
        const camerapermission = this.state.hascamerapermissions
        const scanned = this.state.scanned 
        const buttonstate = this.state.buttonstate
        if (
            buttonstate === 'clicked' && camerapermission === true
        ){
            return(
                <BarCodeScanner 
                onBarCodeScanned = {scanned?undefined:this.handlebarcode}/> 
            )
        }
        else if (buttonstate === 'normal'){
        return(
            <View style = {{flex:1,justifyContent:"center",alignItems:"center"}}>
                <text>
                    {camerapermission === true? this.state.scandata:"Request Camera Permission"}
                </text>
                <TouchableOpacity style={{backgroundColor:"blue"}} onPress = {this.getcamerapermissionb}>
                   <Text>
                     Scan QR code.
                   </Text>
                </TouchableOpacity>
            </View>
        )
        }
    }
}