
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {RecipeListScreen,Header,Content,Footer} from "../component"


function HomeScreen(props){
    return <View style={{
        flex:100
      }}>
    <RecipeListScreen/>
      <Header />
      <Content />
      {/* <Footer /> */}
  
      </View>
}
export default HomeScreen