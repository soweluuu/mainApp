import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ClientPortfolioCard from "../components/ClientPortfolioCard";


export class Portfolio extends Component {
    render() {
        return (
            <View style={styles.background}>
                
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
        tradingText:{
            color: '#103143',
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
            paddingTop: 50,
            paddingHorizontal: 20
        },
        background:{
            backgroundColor:  '#FFFEFE',
            flex: 1
        }
    })
    
    export default Portfolio