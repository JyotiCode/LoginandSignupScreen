import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {form, head1, head2, input, label, link, link2} from './formStyle';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.txt1}>Welcome To</Text>
        <Text style={styles.txt2}> FLOWER SHOP APP</Text>
        <Text style={styles.txt3}>buying and selling online</Text>
      </View>
      <View style={styles.container3}>
        <Text style={head1}>Login</Text>
        <Text style={head2}>Sign in to continue</Text>
        <View style={form}>
          <Text style={label}>Email</Text>
          <TextInput style={input} placeholder="Enter your Name" />
        </View>
        <View style={form}>
          <Text style={label}>Password</Text>
          <TextInput style={input} placeholder="enter your Password" />
        </View>
        <View style={styles.fp}>
          <Text style={link}> forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.txt1}>Login</Text>
        </TouchableOpacity>
        <Text style={link2}>
          Don't have an account? <Text onPress={()=>navigation.navigate('SignUp')} style={link}> create a new account</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  container2: {
    flex: 1,
    width: '100%',
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1: {
    fontSize: 10,
    color: '#fff',
    padding: 10,
  },
  txt2: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },
  txt3: {
    fontSize: 12,
    color: 'grey',
  },

  container3: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    height: '70%',
    borderRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    elevation: 20,
  },
  fp: {
    display: 'flex',
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
