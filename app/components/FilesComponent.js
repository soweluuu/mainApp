import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

function FilesComponent(props) {

    const {fileName, onPress} = props;
    
    return (
        <View style={styles.container}>
            <Text>
                <Icon  name="file" size={25} color="#11365F" />
            </Text>
            <Text style={styles.fileText}>{fileName}</Text>
            <TouchableOpacity style={styles.button} onPress={() => toggleImageScanModal()} >
                <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonText:{
        fontFamily: "Futura-Medium",
        fontSize: 10, 
        color: "white",
        
    },
    button:{
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
    container:{
        backgroundColor: "#C4C4C4",
        padding: 15,
        width: "100%",
        alignItems: 'center',
        justifyContent: "flex-start",
        flexDirection: "row",
        borderRadius: 12,
        marginTop: 20
    }
})

export default FilesComponent;