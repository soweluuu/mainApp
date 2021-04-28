import React, { Component } from 'react'
import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import NotificationComponent from "../components/NotificationComponent"
import temporaryData from "../temporaryData";
import { BlurView } from 'expo-blur';
import NotificationModal from "../components/NotificationModal"

const DATA = [
    {
        notification: "Client update required",
        notId: '1',
        color: "#FF7171"
        
    },
    {
        notification: "Client update required",
        notId: '2',
        color: "#FF7171"
        
    },
    {
        notification: "Request worked",
        notId: '3',
        color: "#94C88C"
        
    },
    {
        notification: "Request worked",
        notId: '4',
        color: "#94C88C"
        
    },
    
]

export class Manager extends Component {
    
    render() {
        return (
            <View  style={styles.background}>
                
            <FlatList 
                 data={DATA}
                keyExtractor={item => item.notId}
                renderItem={({item}) => 
                    <View style={styles.notifContainer} > 
                        <View style={[styles.colorView, {backgroundColor: item.color }]}/>
                        <BlurView intensity={40} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                        <View style={styles.textContainer }>
                            <Text style={styles.notifTitle} numberOfLines={1}>
                                {item.notification}
                            </Text>
                           
                        </View>
                     </BlurView>
                    </View> 
            
            }/>
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
    notifTitle:{
        color: "#103143",
        fontFamily: "Futura-Medium",
        
        fontSize: 18
    },
    notifContainer:{
        backgroundColor: '#EFEFEF',
        width: "100%",
        height: 65,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        overflow: 'hidden',
        
        
    },
     
    
    background: {
        backgroundColor: '#FFFEFE',
        flex: 1, 
        padding: 20
    }
});


export default Manager