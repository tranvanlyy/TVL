import { useState } from "react";
import {  StyleSheet,View, Text, TouchableOpacity,Image } from 'react-native';


function Welcome(props){
    const {navigation,router} =props
    // function cua navigate to/back
    const {navigate,goBack}=navigation
    return <View style={{flex: 1, alignItems: "center"}}>
        
        <Image source={require("../assets/images/a.jpg")}/>

        <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
				40K+ Lượt truy cập
			</Text>

        <TouchableOpacity onPress={()=>{navigate('MyTab') }}
        tyle={{
            backgroundColor: "#f96163",
            borderRadius: 18,
            paddingVertical: 18,
            width: "80%",
            alignItems: "center",
        }}>
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>go back</Text>
        </TouchableOpacity>
        
        </View>
}
export default Welcome