

import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, Button, FlatList} from 'react-native'
import NewsComponent from '../components/NewsComponent'
import newsApi from '../apis/newsApi'

const News= ({navigation}) => {
    const [news, setNews] = useState([])

    useEffect(()=>{
        getNewsFromAPI()
    },[])

    //const newsResponse= async() => {
    //    const response= await newAPI.get('top-headlines?country=us&apiKey=e775d6f87be043448be3b3ce9ba73f64')
    //    console.log(response.data)
    //}

    function getNewsFromAPI(){
        newsApi.get('top-headlines?country=us&apiKey=e775d6f87be043448be3b3ce9ba73f64')
        .then(async function(response){
            setNews(response.data);
            
        })
        .catch(function (error){
            console.log(error)
        })
    }

    if (!news) {
        return null
    }



    return (
        <View>
            <FlatList data={news.articles}
                    keyExtractor= {(item, index) => 'key' + index}
                    renderItem = {({item}) => {
                        return <NewsComponent item={item} />
                    }} />
            
        </View>
        
    )
}

export default News