import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,

  View,
} from 'react-native';
import axios from 'axios'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // header: null,
  };
  state = {
    BTC:{},
    ETH:{}
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR')
      .then(res=>{
        this.setState(res.data)
        console.log(this.state.BTC.USD)
      })
      .catch(err=> {
        console.log(err)
      })
  }
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>
              1 Bitcoin ->  ${this.state.BTC.USD} 
          </Text>
        </View>
    
       <View style={styles.header}>
        <Text>
            1 Eth ->  ${this.state.ETH.USD}
        </Text>
       </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height:600,
  },
  header:{
    fontSize: 25,
    width: 300,
    height: 100,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
