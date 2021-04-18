import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

function ClientPortfolioCard(props) {

    const {portfolioID, clientID, value, initValue, type, feeCode} = props;

    return (
        <View style={styles.rectangle}>
            <LinearGradient
             colors={['rgba(0,0,0,0.01)', 'transparent']}
             start={[0.1, 0.4]}
             end={[0.8, 0.9]}
             style={styles.gradient}
            >
            <View style={styles.idWrapper}>
                <View style={styles.portfolioWrapper}>
            <Text style={styles.briefcase}>
                 <Icon  name="briefcase" size={25} color="#11365F" />
               </Text>
                <View style={styles.portfolio}>
                    <Text style={styles.portfolioText}> Portfolio ID: </Text>
                    <Text style={styles.portfolioText}> {portfolioID} </Text>
                </View>
                </View>
                <View style={styles.client}>
                    <Text style={styles.clientText}> Client ID: </Text>
                    <Text style={styles.clientText}> {clientID} </Text>
                </View>
            </View>
            <View style={styles.portStatus}>
                <Text style={styles.statusText}> Open </Text>
            </View>
            <View style={styles.valueWrapper}>
                <Text style={styles.valueText}>Value:</Text>
                <View style={styles.valueContainer}>
                    <Text style={styles.valueText}>{value}</Text>
                </View>
            </View>
            <View style={styles.initValueWrapper}>
                <Text style={styles.initValueText}>Initial value:</Text>
                <Text style={styles.initValueText}> {initValue}</Text>
            </View>
            <View style={styles.typeWrapper}>
                <Text style={styles.typeText}>Type:</Text>
                <View style={styles.typeContainer}>
                    <Text style={styles.typeTextTwo}>{type}</Text>
                </View>
            </View>
            <View style={styles.feeWrapper}>
                <Text style={styles.typeText}>Fee code:</Text>
                <View style={styles.feeContainer}>
                    <Text style={styles.typeTextTwo}>{feeCode}</Text>
                </View>
            </View>
            </LinearGradient>
        </View>
    
    )
}
const styles = StyleSheet.create({
    portfolioWrapper:{
        flexDirection: "row",
        alignItems: 'center'
    },
    gradient:{
        backgroundColor: '#EBEBEB',
        padding: 15,
        borderRadius: 15,
    },
    feeWrapper:{
        flexDirection: "row",
        alignItems: "baseline",
        marginBottom: 30
        
    },
    feeContainer:{
        backgroundColor: "#95DBFB",
        borderRadius: 8,
        width: 50,
        justifyContent: 'center',
        alignItems: "center",
        marginLeft: 5
    }, 
    typeTextTwo:{
        color: "#FFFFFF",
        fontFamily: "Futura-Medium",
        fontSize: 10,
        
    },
    typeContainer:{
        backgroundColor: "#95DBFB",
        borderRadius: 8,
        width: 50,
        justifyContent: 'center',
        alignItems: "center",
        marginLeft: 30
    },
    typeText:{
        color: "#103143",
        fontFamily: "Futura-Medium",
        fontSize: 12,
        opacity: 0.75
    },
    typeWrapper:{
        flexDirection: "row",
        alignItems: "baseline",
        marginTop: 15
    },
    initValueText:{
        color: "#103143",
        fontFamily: "Futura-Medium",
        fontSize: 15
    },
    initValueWrapper:{
        flexDirection: 'row'
    },
    valueText:{
        color: "#103143",
        fontFamily: "Futura",
        fontWeight: "bold",
        fontSize: 18
    },
    valueContainer:{
        borderWidth: 1,
        borderRadius: 15,
        marginLeft: 'auto',
        padding: 5
    },
    valueWrapper:{
        flexDirection: "row",
        alignItems: 'baseline',
        marginTop: 20
    },
    statusText:{
        color: "#FFFFFF",
        fontFamily: "Futura-Medium",
        fontSize: 10,
        
    },
    portStatus:{
        backgroundColor: "#95DBFB",
        width: 62,
        height: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end"
    }, 
    clientText:{
        color: "#103143",
        fontFamily: "Futura-Medium",
        opacity: 0.75,
        fontSize: 12
    },
    portfolioText:{
        color: "#103143",
        fontFamily: "Futura-Medium",
        
        fontSize: 14
    },
    client:{
        flexDirection: "row",
        marginLeft: "auto"
    },
    portfolio:{
        flexDirection: "column",
        marginLeft: 10
    },
    idWrapper:{
        flexDirection: "row"
    },
    rectangle:{
        backgroundColor: 'white',
        shadowOffset: { height: 5},
        shadowOpacity: 0.3,
        borderRadius: 15,
        
    }
})
export default ClientPortfolioCard;