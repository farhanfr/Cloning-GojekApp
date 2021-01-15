import React, { Component } from 'react'
const { View, Image, Text, ScrollView, processColor } = require('react-native')

export const NavbarIcon = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ width: 26, height: 26 }} source={props.img} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4, color: props.active ? '#43AB4A' : 'black' }}>{props.title}</Text>
        </View>
    )
}