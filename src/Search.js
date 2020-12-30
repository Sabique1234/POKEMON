import React from 'react';
import {View, Text} from 'react-native';
import {Icon, Input, Button, Header, Item} from 'native-base';

export default class Search extends React.Component{
  
  searchPoke=()=>{
    state={pokeSearch:""}
  }

  render(){
      return(
        <View style={{flex:1}}>

        
        <Item>
          <Icon style={styles.icon}name="ios-search" onPress={this.searchPoke}>
          </Icon>

          <Input style={styles.input} value={this.searchPoke.pokeSearch}
          placeHolder="Search Here..." onChangeText={(pokeSearch)=>this.setState({pokeSearch})} >
          </Input>



        </Item>


        </View>
      )
  }
}

const styles={

    icon:{
      marginTop:-400,
      marginLeft:0,
    },
    input:{
      marginTop:-600,
      marginRight:-100,
      marginLeft:200,
      width:20,
      length:1000,
    }

}

