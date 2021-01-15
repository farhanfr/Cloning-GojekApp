import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { MainFeature } from '../../../components/molecules/MainFeature'
import { SearchFeature } from '../../../components/molecules/SearchFeature'
import { GoNews } from '../../../components/molecules/GoNews'
import { GoInfo } from '../../../components/molecules/GoInfo'
import { GoBanner } from '../../../components/molecules/GoBanner'
import ScrollableProduct from '../../organisms/ScrollableProduct'
import { NavbarIcon } from '../../../components/molecules/NavbarIcon'
import Navbar from '../../organisms/NavigationBar'
import HomeMainFeature from '../../organisms/HomeMainFeature'
import HomeGopay from '../../organisms/HomeGopay'
import { ScrollView } from 'react-native-gesture-handler'

export default class MainHome extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <SearchFeature />
                    <HomeGopay />
                    <HomeMainFeature />
                    <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20 }}></View>
                    <GoNews navigation={this.props.navigation} />
                    <GoInfo />
                    <GoBanner />
                    <ScrollableProduct />
                </ScrollView>
                <Navbar />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
