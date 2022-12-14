import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import logo from '../assets/pesawat.png'
import user from '../assets/user.png'
import backbtn from '../assets/Arrow.png'

const Jadwal = [
  {
    id: '1',
    asal: 'Kualanamu',
    tujuan: 'Jakarta',
    maskapai: 'Sriwijaya Air',
    waktu : '10 Maret 2022, 08.00',

  },
  {
    id: '2',
    asal: 'Kualanamu',
    tujuan: 'Jakarta',
    maskapai: 'Lion Air',
    waktu : '10 Maret 2022, 10.00',
  },
  {
    id: '3',
    asal: 'Kualanamu',
    tujuan: 'Jakarta',
    maskapai: 'Pelita Air',
    waktu : '10 Maret 2022, 12.00',
  },
  {
    id: '4',
    asal: 'Kualanamu',
    tujuan: 'Jakarta',
    maskapai: 'Indonesia Air',
    waktu : '10 Maret 2022, 14.00',
  },
  {
    id: '5',
    asal: 'Kualanamu',
    tujuan: 'Jakarta',
    maskapai: 'Garuda Indonesia',
    waktu : '10 Maret 2022, 16.00',
  },
  {
    id: '6',
    asal: 'Kualanamu',
    tujuan: 'Jakarta',
    maskapai: 'Nusantara Air',
    waktu : '10 Maret 2022, 18.00',
  },
  {
    id: '7',
    asal: 'Kualanamu',
    tujuan: 'Jakarta',
    maskapai: 'Trigana Air Service',
    waktu : '10 Maret 2022, 20.00',
  },
  
];


const Penerbangan = ({ navigation }) => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.tujuanasal}>{item.asal}   -   {item.tujuan}</Text>
    <View style={styles.waktupesawat}>
      <img src={logo} alt="logo" style={styles.logo}/>
      <Text style={styles.maskapai}>{item.maskapai}</Text>
      <Text style={styles.texttanggal}>{item.waktu}</Text>
    </View>    
  </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
              <img src={backbtn} alt="back" style={styles.logo}/>
            </TouchableOpacity>
            <Text style={styles.heading}>Tiket Pesawat.id</Text>
            <img src={user} alt="user" style={styles.logo}/>
          </View>
          <Text style={styles.heading2}>Pencarian Jadwal</Text>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={Jadwal}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
      <Text style={styles.copyright}>Jhon Penator Sianturi - 120140138</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76FF03',
    marginTop: StatusBar.currentHeight || 0,
  },
  header:{
    width:'100%',
    backgroundColor: '#CFD8DC',
    padding:20,
    marginBottom:10,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontFamily: "Sans-Serif",
  },
  heading2: {
    fontFamily: "Sans-Serif",
    color: 'white',
    textAlign:'center',
  },
  top: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  img: {
    width:10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    marginLeft:-80,
    fontSize:20,
    fontWeight: "bold",
  },
  texttanggal:{
    color:'blue',
  },
  copyright: {
    color : '#797575',
    fontWeight: 'bold',
    marginBottom: '20px',
    padding:20,
    marginTop: '10px',
    textAlign: 'center',
  },
});

export default Penerbangan;