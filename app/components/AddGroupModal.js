import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import tempData from '../tempData';

export class AddGroupModal extends Component {
    backgroundColors = ['#11365F', "#95DBFB", "#C8EDFD", "#DDDDFA", "#B7B6E5"];
    state = {
        name: "",
        color: this.backgroundColors[0]
    };

    createTodo = () => {
        const{name, color} = this.state;

        const group = {name, color}

        this.props.addGroup(group);

        this.setState({name: " "});
        this.props.closeModal();
    }

    renderColors() {
        return this.backgroundColors.map(color => {
            return (
                <TouchableOpacity key={color}
                    style={[styles.colorSelect, {backgroundColor: color}]}
                    onPress={() => this.setState({color})}/>
                    
            )
        })
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding"  >
                <TouchableOpacity style={{position: "absolute", top: 64, right: 32}} onPress={this.props.closeModal}>
                    <Ionicons name="close" size={32} color="#11365F" />
                </TouchableOpacity>
                <View style={styles.addGroup}>
                    <Text style={styles.text}>Add a group</Text>
                    <TextInput style={styles.input} 
                        placeholder=" Group name" 
                        onChangeText={text => this.setState({name: text})}/>
                    <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30, marginTop: 15}}>
                        {this.renderColors()}
                    </View>
                    <TouchableOpacity style={styles.createButton} onPress={this.createTodo}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                    </View>
            </KeyboardAvoidingView >
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

export default AddGroupModal
