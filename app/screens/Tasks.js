import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

import GroupComponent from "../components/GroupComponent";
import tempData from "../tempData";

export class Tasks extends Component {
    render() {
        return (
            <View style={styles.background}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                    <Ionicons name="md-add-outline" size={32} color="white" />
                    <Text style={styles.buttonText}>Create new group</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.groupsContainer}>
                    <FlatList 
                        data={tempData}
                        keyExtractor={item => item.name}
                        renderItem={({item}) => 
                            <GroupComponent group={item} /> }
                       
                    
                    />
                </View>
            </View>
                
        )
    }
}
const styles = StyleSheet.create({
    buttonText:{
        color: "white",
        fontFamily: "Futura-Medium",
        marginBottom: 2,
        fontSize: 18
    },
    button:{
        backgroundColor: '#11365F',
        width: 195,
        height: 42,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 5

    },
    buttonContainer:{
        marginTop: 7,
        marginBottom: 7,
        alignItems: "flex-end"
    },
    background: {
        backgroundColor: '#FFFEFE',
        flex: 1, 
        padding: 20
        
        
    }
})
export default Tasks