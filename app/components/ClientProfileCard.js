import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, Text, Image, TouchableOpacity, onPress } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

function ClientProfileCard(props) {

    const {name, tagline, nationality, phoneNo, dateOfBirth, email} = props;

    return (
        <View style={styles.rectangle}>
           
               <LinearGradient
               colors={['rgba(0,0,0,0.01)', 'transparent']}
               start={[0.1, 0.4]}
               end={[0.8, 0.9]}
               style={styles.gradient}
               >
            <View style={styles.zhopa}>
            <View style={styles.rectTop}>
               <Text style={styles.user}>
                 <Icon  name="user" size={25} color="#11365F" />
               </Text>
              <View style={styles.names}>
               <Text style={styles.name}>{name} </Text>
                <View style={styles.tagsStyle}>
                 <Text style={styles.tagline}> Client ID: </Text>
                 <Text style={styles.tagline}> {tagline} </Text>
                </View>
               </View>         
            </View>
            <View style={styles.buttonContainer}>
                 <TouchableOpacity
                     style={styles.button}>      
                     <Text style={styles.buttonText}> Active </Text>
                   </TouchableOpacity>
            </View>
            </View>

           
            <View style={styles.rectBottom}>
              <View style={styles.dobText}>
                <Text style={styles.details}> Date of Birth:</Text>
                <Text style={styles.mainText}> {dateOfBirth}</Text>
              </View>
              <View style={styles.natText}>
                <Text style={styles.details}> Nationality: </Text>
                <Text style={styles.mainText}> {nationality} </Text>
              </View>
              <View style={styles.phoneText}>
                <Text style={styles.details}> Phone Number:</Text>
                <Text style={styles.mainText}> {phoneNo} </Text>
              </View>
              <View style={styles.mailText}>
                <Text style={styles.details}> Preferred e-mail: </Text>
                <Text style={styles.mainText}> {email} </Text>
              </View>
            </View>
            </LinearGradient>
            
          </View>
    );
}
const styles = StyleSheet.create({
    gradient:{
        backgroundColor: '#EBEBEB',
        padding: 15,
        borderRadius: 15,
        
    },
    zhopa:{
        width: '100%',
        flexDirection: "row",
        
    },

    buttonContainer:{
        marginLeft: "auto",
    },
    buttonText:{
        color: "#FFFFFF",
        fontFamily: "Futura-Medium",
        fontSize: 10
    },
    button:{
        backgroundColor: "#95DBFB",
        width: 75,
        height: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
        
    },
    tagsStyle:{
        flexDirection: "row",
    },
    mailText:{
        flexDirection: "row",
        alignItems: "baseline",
        paddingBottom: 5
    },
    phoneText:{
        flexDirection: "row",
        alignItems: "baseline",
        paddingBottom: 10
    },
    natText:{
        flexDirection: "row",
        alignItems: "baseline",
        paddingBottom: 20
    },
    mainText:{
        color: "#103143",
        fontFamily: "Futura-CondensedExtraBold",
        fontSize: 15
    },
    dobText:{
        flexDirection: "row",
        alignItems: "baseline",
        paddingBottom: 10
    },
    user:{
        paddingRight: 10
    },
    tagline:{
        color: "#103143",
        fontFamily: "Futura-Medium",
        opacity: 0.75,
        fontSize: 11
    },
    rectTop:{
        
        justifyContent: "flex-start",
        flexWrap: "wrap",
        flexDirection: "row",
        paddingBottom: 40,
        alignItems: "center"
    },
    rectBottom:{
        
        alignItems: "flex-start",
        flexWrap: "wrap",
        justifyContent: 'center'
    }, 
    name: {
        color: "#103143",
        fontFamily: "Futura",
        fontWeight: "bold",
        fontSize: 18,
    },
    rectangle: {
        
        borderRadius: 15,
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        marginBottom: 20,
        flexDirection: "column",
        shadowOffset: { height: 5},
        shadowOpacity: 0.3
    },
})

export default ClientProfileCard;
