import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";


export default class InputTextField extends Component{
    render(){
        return(
            <View style={this.props.style}>
                <Text style={inputStyles.inputTitle}>{this.props.title}</Text>
                <TextInput 
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.isSecure}
                    style={inputStyles.input}
                ></TextInput>
                <View style={{borderBottomWidth: 1, borderBottomColor: "#D8D8D8"}}></View>
            </View>
        )
    }
}


const inputStyles = StyleSheet.create({
    inputTitle: {
        color: "#ABB4BD",
        fontSize: 16,
    },
    input: {
        paddingVertical: 10,
        color: "#1D2029",
        fontSize: 15,
        fontFamily: "Avenir Next",
    }
})