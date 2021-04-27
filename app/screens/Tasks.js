import React, { Component } from 'react'
import {Text, View, StyleSheet, Modal} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

import GroupComponent from "../components/GroupComponent";
import tempData from "../tempData";
import AddGroupModal from "../components/AddGroupModal";


import Fire from "../Fire";
import firebase from 'firebase';

export class Tasks extends Component {
    state = {
        addGroupVisible: false,
        groups: [],
        loading: true,
        user: {}
    };

    componentDidMount() {
        firebase = new Fire((error, user) => {
          if (error) {
            return alert("Uh oh, something went wrong")
          }

          firebase.getGroups(groups => {
              this.setState({groups, user}, () => {
                this.setState({loading: false})
              })
          })

          this.setState({ user });
        });
      }


      componentWillUnmount() {
          firebase.detach();
      }


    toggleAddGroupModal(){
        this.setState({addGroupVisible: !this.state.addGroupVisible})
    }
    renderGroup = group => {
        return <GroupComponent group={group} updateGroup={this.updateGroup}/>
    }

    addGroup = group => {
        this.setState({groups: [...this.state.groups, {...group, id: this.state.groups.length + 1, todos: [] }] });
    };

    updateGroup = group => {
        this.setState({
            groups: this.state.groups.map(item => {
                return item.id === group.id ? group : item
            })
        })
    };

   

    render() {
        return (
            <View style={styles.background}>
                <Modal animationType="slide" 
                visible={this.state.addGroupVisible} 
                onRequestClose={() => this.toggleAddGroupModal()}>
                    <AddGroupModal closeModal={() => this.toggleAddGroupModal()} addGroup={this.addGroup} /> 
                </Modal>
                <View>
                    <Text>user: {this.state.user.uid}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => this.toggleAddGroupModal()}>
                    <Ionicons name="md-add-outline" size={32} color="white" />
                    <Text style={styles.buttonText}>Create new group</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.groupsContainer}>
                    <FlatList 
                        data={this.state.groups}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => 
                            this.renderGroup(item) }
                        keyboardShouldPersistTaps="always"
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
export default Tasks;