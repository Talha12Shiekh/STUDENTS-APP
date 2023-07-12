import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Menu from '../Components/Menu';

const Rerender = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image style={[styles.headerImage,{marginVertical:props.align?50:25}]} source={props.image} />
        <Text style={[styles.mainHeader,{
          fontSize: props.heading ? 20 : 45
        }]}>{props.welcomeText}</Text>
        <Text
          style={[
            styles.mainHeader,
            { fontSize: 24, color: '#4c5dab', marginTop: 5 },
          ]}>
          {props.extraData}
        </Text>
        <Text style={styles.paraStyle}>{props.description}</Text>
      </View>
      {props.showmenu ? (
        <View>
          <View style={styles.lineStyle}></View>
          <Menu />
          <View style={[styles.lineStyle, { marginTop: 20 }]}></View>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => props.showSlides(false)}
            style={styles.buttonStyle}>
            <Text style={styles.buttonText}>{props.buttonText}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#809fff',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom:35,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#eee',
    fontFamily: 'RobotoMono_500Medium',
    textTransform: 'capitalize',
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    objectFit: 'cover',
    display: 'flex',
    alignItems: 'stretch',
    borderRadius: 20,
    // marginVertical: props.align ? 50 : 25,
  },
  mainHeader: {
    // fontSize: 41,
    color: '#34405',
    textTransform: 'uppercase',
    marginBottom: 5,
    fontFamily: 'Nunito_700Bold',
  },
  paraStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 20,
    fontFamily: 'Nunito_600SemiBold',
  },
  lineStyle: {
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
});

export default Rerender;
