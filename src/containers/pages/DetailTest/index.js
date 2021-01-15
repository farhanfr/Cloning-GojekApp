import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class DetailTest extends Component {
    render() {
        return (
            <View>
                <Text> Pages </Text>
                <Button title="test" onPress={()=>this.props.navigation.navigate('DetailTest2')} />
            </View>
        )
    }
}
