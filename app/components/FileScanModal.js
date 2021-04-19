import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export class FileScanModal extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" >
                 <TouchableOpacity style={{position: "absolute", top: 64, right: 32}} onPress={this.props.closeFileModal}>
                    <Ionicons name="close" size={32} color="#11365F" />
                </TouchableOpacity>
                <View>
                    <Image style={styles.scan} source={require('..//..//assets/passport-scan.png')}></Image>
                </View>
                <View style={styles.scanInfo}>
                    <Text style={styles.scanInfoText}>Date of issue:</Text>
                    <Text style={styles.scanInfoText}> 04.05.2011</Text>
                   
                </View>
                <View style={styles.scanInfo}>
                    <Text style={styles.scanInfoText}>Date of expiry:</Text>
                    <Text style={styles.scanInfoTextB}> 04.05.2021  !</Text>
                </View>
        </KeyboardAvoidingView >
            
        )
    }
}

const styles = StyleSheet.create({
    scanInfoTextB:{
        fontFamily: "Futura-Medium",
        fontSize: 20,
        alignSelf: "flex-start",
        color: 'red'
    },
    scanInfoText:{
        fontFamily: "Futura-Medium",
        fontSize: 20,
        alignSelf: "flex-start",
        color: '#103143'
    
    },
    scanInfo:{
        width: "100%",
        padding: 20,
        flexDirection: "row"
    },
    scan:{
        resizeMode: 'contain',
        height: 430,
        width: 430,
        marginTop: 100,
        
    },
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        
        
    }
})

export default FileScanModal
