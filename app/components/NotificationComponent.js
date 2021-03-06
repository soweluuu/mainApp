import React from 'react';
import {View, Text, StyleSheet} from "react-native";


function NotificationComponent({notification}) {

    return (
            <View style={styles.groupContainer}> 
                <View style={styles.colorView}/>
                <View style={styles.textContainer}>
                    <Text style={styles.groupTitle} numberOfLines={1}>
                        Hello
                    </Text>
                    <Text style={styles.groupSubtitle}>
                         tasks
                    </Text>
                </View>
            </View>
        
    );
}
const styles = StyleSheet.create({
    groupSubtitle:{
        fontFamily: "Futura-Medium",
        fontSize: 13
    },
    textContainer:{
        flexDirection:"column",
        marginLeft: 10
    },
    colorView:{
        backgroundColor: "#11365F",
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
        backgroundColor: 'grey',
        width: "100%",
        height: 70,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row"
        
    }
})
export default NotificationComponent;