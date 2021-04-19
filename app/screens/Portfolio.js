import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ClientPortfolioCard from "../components/ClientPortfolioCard";
import Icon from 'react-native-vector-icons/FontAwesome';


export class Portfolio extends Component {
    render() {
        return (
            <View style={styles.background}>
                <View style={styles.anotherPortfolioCont}>
                    <TouchableOpacity style={styles.anotherPortfolio}>
                        <Text style={{fontFamily: 'Futura-Medium', fontSize: 15, color: "#103143", marginRight: 5, marginTop: 2}}>
                            Portfolio 2</Text>
                        <Icon  name="angle-right" size={30} color="#11365F" />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardWrapper}>
                
                    <ClientPortfolioCard portfolioID={'615081-1'} clientID={'615081'} value={'66.996.000£'}
                    initValue={'66.995.445£'} type={'EXE'} feeCode={'A2'}
                    />
                    <Text style={styles.securitiesText}>Securities</Text>
                    <Text style={styles.tradingText}>Trading activity</Text>
                </View>
           </View>
        );
    }
}
    const styles = StyleSheet.create({
        anotherPortfolioCont:{
            width: "100%",
            alignItems: "flex-end",
            paddingHorizontal: 20,
            paddingTop: 5
        },
        anotherPortfolio:{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        tradingText:{
            color: '#11365F',
            fontFamily: 'Futura',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 150
        },
        securitiesText:{
            color: '#103143',
            fontFamily: 'Futura',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 20
        },
        textProfile:{
            color: '#103143',
            fontFamily: 'Futura',
            fontWeight: 'bold',
            fontSize: 22,
            marginBottom: 70
        },
        cardWrapper:{
            paddingTop: 15,
            paddingHorizontal: 20
        },
        background:{
            backgroundColor:  '#FFFEFE',
            flex: 1
        }
    })
    
    export default Portfolio