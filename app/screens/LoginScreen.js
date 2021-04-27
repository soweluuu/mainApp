import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity} from 'react-native';

import firebase from 'firebase';

export class LoginScreen extends Component {
   // constructor(props) {
   //     super(props);

     //   this.state = {
       //     email: " ",
         //   password: " " 
        //}
       // this.onSignUp = this.onSignUp.bind(this)
    //}

  //  onSignUp() {
    //    const {email, password} = this.state;
      //  firebase.auth().signInWithEmailAndPassword(email, password)
        //.then((result) => {
          //  firebase.firestore().collection("users")
            //    .doc(firebase.auth().currentUser.uid)
              //  .set({
                //    email,
                  //  password
               // })
            //console.log(result)
        //})
        //.catch((error) => {
          //  console.log(error)
        //})
    //}


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image  style={styles.logo} source={require('..//..//assets/main_logo_white.png')}/>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.textLogin}>Log in </Text>
                    <View style={styles.emailContainer}>
                        <Text style={styles.textUser}>Username </Text>
                        <TextInput 
                            style={styles.emailInput}
                            placeholder="email"
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </View>
                    <View style={styles.passwordContainer}>
                    <Text style={styles.textPassword}>Password </Text>
                        <TextInput 
                            style={styles.passwordInput}
                            placeholder="password"
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.onSignUp()} >
                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    buttonText:{
        fontFamily: "Futura-Medium",
        fontSize: 19,
        color: "white"
    },
    button:{
        backgroundColor: '#003662',
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginTop: 70
    },
    passwordInput:{
        borderWidth: 1,
        borderColor: '#103143',
        borderRadius: 15,
        width: "100%",
        height: 50,
    },
    emailInput:{
        borderWidth: 1,
        borderColor: '#103143',
        borderRadius: 15,
        width: "100%",
        height: 50,
    },
    textLogin:{
        color: '#103143',
        fontFamily: 'Futura',
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 40
    },
    textPassword:{
        color: '#103143',
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
    },
    textUser:{
        color: '#003662',
        fontFamily: 'Futura-CondensedMedium',
        fontSize: 16,
    },
    emailContainer:{
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 20
        
    },
    logo: {
        resizeMode: 'contain',
        height: 100,
        width: 300,
        marginBottom: 100
    },
    bottom:{
        width: "100%",
        height: "60%",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderTopStartRadius: 30,
        borderTopRightRadius: 30
    },
    top:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#003662', 
    }
})


export default LoginScreen;