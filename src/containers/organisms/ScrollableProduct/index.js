import React, { Component } from 'react'
import { ScrollableItem } from '../../../components/molecules/ScrollableItem'
const { View, Image, Text,ScrollView } = require('react-native')

class ScrollableProduct extends Component {
    render() {
        return (
            <View>
            <View style={{ width: 55, height: 15,marginLeft:16}}>
              <Image source={require('../../../assets/logo/go-food.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:16,paddingHorizontal:16}}>
              <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Nearby Restaurant</Text>
              <Text style={{fontSize:17,fontWeight:'bold',color:'#61A756'}}>See All</Text>
            </View>
            <ScrollView horizontal style={{flexDirection:'row',paddingLeft:16}}>
              <ScrollableItem title="kfc" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
              <ScrollableItem title="kfc" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
              <ScrollableItem title="kfc" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
              <ScrollableItem title="kfc" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
            </ScrollView>
            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16,marginHorizontal:16 }}></View>
          </View>
        )
    }
}

export default ScrollableProduct