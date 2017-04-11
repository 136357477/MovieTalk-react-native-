/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import styles from '../Styles/Main';
 import {
   Text,
   View,
   Image,
   ListView,
   ActivityIndicator, //加载动画
   TouchableHighlight ,
 } from 'react-native';

 class MovieDetail extends React.Component {
   render(){
     return(
       <View style={styles.container}>
         <View style={styles.loading}>
           <Text>MovieDetail</Text>
         </View>
       </View>

     );
   }
 }
 export { MovieDetail as default };
