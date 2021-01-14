import React, { Component } from 'react'
const { View, Image, Text } = require('react-native')

export const GopayFeature = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={props.img} />
            <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15 }}>{props.title}</Text>
        </View>
    )
}