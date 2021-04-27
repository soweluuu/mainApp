import React from 'react'
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

const NewsComponent = ({item}) => {
    return (
        <View style={styles.cardView}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
            <Image style={styles.image} source= {{uri: item.urlToImage}} />
            <Text style={styles.description}>{item.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: 8.5,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title:{
        marginVertical: width*0.05,
        marginHorizontal: width *0.05,
        color: 'black',
        fontSize: 20,
        fontFamily: 'Futura',
        fontWeight: 'bold'
    },
    description: {
        
        marginVertical: width * 0.05,
        marginHorizontal: width* 0.02,
        color: 'gray',
        fontSize: 17
    },
    image: {
        
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize:13,
        color: 'gray'
    },
})

export default NewsComponent 