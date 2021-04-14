import React, {Component} from 'react';
import { useState } from "react";

import { View, StyleSheet, Text, Image, TouchableOpacity, onPress, SafeAreaView, Modal, Pressable} from 'react-native';
import ClientProfileCard from "../components/ClientProfileCard"

export class Profile extends Component {
    state = {
        modalVisible: false,
     }
     toggleModal(visible) {
        this.setState({ modalVisible: visible });
     }
    
    
    render() {
        
        return (
            <View style={styles.background}>

          <View style={styles.cardWrapper}>
             <View>
              <ClientProfileCard name={'Li Lin'} tagline={680100} 
                  nationality={'Chinese'} phoneNo={'00111122'} 
                  dateOfBirth={'01.01.2020'}
                  email={'li.lin@gmail.com'} />
             </View>
           </View>
           
           <View style={styles.centeredView}>
           <Modal 
                animationType = {"slide"} transparent = {false}
                visible = {this.state.modalVisible}
                onRequestClose = {() => { console.log("Modal has been closed.") } }
                 >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={styles.buttonModal}
                            onPress = {() => {
                                this.toggleModal(!this.state.modalVisible)}}>
                            <Text style={styles.textStyle}>Hide</Text>    
                        </Pressable>
                    </View>
                </View>

                </Modal>

           </View>

           <View style={styles.cardsWrapper}> 
              <View style={styles.infoCard}>
                 <Text style={styles.information}>
                     More information
                 </Text>
                 <TouchableOpacity
                  style={styles.button}
                  onClick={this.onClickButton}
                  >      
                  <Text style={styles.buttonText}> View </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.filesCard}>
                 <Text style={styles.information}>
                     Files and notes
                 </Text>
                 <TouchableOpacity
                  style={styles.button}
                  onPress = {() => {this.toggleModal(true)}}
                  >      
                  <Text style={styles.buttonText}> View </Text>
                </TouchableOpacity>
              </View>

            </View>

        </View>
                
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: "white",
        
        fontFamily: "Futura-Medium",
        fontSize: 10
        
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
    buttonModal: {
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        elevation: 2,
        backgroundColor: "#11365F",
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    modalView: {
        marginTop: 200,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },    
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
      },
    buttonText:{
        color: "#FFFFFF",
        fontFamily: "Futura-Medium",
        fontSize: 10
    },
    button:{
        backgroundColor: "#11365F",
        width: 60,
        height: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#FFFFFF",
        marginLeft: "auto",
        
    },
    filesCard:{
        backgroundColor: '#11365F',
        width: '100%',
        borderRadius: 15,
        height: 60,
        marginTop: 20,
        flexDirection: "row",
        alignItems: 'center',
        padding: 20
    },
    cardsWrapper:{
        padding: 20,
        
    },
    infoCard:{
        backgroundColor: '#11365F',
        width: '100%',
        borderRadius: 15,
        alignItems: "center",
        height: 60,
        flexDirection: "row",
        padding: 20
       
    },
    information:{
        color: '#FFFFFF',
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 17,
        
    },
    textProfile:{
        color: '#103143',
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 20
    },
    cardWrapper:{
        paddingTop: 20,
        paddingHorizontal: 20
    },
    background:{
        backgroundColor:  '#FFFEFE',
        flex: 1,
       
    }
})

export default Profile