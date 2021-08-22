/**
 * Sample React Native LoginScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
 import InputTextField from '../components/InputTextField';
 
 
 const LoginScreen = ({ navigation }) => {

    const pressHandler = () => {
        // navigation.navigate('Home');
        navigation.push('Home');
    }

    

   return (
       <ScrollView >
         <View style={styles.container}>
           <View style={{paddingTop: 0, alignItems: 'center', justifyContent: 'flex-end', height: (Dimensions.get("window").height / 3.5),}}>
             <Image source={require('../assets/undraw_apartment_rent_o0ut.png')} style={{ width: "60%", height: (Dimensions.get("window").height / 5)}}/>
             <Text style={[styles.text, {marginTop: 5, fontSize: 22, fontWeight: "500"}]}>Immosoft®</Text>
           </View>
           <View style={{minHeight: (Dimensions.get("window").height - (Dimensions.get("window").height / 3.5)), justifyContent: 'center'}}>
             <View style={{}}>
             {/* <View style={{borderColor: "grey", borderWidth: 1,}}> */}
               <Text style={{marginTop: 20, marginBottom: 30, fontSize: 30, fontWeight: "600", textAlign: "center"}}>Connexion</Text>
 
               <View style={{marginTop: 0, flexDirection: 'row', justifyContent: 'center'}}>
                 <TouchableOpacity>
                   <View style={styles.spcialBtn}>
                     <Image source={require('../assets/icons8-facebook-96.png')} style={{width: 22, height: 22}}/>
                     <Text style={{marginTop: 3, marginLeft: 5}}>Facebook</Text>
                   </View>
                 </TouchableOpacity>
                 <TouchableOpacity>
                   <View style={styles.spcialBtn}>
                     <Image source={require('../assets/icons8-google-96.png')} style={{width: 22, height: 22}}/>
                     <Text style={{marginTop: 3, marginLeft: 5}}>Google</Text>
                   </View>
                 </TouchableOpacity>
               </View>
 
               <Text style={[styles.text, {color: "#ABB4BD", fontSize: 18, textAlign: 'center', marginVertical: "5%"}]}>or</Text>
 
               <InputTextField title="E-mail" placeholder="" isSecure={false}></InputTextField>
               <InputTextField style={{marginTop: "7%", marginBottom: "7%"}} title="Mot de passe" placeholder="" isSecure={true}></InputTextField>
 
               <Text style={[styles.text, styles.link, {textAlign: "right"}]}>Mot de passe oublié ?</Text>
 
               <TouchableOpacity style={styles.submitBtn} onPress={pressHandler}>
                 <Text style={[styles.text, {fontWeight: "600", color: "#fff", fontSize: 17}]}>Se Connecter</Text>
               </TouchableOpacity>
 
               <Text style={[styles.text, {fontSize: 15, color: "#ABB4BD", textAlign: "center", marginTop: 30, }]}>
                 Vous n'avez pas de compte ? <Text style={[styles.text, styles.link]}> Crée un Compte</Text>
               </Text>
             </View>
           </View>
         </View>
       </ScrollView>
   );
 };
 
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
     paddingHorizontal: 30,
     minHeight: "100%",
   },
   text: {
     fontFamily: "Avenir next",
     color: "#1D2029",
   },
   spcialBtn: {
     flexDirection: 'row',
     marginHorizontal: 12,
     paddingVertical: 10,
     paddingHorizontal: 35,
     borderWidth: StyleSheet.hairlineWidth,
     borderColor: "rgba(171, 180, 189, 0.65)",
     borderRadius: 6,
     backgroundColor: "#ffffff",
     shadowColor: "rgba(171, 180, 189, 0.35)",
     shadowOffset: {width: 0, height: 10},
     shadowOpacity: 1,
     shadowRadius: 20,
     elevation: 5
   },
   link:{
     fontSize: 15,
     color: "#FF1654",
     fontWeight: "500", 
   },
   submitBtn: {
     backgroundColor: "#FF1654",
     fontSize: 16,
     borderRadius: 6,
     paddingVertical: 12,
     marginTop: 32,
     alignItems: "center",
     justifyContent: "center",
     shadowColor: "rgba(255, 22, 84, 0.24)",
     shadowOffset: {width: 0, height: 9},
     shadowOpacity: 1,
     shadowRadius: 20,
   }
 })
 
 export default LoginScreen;