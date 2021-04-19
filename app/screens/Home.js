import React, { Component } from 'react'
import {Text, View, FlatList} from 'react-native';

import { getNews } from '../components/news';
import Article from '../components/Article';
import "firebase/auth"



export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { articles: [], refreshing: true };
        this.fetchNews = this.fetchNews.bind(this);
      }
      // Called after a component is mounted
      componentDidMount() {
        this.fetchNews();
       }
    
      fetchNews() {
        getNews()
          .then(articles => this.setState({ articles, refreshing: false }))
          .catch(() => this.setState({ refreshing: false }));
      }
    
      handleRefresh() {
        this.setState(
          {
            refreshing: true
        },
          () => this.fetchNews()
        );
      }
    
    render() {
        return (
          <View>
            
            <FlatList
            data={this.state.articles}
            renderItem={({ item }) => <Article article={item} />}
            keyExtractor={item => item.url}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh.bind(this)}
          />
          </View>
            
                
        )
    }
}

export default Home
