import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export class AddGroupModal extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding"  >
                <TouchableOpacity style={{position: "absolute", top: 64, right: 32}} onPress={this.props.closeModal}>
                    <Ionicons name="close" size={32} color="#11365F" />
                </TouchableOpacity>
                <View>
                    
                </View>
            </KeyboardAvoidingView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AddGroupModal
