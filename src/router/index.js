import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { MainHome,DetailTest,DetailTest2 } from '../containers/pages';

const Stack = createStackNavigator()

const Router = () =>{
    return(
        <Stack.Navigator 
        initialRouteName="MainHome"
        screenOptions={{
            headerShown:false
        }}>

            <Stack.Screen name="MainHome" component={MainHome} />
            <Stack.Screen name="DetailTest" component={DetailTest} />
            <Stack.Screen name="DetailTest2" component={DetailTest2} />
        </Stack.Navigator>
    )
    
}

export default Router