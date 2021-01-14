import React, { Component } from 'react'
const { View, Image, Text } = require('react-native')

export const MainFeature = (props) => {
    return (
        <View style={{ width: `${100 / 4}%`, alignItems: 'center',marginBottom: 18}}>
            <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={props.img} />
            </View>
            <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{props.title}</Text>
        </View>
    )
}