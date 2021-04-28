import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, onPress, ScrollView, FlatList} from 'react-native';
import ClientRectangleComponent from '../components/ClientRectangleComponent';
import {Profile} from './Profile'



import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
    {
        clientName: "Li Lin",
        clientID: '615081'
    },
    {
        clientName: "Utemaro Watasi",
        clientID: '615082'
    },
    {
        clientName: "Hernandez Ximena",
        clientID: '615083'
    },
    {
        clientName: "Montandon Rachael",
        clientID: '615084'
    },
    {
        clientName: "Stager Isabelle",
        clientID: '615085'
    },
    {
        clientName: "Surbeck Peter",
        clientID: '615086'
    },
    {
        clientName: "Juric Jan",
        clientID: '615087'
    },
    {
        clientName: "Travers Millard",
        clientID: '615088'
    },
    {
        clientName: "Name Name",
        clientID: '615089'
    }
]

export class ClientsList extends Component {

    state = {
        clientList: []
    }

    

    render() {
    return (
        <View  style={styles.background}>
            
             <View style={styles.clientsWrapper}>
                <Text style={styles.textClients}> Clients </Text>
                <View style={styles.clients}> 
                    <FlatList 
                        data={DATA}
                        keyExtractor={item => item.clientName}
                        renderItem={({item}) => 
                        <View style={styles.rectangle}>
                        <View style={styles.rectLeft}>
                           <Text style={styles.user}>
                             <Icon  name="user" size={25} color="#11365F" />
                           </Text>
                           <View>
                             <Text style={styles.name}>{item.clientName} </Text>
                               <View style={styles.clientIDwrapper}>
                                 <Text style={styles.clientID}>Client ID:</Text>
                                 <Text style={styles.clientIDno}> {item.clientID} </Text>
                               </View>
                           </View>
                        </View>
            
                        <View style={styles.rectRight}>
                            <TouchableOpacity
                              style={styles.button}
                              onPress={() => this.props.navigation.navigate(Profile)}
                              >      
                              <Text style={styles.buttonText}> View profile </Text>
                            </TouchableOpacity>
                        </View>
                      </View>
                        }
                    />


                </View>
             </View>
        
        </View>
    );
  }
}

const styles = StyleSheet.create({
    clientIDwrapper:{
        flexDirection: "row"
    },
    user:{
        marginRight: 15
    },
   
    rectLeft:{
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
        
    },
    buttonText:{
        color: "#FFFFFF",
        fontFamily: "Futura-Medium",
        fontSize: 10
    },
    button:{
        backgroundColor: "#11365F",
        width: 75,
        height: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
        
    },
    clientIDno:{
        color: "#103143",
        fontFamily: "Futura-Medium",
        opacity: 0.75,
        fontSize: 11
    },
    clientID:{
        color: "#103143",
        fontFamily: "Futura-Medium",
        opacity: 0.75,
        fontSize: 11
        
    },
    name:{
        color: "#103143",
        fontFamily: "Futura",
        fontWeight: "bold",
        fontSize: 16,
        
       
    },
    
    
    rectangle:{
        backgroundColor: '#FFFFFF',
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#95DBFB",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 20,
        
       
        
    },
    clients:{
        marginTop: 60
    },
    clientsWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20
    },  

    textClients:{
        color: '#103143',
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 22,
        
        
    },
    background: {
        backgroundColor: '#FFFEFE',
        flex: 1, 
        
        

        
    }
});

export default ClientsList