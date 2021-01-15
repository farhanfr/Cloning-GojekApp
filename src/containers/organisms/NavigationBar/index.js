import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavbarIcon } from '../../../components/molecules/NavbarIcon'

export default class Navbar extends Component {
    render() {
        return (
            <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
                <NavbarIcon title="Home" img={require('../../../assets/icon/home-active.png')} active />
                <NavbarIcon title="Orders" img={require('../../../assets/icon/order.png')} />
                <NavbarIcon title="Help" img={require('../../../assets/icon/help.png')} />
                <NavbarIcon title="Inbox" img={require('../../../assets/icon/inbox.png')} />
                <NavbarIcon title="Account" img={require('../../../assets/icon/account.png')} />
            </View>
        )
    }
}
