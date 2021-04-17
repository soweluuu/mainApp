import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

import FilesComponent from "../components/FilesComponent";
import {Profile} from "../screens/Profile"


export class NotesFiles extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(Profile)}>
                    <Icon  name="angle-left" size={40} color="#11365F" />
                    
                </TouchableOpacity>
              
                <View style={styles.notes}>
                    <Text style={styles.notesText}>Notes</Text>
                </View>
                <View style={styles.files}>
                    <Text style={styles.notesFiles}>Uploaded files </Text>
                    
                </View>
                <FilesComponent fileName="ID card - scan" />
                <FilesComponent fileName="Passport scan" />
                <FilesComponent fileName="Social security card" />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    files:{
        marginTop: 70
    },
    notesFiles:{
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 20,
        color: "#103143"
    },
    notesText:{
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 20,
        color: "#103143"
    },
    container:{
        backgroundColor:  '#FFFEFE',
        flex: 1,
        paddingHorizontal: 20
    }
    
})

export default NotesFiles
