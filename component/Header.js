//rgba(0,0,0,0.2)->inactive
import React from "react";
import {View,Text,TouchableOpacity,Image} from "react-native"
import Swiper from "react-native-swiper";
import { FontAwesome } from "@expo/vector-icons";

function Header(props){
  
    return (
  
    <View style={{
      marginTop:20,
      flex:20,
      width:'100%',
      marginBottom:10,
      justifyContent: 'center',
      alignItems: 'center',
      
    }}   >
      

      <Text style={{
        color: "black",
        backgroundColor: 'green'
      }}> gege</Text>



      


{/* background */}

          <View style={{ width: 400, flex:1,}}>
        <Swiper showsButtons={true}>
          <Image source={require('../assets/images/a.jpg')} style={{marginLeft:60,width: 300, flex:1}}/>

          <Image source={require('../assets/images/b.jpg')} style={{marginLeft:60,width: 300, flex:1}}/>

        </Swiper>
      </View>



    </View>);
}
export default Header
