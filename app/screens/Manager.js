import React, { Component } from 'react'
import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import NotificationComponent from "../components/NotificationComponent"
import temporaryData from "../temporaryData";


export class Manager extends Component {
    render() {
        return (
            <View  style={styles.background}>
            <FlatList 
                data={temporaryData}
                keyExtractor={item => item.name}
                renderItem={({item}) => 
                 <View><Text>Hello</Text></View> }/>
        </View>
                
        )
    }
}

const styles = StyleSheet.create({
    notifications:{
        marginTop: 60
    },
    NotificationsWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20
    },  

    textManager:{
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


export default Manager