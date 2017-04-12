/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import styles from '../Styles/Main';
 import USBoxList from './USBoxList';
 import {
   Text,
   View,
   NavigatorIOS,
 } from 'react-native';

 class USBox extends React.Component {
   render(){
     return(
      //  <View style={styles.loading}>
      //    <Text>Featured</Text>
      //  </View>
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title:'北美票房',
          component:USBoxList,
        }}
        shadowHidden={true}
        barTintColor="darkslateblue"
        titleTextColor="rgba(255,255,255,0.8)"
        tintColor="rgba(255,255,255,0.8)"
        translucent={false} //导航栏是否为半透明
      />
     );
   }
 }
 export {USBox as default };
