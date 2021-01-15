import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MainFeature } from '../../../components/molecules/MainFeature'

export default class HomeMainFeature extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0, marginTop: 18 }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap' }}>
                    <MainFeature title="Go-RIDE" img={require('../../../assets/icon/go-ride.png')} />
                    <MainFeature title="Go-RIDE" img={require('../../../assets/icon/go-ride.png')} />
                    <MainFeature title="Go-RIDE" img={require('../../../assets/icon/go-ride.png')} />
                    <MainFeature title="Go-RIDE" img={require('../../../assets/icon/go-ride.png')} />
                    <MainFeature title="Go-RIDE" img={require('../../../assets/icon/go-ride.png')} />
                    <MainFeature title="Go-RIDE" img={require('../../../assets/icon/go-ride.png')} />
                    <MainFeature title="Go-RIDE" img={require('../../../assets/icon/go-ride.png')} />
                    <MainFeature title="Go-RIDE" img={require('../../../assets/icon/go-ride.png')} />
                </View>
            </View>
        )
    }
}
