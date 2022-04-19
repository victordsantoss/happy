import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import OrpahnagesMap from "./pages/OrphanagesMap";
import OrphanageDetails from "./pages/OrhanagesDetails";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Screen name='OrpahnagesMap' component={OrpahnagesMap} />
                <Screen name='OrphanagesDetails' component={OrphanageDetails} />

            </Navigator>
        </NavigationContainer>
    );
}