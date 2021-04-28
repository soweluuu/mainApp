import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'


export class NotificationModal extends Component {
    render() {
        return (
            <View style={styles.container}  >
            <TouchableOpacity style={{position: "absolute", top: 64, right: 32}} onPress={this.props.closeModal}>
                <Ionicons name="close" size={32} color="#11365F" />
            </TouchableOpacity>
            <View style={styles.addGroup}>
                <Text style={styles.text}>Add a group</Text>
                
                <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30, marginTop: 15}}>
                    
                </View>
                <TouchableOpacity style={styles.createButton} onPress={this.createTodo}>
                    <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
                </View>
        </View >
        )
    }
}

const styles = StyleSheet.create({
    colorSelect:{
        width: 30,
        height: 30,
        borderRadius: 4
    },
    buttonText:{
        fontFamily: 'Futura-CondensedExtraBold',
        
        fontSize: 18,
        color: "white"
    },
    createButton:{
        width: "100%",
        backgroundColor: "#11365F",
        height: 50,
        marginTop: 20,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    input:{
        borderWidth: 1,
        borderColor: '#95DBFB',
        borderRadius: 6,
        height: 50,
        marginTop: 10,
        width: "100%"
    },
    addGroup: {
        marginBottom: 20,
        height: "70%",
        width: "100%"
    },
    text:{
        color: '#103143',
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 22,
        
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 25
    }
})

export default NotificationModal
