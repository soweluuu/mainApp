import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TouchableOpacity, onPress} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function ClientRectangleComponent(props) {
    const navigation = useNavigation();
    const {name, tagline} = props;

    return (
        <View style={styles.rectangle}>
            <View style={styles.rectLeft}>
               <Text style={styles.user}>
                 <Icon  name="user" size={25} color="#11365F" />
               </Text>
               <View>
                 <Text style={styles.name}>{name} </Text>
                   <View style={styles.clientIDwrapper}>
                     <Text style={styles.clientID}>Client ID:</Text>
                     <Text style={styles.clientIDno}> {tagline} </Text>
                   </View>
               </View>
            </View>

            <View style={styles.rectRight}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("Profile")}
                  >      
                  <Text style={styles.buttonText}> View profile </Text>
                </TouchableOpacity>
            </View>
          </View>
    );
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
})
export default ClientRectangleComponent;