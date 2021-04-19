import React, { Component } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

import FilesComponent from "../components/FilesComponent";
import {Profile} from "../screens/Profile"
import FileScanModal from "../components/FileScanModal"


export class NotesFiles extends Component {

    state = {
        imageScanModalVisible: false
    }

    toggleImageScanModal(){
        this.setState({imageScanModalVisible: !this.state.imageScanModalVisible})
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(Profile)}>
                    <Icon  name="angle-left" size={40} color="#11365F" />
                    
                </TouchableOpacity>

                <Modal animationType="slide" 
                visible={this.state.imageScanModalVisible} 
                onRequestClose={() => this.toggleImageScanModal()}>
                    <FileScanModal closeFileModal={() => this.toggleImageScanModal()} /> 
                </Modal>

                <View style={styles.notes}>
                    <Text style={styles.notesText}>Notes</Text>
                    <Text style={styles.textInNotesTitle}>Other contacts</Text>
                    <Text style={styles.textInNotes}>Steve Smith, attorney
                    steve.smith@mail.com
                    </Text>
                    <Text style={styles.textInNotes}>A customer is a blah blah. Mostly interested in blah blah blah
                    </Text>
                </View>
                <View style={styles.files}>
                    <Text style={styles.notesFiles}>Uploaded files </Text>
                </View>

                    <View style={styles.fileContainer}>
                        <Text>
                            <Icon  name="file" size={25} color="#11365F" />
                        </Text>
                        <Text style={styles.fileText} >File name</Text>
                        <TouchableOpacity style={styles.fileButton} >
                            <Text style={styles.fileButtonText}>View</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.fileContainer}>
                        <Text>
                            <Icon  name="file" size={25} color="#11365F" />
                        </Text>
                        <Text style={styles.fileTextB}>Passport - scan</Text>
                        <TouchableOpacity style={styles.fileButton} onPress={() => this.toggleImageScanModal()}>
                            <Text style={styles.fileButtonText}>View</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.fileContainer}>
                        <Text>
                            <Icon  name="file" size={25} color="#11365F" />
                        </Text>
                        <Text style={styles.fileText} >File name</Text>
                        <TouchableOpacity style={styles.fileButton} >
                            <Text style={styles.fileButtonText}>View</Text>
                        </TouchableOpacity>
                    </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    fileTextB:{
        fontFamily: "Futura-Medium",
        fontSize: 18, 
        color: "red",
        marginLeft: 20,
        marginRight:"auto"
    },
    fileButtonText:{
        fontFamily: "Futura-Medium",
        fontSize: 10, 
        color: "white",
        
    },
    fileButton:{
        backgroundColor: "#11365F",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        width: 50,
        height: 17
    },
    fileText:{
        fontFamily: "Futura-Medium",
        fontSize: 18, 
        color: "#103143",
        marginLeft: 20,
        marginRight:"auto"
    },
    fileContainer:{
        backgroundColor: "#C4C4C4",
        padding: 15,
        width: "100%",
        alignItems: 'center',
        justifyContent: "flex-start",
        flexDirection: "row",
        borderRadius: 12,
        marginTop: 20
    },
    files:{
        paddingHorizontal: 20
    },
    notes:{
        paddingHorizontal: 10
    },
    textInNotesTitle:{
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 18,
        color: "#103143",
        marginTop: 10
    },
    files:{
        marginTop: 70,
        paddingHorizontal: 15
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
