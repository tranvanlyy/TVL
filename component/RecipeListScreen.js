//rgba(0,0,0,0.2)->inactive
import React from "react";
import {View,Text,TouchableOpacity,Image,SafeAreaView} from "react-native"
import SearchFilter from "../component/SearchFilter";

function RecipeListScreen(props){
  
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>

        <SearchFilter icon="search" placeholder={"nhập món yêu thích của bạn"} />
        

    


    
    </SafeAreaView>

);
}
export default RecipeListScreen
