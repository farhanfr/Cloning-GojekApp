import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native'
import {GopayFeature} from './src/components/molecules/GopayFeature'
import {MainFeature} from './src/components/molecules/MainFeature'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          {/* Search bar */}
          <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
            <View style={{ position: 'relative', flex: 1 }}>
              <TextInput placeholder="what do you want to eat" style={{ borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 14, backgroundColor: 'white', marginRight: 18 }} />
              <Image source={require('./src/assets/icon/search.png')} style={{ position: 'absolute', top: 5, left: 12 }} />
            </View>
            <View style={{ width: 35, alignItems: 'center', 'justifyContent': 'center' }}>
              <Image source={require('./src/assets/icon/promo.png')} />
            </View>
          </View>
          {/* gopay */}
          <View style={{ marginHorizontal: 17, marginTop: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
              <Image source={require('./src/assets/icon/gopay.png')} />
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Rp 50.000</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
              <GopayFeature title="Pay" img={require('./src/assets/icon/pay.png')}/>
              <GopayFeature title="Nearby" img={require('./src/assets/icon/nearby.png')}/>
              <GopayFeature title="Top Up" img={require('./src/assets/icon/topup.png')}/>
              <GopayFeature title="More" img={require('./src/assets/icon/more.png')}/>
            </View>
          </View>
          {/* Main feature */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0, marginTop: 18 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%',flexWrap:'wrap'}}>
            <MainFeature title="Go-RIDE" img={require('./src/assets/icon/go-ride.png')} />
            <MainFeature title="Go-RIDE" img={require('./src/assets/icon/go-ride.png')} />
            <MainFeature title="Go-RIDE" img={require('./src/assets/icon/go-ride.png')} />
            <MainFeature title="Go-RIDE" img={require('./src/assets/icon/go-ride.png')} />
            <MainFeature title="Go-RIDE" img={require('./src/assets/icon/go-ride.png')} />
            <MainFeature title="Go-RIDE" img={require('./src/assets/icon/go-ride.png')} />
            <MainFeature title="Go-RIDE" img={require('./src/assets/icon/go-ride.png')} />
            <MainFeature title="Go-RIDE" img={require('./src/assets/icon/go-ride.png')} />
            </View> 
          </View>
          <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20 }}></View>
          {/* News section */}
          <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
            <View style={{ position: 'relative' }}>
              <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{ height: 170, width: '100%', borderRadius: 7 }} />
              <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
              <View style={{ width: 55, height: 15, position: 'absolute', top: 16, left: 16 }}>
                <Image source={require('./src/assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
              </View>
            </View>
            <View style={{ paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }}>GO-NEWS</Text>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#7A7A7A', marginBottom: 10 }}>Lorem iasp assdsad sadsadsa sdsadsdasd sadsad sdsads sadsdhkjhkjhdfjkhd</Text>
              <TouchableOpacity>
                <View style={{ backgroundColor: '#61A756', paddingVertical: 12, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 6 }}>
                  <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Read</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* Internal information section */}
          <View style={{padding:16,paddingBottom:0}}>
            <View style={{ width: 55, height: 15,marginLeft:-4}}>
              <Image source={require('./src/assets/logo/gojek.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
            <Text style={{fontWeight:'bold',fontSize:17,color:'#1C1C1C',marginTop:15,marginBottom:20}}>Complete your profile</Text>
            <View style={{flexDirection:'row',marginBottom:16}}>
              <View><Image source={require('./src/assets/dummy/facebook-connect.png')} /></View>
              <View style={{marginLeft:16,flex:1}}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'#4A4A4A'}}>Connect to facebook</Text>
                <Text style={{fontSize:15,fontWeight:'normal',color:'#4A4A4A',width:'70%'}}>Login faster without verifcation code</Text>
              </View>
            </View>
            <TouchableOpacity>
              <View style={{ backgroundColor: '#61A756', paddingVertical: 12, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 6 }}>
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Connect</Text>
              </View>
            </TouchableOpacity>
            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>
          </View>
          {/* Gofood banner section */}
          <View style={{ padding: 16 }}>
            <View style={{ position: 'relative' }}>
              <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{ height: 170, width: '100%', borderRadius: 7 }} />
              <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
              <View style={{ width: 55, height: 15, position: 'absolute', top: 16, left: 16 }}>
                <Image source={require('./src/assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
              </View>
              <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16 }}>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 }}>Free GOFOOD voucher</Text>
                  <Text style={{ fontSize: 12, fontWeight: '400', color: 'white' }}>Quic mantap</Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 12 }}>
                  <TouchableOpacity>
                    <View style={{ backgroundColor: '#61A756', paddingVertical: 12, paddingHorizontal: 12, alignSelf: 'stretch', borderRadius: 6 }}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Get Voucher</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>
          </View>
          {/* Nearby Gofood */}
          <View>
            <View style={{ width: 55, height: 15,marginLeft:16}}>
              <Image source={require('./src/assets/logo/go-food.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:16,paddingHorizontal:16}}>
              <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Nearby Restaurant</Text>
              <Text style={{fontSize:17,fontWeight:'bold',color:'#61A756'}}>See All</Text>
            </View>
            <ScrollView horizontal style={{flexDirection:'row',paddingLeft:16}}>
              <View style={{marginRight:16}}>
                <View style={{width:150,height:150,borderRadius:4}}>
                  <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1,borderRadius:4}} />
                </View>
                <Text style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:16}}>Sederhana minang</Text>
              </View>
              <View style={{marginRight:16}}>
                <View style={{width:150,height:150,borderRadius:4}}>
                  <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1,borderRadius:4}} />
                </View>
                <Text style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:16}}>Sederhana minang</Text>
              </View>
              <View style={{marginRight:16}}>
                <View style={{width:150,height:150,borderRadius:4}}>
                  <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1,borderRadius:4}} />
                </View>
                <Text style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:16}}>Sederhana minang</Text>
              </View>
            </ScrollView>
          </View>
          <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16,marginHorizontal:16 }}></View>
        </ScrollView>

        <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./src/assets/icon/home-active.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, color: '#43AB4A' }}>Home</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./src/assets/icon/order.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Orders</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./src/assets/icon/help.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Help</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./src/assets/icon/inbox.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Inbox</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={require('./src/assets/icon/account.png')} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Account</Text>
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({})
