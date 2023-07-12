import React from 'react';
import { Text, StyleSheet,View ,TouchableOpacity,Image} from 'react-native';
import {useNavigation} from "@react-navigation/native"

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("course")}>
      <Image
      style={styles.iconStyle}
      source={{uri:"https://img.icons8.com/stickers/90/00000/training.png"}}
      />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("about")}>
      <Image
      style={styles.iconStyle}
      source={{uri:"https://img.icons8.com/stickers/100/00000/conference.png"}}
      />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("userdata")}>
      <Image
      style={styles.iconStyle}
      source={{uri:"https://img.icons8.com/stickers/90/00000/about.png"}}
      />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("contact")}>
      <Image
      style={styles.iconStyle}
      source={{uri:"https://img.icons8.com/stickers/90/00000/phone-office.png"}}
      />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  menuContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
  },
  textStyle:{
    textTransform:"uppercase",
  },
  iconStyle:{
    width:"100%",
    height:50,
    aspectRatio:1
  }
});

export default Menu;
