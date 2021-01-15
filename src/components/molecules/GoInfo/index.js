import React, { Component } from 'react'
const { View, Image, Text, TouchableOpacity } = require('react-native')

export const GoInfo = () => {
    return (
        <View style={{ padding: 16, paddingBottom: 0 }}>
            <View style={{ width: 55, height: 15, marginLeft: -4 }}>
                <Image source={require('../../../assets/logo/gojek.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#1C1C1C', marginTop: 15, marginBottom: 20 }}>Complete your profile</Text>
            <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                <View><Image source={require('../../../assets/dummy/facebook-connect.png')} /></View>
                <View style={{ marginLeft: 16, flex: 1 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#4A4A4A' }}>Connect to facebook</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#4A4A4A', width: '70%' }}>Login faster without verifcation code</Text>
                </View>
            </View>
            <TouchableOpacity>
                <View style={{ backgroundColor: '#61A756', paddingVertical: 12, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 6 }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Connect</Text>
                </View>
            </TouchableOpacity>
            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>
        </View>
    )
}