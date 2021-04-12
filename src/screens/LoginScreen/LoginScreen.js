import React from 'react'
import { SafeAreaView, Button} from 'react-native'
import {navigate} from '../../navigation/navService';
import {styles} from './styles'

const LoginScreen = () => {
    return <SafeAreaView style={styles.container}>
        <Button 
            onPress={() => {navigate("Home")}} 
            title="Login"
        />
    </SafeAreaView>
}

export default LoginScreen;