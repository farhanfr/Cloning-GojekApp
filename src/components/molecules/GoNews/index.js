import React, { Component } from 'react'
const { View, Image, Text, TouchableOpacity } = require('react-native')

export const GoNews = ({navigation}) => {
    return (
        <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
            <View style={{ position: 'relative' }}>
                <Image source={require('../../../assets/dummy/food-banner.jpg')} style={{ height: 170, width: '100%', borderRadius: 7 }} />
                <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
                <View style={{ width: 55, height: 15, position: 'absolute', top: 16, left: 16 }}>
                    <Image source={require('../../../assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
            </View>
            <View style={{ paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }}>GO-NEWS</Text>
                <Text style={{ fontSize: 14, fontWeight: '500', color: '#7A7A7A', marginBottom: 10 }}>Lorem iasp assdsad sadsadsa sdsadsdasd sadsad sdsads sadsdhkjhkjhdfjkhd</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('DetailTest')}>
                    <View style={{ backgroundColor: '#61A756', paddingVertical: 12, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 6 }}>
                        <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Read</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}