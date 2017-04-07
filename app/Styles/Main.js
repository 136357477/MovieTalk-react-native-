
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

let styles = StyleSheet.create({
  item:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'rgba(100,53,201,0.1)',
    paddingBottom:6,
    marginBottom:6,
    flex:1,
  },
  itemContent:{
    flex:1,
    marginLeft:13,
    marginTop:6,
  },
  itemHeader:{
    fontSize:18,
    fontFamily:'Helvetica Neue',
    fontWeight:'300',
    color:'#6435c9',
  },
  itemMeta:{
    fontSize:16,
    color:'rgba(0,0,0,0.3)',
    marginBottom:6,
  },
  redText:{
    color:'#db2828',
    fontSize:15,
  },
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  overlay:{
    backgroundColor:'rgba(0,0,0,0.3)',
    alignItems:'center',
  },
  overlayHeader:{
    fontSize:33,
    fontFamily:'Helvetica Neue',
    fontWeight:'200',
    color:'#eae7ff',
    padding:10,
  },
  overlaySubHeader:{
    fontSize:16,
    fontFamily:'Helvetica Neue',
    fontWeight:'200',
    color:'#eae7ff',
    padding:10,
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover', //包含contain , 拉伸stretch ,cover
  },
  image:{
    width:99,
    height:128,
    margin:6,
  },
  container:{
    flexDirection:'row',
    backgroundColor:'#eae7ff',
    flex:1,
    paddingTop:23,
  },
  itemText:{
    fontSize:33,
    fontFamily:'Helvetica Neue',
    fontWeight: '200',
    color:'#6435c9',
    padding:30
  },
});

export { styles as default };
