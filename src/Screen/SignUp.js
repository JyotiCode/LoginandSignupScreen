import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,Image
} from 'react-native';
import React from 'react';
//import backgroudblack from '../assest/backgroudblack'
import {form, head1, head2, input, input1, label, link, link2} from './formStyle';

const SignUp = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.container2}>

      </View>

      <View style={styles.container3}>
        <Text style={head1}>Create a new account</Text>
        <Text style={link2}>
          Already Resigter? &nbsp; <Text style={link}>Login here</Text>
        </Text>
<ScrollView>
        <View style={form}>
          <Text style={label}>Name</Text>
          <TextInput style={input} placeholder="Enter your Name" />
        </View>
        <View style={form}>
          <Text style={label}>Email</Text>
          <TextInput style={input} placeholder="Enter your Email" />
        </View>
        <View style={form}>
          <Text style={label}>DOB</Text>
          <TextInput style={input} placeholder="Enter your DOB" />
        </View>
        <View style={form}>
          <Text style={label}>address</Text>
          <TextInput style={input1 } placeholder="Enter your address" />
        </View>
        <View style={form}>
          <Text style={label}>Password</Text>
          <TextInput style={input} placeholder="enter your Password" />
        </View>
        <View style={form}>
          <Text style={label}>Confirm Password</Text>
          <TextInput
            style={input}
            placeholder="please confirm your password "
          />
        </View>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.txt1}>SignUp</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    display:'flex',
    width: '100%',
    width: '100%',
    backgroundColor:'black'
  },
  container2: {
    display:'flex',
    width: '100%',
    height: '10%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1: {
    fontSize: 30,
    color: '#fff',
  },
  txt2: {
    fontSize: 25,
    color: '#fff',
  },
  txt3: {
    fontSize: 18,
    color: '#fff',
  },

  container3: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    height: '90%',
    //borderRadius:30,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
   padding: 20,
   elevation:20
  },
  fb: {
    display: 'flex',
    // alignSelf:'flex-end',
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  btn1: {
    backgroundColor: '#F50057',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    minWidth: 180,
    marginTop: 20,
    borderRadius: 10,
  },
  txt1: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});
