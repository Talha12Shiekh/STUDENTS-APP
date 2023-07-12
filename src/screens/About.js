import { Text, StyleSheet, View, Image, TouchableOpacity,Linking } from 'react-native';
import { Icon ,SocialIcon} from '@rneui/themed';

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Talha shiekh</Text>
      <Text style={styles.paraStyle}>I am a frontent developer </Text>
        <Image
          style={styles.imgStyle}
          source={require("../../assets/talha.png")}
          resizeMode="contain"
        />
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubheader}>About me</Text>
        <Text
          style={{ color: '#fff', textAlign: 'center', marginVertical: 10 ,fontFamily: 'Nunito_600SemiBold',}}>
           A passionable coder ,who loves to develop beautiful and amazing thing using code and amaze the people Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem  
        </Text>
      </View>

      <Text style={styles.iconsHeader}>Follow me on Social Networks</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.youtube.com/@shiekhpalace2401')}>
           <SocialIcon  type={"youtube"} key={1}/>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://csb-p1304f.netlify.app/')}>
           <SocialIcon  type={"angellist"} key={2}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.instagram.com/tlha_shkh/')}>
          <SocialIcon  type={"instagram"} key={3}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
    height:"100%",
    paddingVertical:30,
    paddingHorizontal:20,
    backgroundColor:"#fff"
  },
  imgStyle:{
    width:100,
    height:200,
    aspectRatio:1,
    position:"relative",
    top:20,
    zIndex:111,
  },
  mainHeader:{
    fontSize:38,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: "300",
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 10,
  },
  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    // paddingBottom: 30,
    fontFamily: 'Nunito_600SemiBold',
    textAlign:"center"
  },
  aboutLayout: {
    backgroundColor: '#4c5dab',
    paddingHorizontal: 30,
    marginVertical: 30,
  },

  aboutSubheader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: "500",
    fontFamily: 'Nunito_600SemiBold',
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius:50
  },
  iconsHeader:{
    fontSize:18,
    marginBottom:20
  },
  menuContainer: {
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconStyle: {
    width: '100%',
    aspectRatio: 1,
    height: 50,
  },
});

export default About;
