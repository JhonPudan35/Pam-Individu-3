import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View,TextInput } from 'react-native';

import user from '../assets/user.png'
import hamburger from '../assets/hamburger.png'
import takeoff from '../assets/Takeoff.png'
import landing from '../assets/Landing.png'
import date from '../assets/Date.png'

const Home = ({ navigation }) => {
  const [keberangkatan, setKeberangkatan] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [tanggal, setTanggal] = useState("");
  

    return(
        <View style={styles.container}>
            <View style={styles.top}>
              <img src={hamburger} alt="hamburger" />
              <Text style={styles.header}>Tiket Pesawat.id</Text>
              <img src={user} alt="user" />
            </View>
            
            <View style={styles.card}>
              <Text style={styles.header2}>Bandara Keberangkatan</Text>
              <View style={styles.maininputan}>
                <img src={takeoff} alt="takeoff" />
                <TextInput
                  style={styles.input}
                  onChangeText={setKeberangkatan}
                  value={keberangkatan}
                  placeholder="Nama Bandara Keberangkatan"
                  selectTextOnFocus={false}
                />
              </View>
              <Text style={styles.header2}>Bandara Tujuan</Text>
              <View style={styles.maininputan}>
                <img src={landing} alt="mendarat" />
                <TextInput
                  style={styles.input}
                  onChangeText={setTujuan}
                  value={tujuan}
                  placeholder="Bandara Tujuan"
                />
              </View>
              <Text style={styles.header2}>Jadwal Penerbangan</Text>
                <View style={styles.maininputan}>
                  <img src={date} alt="date" />
                  <TextInput
                    style={styles.input}
                    onChangeText={setTanggal}
                    value={tanggal}
                    placeholder="Jadwal Penerbangan"
                  />
                </View>
              <Button
                color= '#03A9F4'
                title="search"
                onPress={() => navigation.navigate('Penerbangan')}
              />
            </View>
            
            <View style={styles.kotak}>
              <Text style={styles.copyright}>Jhon Penator Sianturi - 120140138</Text>
            </View>
            
    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1DE9B6',
    overflow : "hidden",
  },
  top: {
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between'
  },
  maininputan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:20,
    marginTop:5,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
    borderColor: '#E5E5E5',
    
  },
  header: {
    textAlign: 'right',
    color: '#A1887F',
    fontSize: 30,
    fontFamily: "Sans-Serif",
  },
  header2: {
    fontFamily: "Sans-Serif",
    fontSize: 20,
    color: '#607D8B',
  },
  card: {
    backgroundColor: 'white',
    margin: 20,
    width: '80%',
    padding:20,
    borderRadius:10,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius:3,
  },
  kotak: {
    marginTop: '-360px',
    zIndex: -1,
    flex:1,
    borderRadius:10,
    backgroundColor: '#F1F1F1',
  },
  copyright: {
    color : '#90A4AE',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 30,
    marginTop: 'auto',
    textAlign: 'center',
  }
});

export default Home;