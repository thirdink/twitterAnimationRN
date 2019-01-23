import React from 'react';
import { 
  StyleSheet,
   Text,
    View ,
    Dimensions,
    Animated,
    PanResponder,
    ScrollView,
    Image,
    Slider
  } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
  const SCREEN_HEIGHT = Dimensions.get('window').height;
  const SCREEN_WIDTH = Dimensions.get('window').width;


  
export default class App extends React.Component {
  componentWillMount(){
    this.animation = new Animated.ValueXY({ x:0 , y:SCREEN_HEIGHT - 90});
  }
  render() {
    const animatedHeight = {
      transform : this.animation.getTranslateTransform()
    }
    return (
      <Animated.View style={{flex:1,backgroundColor: 'white'}}>
      <Animated.View
      style={[animatedHeight,{
        position:'absolute',
        left:0,
        right:0,
        zIndex:10,
        backgroundColor:'white',
        height: SCREEN_HEIGHT
      }]}
      >
      <Animated.View
      style={{ height: 80,borderTopWidth:1, borderTopColor: '#ebe5e5',
    flexDirection: 'row',alignItems: 'center' }}
      >
      <View style={{flex:4,flexDirection:'row',alignItems:'center'}}>
      <Animated.View style={{height:32,width:32,marginLeft:10}}>
      <Image style={{flex:1,width:null,height:null}}
      source={require('./assets/hilife.jpg')}
      />
      </Animated.View>
     <Animated.Text style={{opacity: 1,fontSize: 18, paddingLeft: 10}}>Fantasies</Animated.Text>
      </View> 
      <Animated.View style={{opacity:1,flex:1,flexDirection:'row',justifyContent: 'space-around'}}>
         <Ionicons name="md-pause" size={32}/>
      <Ionicons name="md-play" size={32}/>
      </Animated.View>

     
    
      
      </Animated.View>
      </Animated.View>
      </Animated.View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
