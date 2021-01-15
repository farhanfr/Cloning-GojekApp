import React, { Component } from 'react'
const { View, Image, Text, TouchableOpacity } = require('react-native')

export const GoBanner = () => {
    return (
        <View style={{ padding: 16 }}>
            <View style={{ position: 'relative' }}>
                <Image source={require('../../../assets/dummy/food-banner.jpg')} style={{ height: 170, width: '100%', borderRadius: 7 }} />
                <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
                <View style={{ width: 55, height: 15, position: 'absolute', top: 16, left: 16 }}>
                    <Image source={require('../../../assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
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
    )
}