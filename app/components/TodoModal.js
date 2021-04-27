import React, { Component } from 'react'
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, FlatList, KeyboardAvoidingView, TextInput, Keyboard} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export class TodoModal extends Component {
    state = {
        newTodo: ""
    }

    toggleTodoCompleted = index => {
        let group = this.props.group
        group.todos[index].completed = !group.todos[index].completed

        this.props.updateGroup(group);
    }
    addTodo = () => {
        let group = this.props.group
        group.todos.push({title: this.state.newTodo, completed: false})

        this.props.updateGroup(group)
        this.setState({newTodo: ""})

        Keyboard.dismiss();
    };


    

    renderTodo = (todo, index) => {
        return (
            <View style={styles.todoContainer}>
                <TouchableOpacity onPress={() => this.toggleTodoCompleted(index)}>
                    <Ionicons name={todo.completed ? "ios-square" : "ios-square-outline"} 
                    size={24} color="grey" style={{width: 32}}/>
                </TouchableOpacity>
                <Text style={[styles.todo, {textDecorationLine : todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? "grey" : "#103143"
                }
            ]}>{todo.title}</Text>
            </View>
        )
    }

    render() {
        const group = this.props.group;
        const taskCount = group.todos.length
        const completedCount = group.todos.filter(todo => todo.completed).length
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                <SafeAreaView style={styles.container}>
                    <TouchableOpacity style={{position: "absolute", top: 64, right: 32, zIndex: 10}}
                    onPress={this.props.closeModal}>
                        <Ionicons name="close" size={32} color="#11365F" />
                    </TouchableOpacity>

                    <View style={[styles.section, styles.header, {borderBottomColor: group.color}]}>
                        <View>
                            <Text style={styles.title}>{group.name}</Text>
                            <Text style={styles.taskCount}>{completedCount} of {taskCount} tasks</Text>
                        </View>
                    </View>
                    <View style={[styles.section, {flex: 3}]}>
                        <FlatList data={group.todos}
                        renderItem={({item, index}) => this.renderTodo(item, index)}
                        keyExtractor={(_, index) => index.toString()} 
                        contentContainerStyle={{paddingHorizontal: 32, paddingVertical: 64}}/>
                    </View>

                    <View style={[styles.section, styles.footer]} > 
                        <TextInput style={[styles.input, {borderColor: group.color}]} 
                        onChangeText={text => this.setState({newTodo: text})} 
                        value={this.state.newTodo}/>
                        <TouchableOpacity style={[styles.addTodo, {backgroundColor: group.color}]} onPress={() => this.addTodo()}>
                            <Ionicons name="add" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    todo: {
        
        fontFamily: "Futura-Medium",
        fontSize: 15
    },
    todoContainer: {
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    addTodo: {
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        justifyContent: "center"
    },
    input: {
        flex: 1,
        height: 48, 
        borderWidth: 1,
        borderRadius: 6,
        marginRight: 8,
        paddingHorizontal: 8,
        borderColor: "#95DBFB"
    },
    footer:{
        paddingHorizontal: 32,
        flexDirection: "row",
        alignItems: "center"
    },
    taskCount: {
        fontFamily: "Futura-Medium",
        fontSize: 17,
        marginTop: 4,
        marginBottom: 16, 
    },
    title:{
        fontFamily: "Futura",
        fontWeight: "bold",
        fontSize: 22,
        color: "#103143"
    },
    header:{
        justifyContent: "flex-end",
        marginLeft: 64, 
        borderBottomWidth: 3
    },
    section: {
        flex: 1,
        alignSelf: "stretch"
    },
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
    
})

export default TodoModal
