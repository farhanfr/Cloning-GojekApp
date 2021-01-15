import React, { Component } from 'react'
const { View, Image, Text, ScrollView } = require('react-native')

export const ScrollableItem = (props) => {
    return (
        <View style={{ marginRight: 16 }}>
            <View style={{ width: 150, height: 150, borderRadius: 4 }}>
                <Image source={props.img} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 4 }} />
            </View>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', marginTop: 16 }}>{props.title}</Text>
        </View>
    )
}