import {View, Text, StyleSheet, TouchableOpacity, Modal} from "react-native";
import React, { Component } from 'react';
import TodoModal from "../components/TodoModal";
import { BlurView } from 'expo-blur';

export class GroupComponent extends Component {
    state = {
        showListVisible: false
    }

    toggleListModal() {
        this.setState({showListVisible: !this.state.showListVisible})
    }
    render() {
        
        const group = this.props.group
        const completedCount = group.todos.filter(todo => todo.completed).length;
        const tasksCount = group.todos.length - completedCount;

        return (
            <View>
                <Modal 
                animationType="slide" 
                visible={this.state.showListVisible}
                onRequestClose= {() => this.toggleListModal()} >
                    <TodoModal group={group} 
                    closeModal={() => this.toggleListModal()} 
                    updateGroup ={this.props.updateGroup}/>
                </Modal>
                <TouchableOpacity style={styles.groupContainer} onPress={() => this.toggleListModal()} > 
                    <View style={[styles.colorView, {backgroundColor: group.color }]}/>
                    <BlurView intensity={40} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                    <View style={styles.textContainer }>
                        <Text style={styles.groupTitle} numberOfLines={1}>
                            {group.name}
                        </Text>
                        <Text style={styles.groupSubtitle}>
                            {tasksCount} tasks
                        </Text>
                    </View>
                    </BlurView>
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    nonBlurredContent: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 10
      },
    groupSubtitle:{
        fontFamily: "Futura-Medium",
        fontSize: 13
    },
    textContainer:{
        flexDirection:"column",
        marginLeft: 40,
        justifyContent: "center"
    },
    colorView:{
        
        width: 20,
        height: "100%",
        borderBottomLeftRadius: 10,
        borderTopStartRadius: 10
    },
    groupTitle:{
        color: "#103143",
        fontFamily: "Futura",
        fontWeight: "bold",
        fontSize: 19
    },
    groupContainer:{
        backgroundColor: '#EFEFEF',
        width: "100%",
        height: 70,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        overflow: 'hidden',
        
        
    }
})
export default GroupComponent;