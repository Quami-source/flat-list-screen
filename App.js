import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,Image,
  ScrollView
}from 'react-native';



const dataItem = [
  {id:1, name:"Emmanuel", message:"At vero eos et accusamus et iusto odio..."},
  {id:2, name:"Quami",message:"Neque porro quisquam est..."},
  {id:3, name:"Nana", message:"Ut enim ad minima veniam..."},
  {id:4, name:"Amoako", message:"Hi"},
  {id:6, name:"BBeans", message:"Quis autem vel eum..."},
  {id:7, name:"Mr. Arku", message:"How was your trip"},
  {id:8, name:"Grace 2", message:"Hello"},
  {id:9, name:"My own", message:"Quis autem vel eum..."},
  {id:10, name:"Unknown", message:"Quis autem vel eum..."},
]

const App = ()=>{
  return(
    <View style={styles.container}>
      <View style={styles.headerText}>
        <Text style={{paddingLeft:20,color:"#fff",fontSize:25}}>WhatsApp</Text>
      </View>
      <View style={styles.list}>
        <View style={{padding:10}}>
          <FlatList
            data={dataItem}
            renderItem={
              ({item,message})=>{
                return(
                  <View style={{flexDirection:"row",padding:10}}>
                    <View style={{flex:1.4}}>
                      <Image source={require("./assets/image001.jpg")} style={{width:50,height:50,borderRadius:25}}/>

                    </View>
                    <View style={{flex:7,borderBottomWidth:0.3,borderBottomColor:"#ccc"}}>
                      <Text style={{paddingLeft:10,fontSize:19,}}>{item.name}</Text>
                      <Text style={{paddingLeft:10,fontSize:15,fontWeight:"300"}}>{item.message}</Text>
                    </View>
                    <View style={{flex:1.2,borderBottomWidth:0.3,borderBottomColor:"#ccc"}}>
                      <Text style={{color:"#7ED955", fontSize:12}}>1:50 PM</Text>
                      <View style={{backgroundColor:"#7ED955",borderRadius:25,width:20,height:20, alignSelf:"center", justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"#fff"}}>3</Text>
                      </View>
                    </View>
                  </View>
                )
              }
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:3,
  },
  headerText:{
    backgroundColor:"#2D7359",
    height:100,
    justifyContent:"center",
    borderBottomColor:"#252525",
    borderBottomWidth:0.3
  },
  text:{
    fontSize:25,
    color:"#fff",
    paddingLeft:20
  },
  listItems:{
    flexDirection:"row",
    padding:10,
    borderBottomColor:"#cccccc",
    borderBottomWidth:0.2
  },
  img:{
    flex:1,
    backgroundColor:"#000000"
  },
  list:{
    
    
  },
  time:{
    flex:1,
    backgroundColor:"#ACCA90"
  }
})

export default App;

