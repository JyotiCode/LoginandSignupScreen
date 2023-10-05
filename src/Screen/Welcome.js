import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Welcome To App</Text>
      <Text style={styles.logo}> FLOWER SHOP</Text>
      
          <TouchableOpacity style={styles.btn1} onPress={()=>navigation.navigate('Login')}>
               <Text style={styles.txt1}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={()=>navigation.navigate('SignUp')}>
               <Text style={styles.txt2}>Signup</Text>
          </TouchableOpacity>
      
      
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
     container:{
          display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor:'black',
          marginBottom: 50,
     },
     txt:{
          fontSize:30,
          color:'#fff'
     },
     btn1:{
         backgroundColor:'#F50057',
         color:'#fff',
         padding:10,
         borderRadius:5,
         minWidth:180,
        marginTop:20,
     },
     btn2:{
          backgroundColor:'#F50057',
          color:'#fff',
          padding:10,
          borderRadius:5,
          minWidth:180,
          marginTop:15,
      },

     txt1:{
          color:'#fff',
         textAlign:'center',
         fontSize:20
     },
     txt2:{
          color:'#fff',
         textAlign:'center',
         fontSize:20
     },
     logo: {
          fontSize: 25,
          color: 'green',
          fontWeight:'bold'
     }
     
})