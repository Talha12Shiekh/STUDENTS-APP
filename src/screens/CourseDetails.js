import React from 'react';
import { View, Text,StyleSheet,Image ,TouchableOpacity} from 'react-native';
import CourseApi from "../api/CourseApi";

const CourseDetails = ({navigation,route}) => {
  const id = route.params.courseId;

  const selectedCourse = CourseApi.find((element) => {
    return id === element.id;
  })
 return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <Image
            style={styles.cardImage}
            source={selectedCourse.image}
            resizeMode="contain"
          />
          <Text style={styles.mainHeader}>{selectedCourse.title}</Text>
          <Text style={styles.description}>{selectedCourse.description}</Text>
          <Text style={styles.description}>{selectedCourse.course1}</Text>
          <Text style={styles.description}>{selectedCourse.course2}</Text>
          <Text style={styles.description}>{selectedCourse.course3}</Text>

          <View style={styles.buttonContainer}>
          <Text style={styles.price}>₹ {selectedCourse.price}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("course")}
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Join now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
};
const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.90)',
    textAlign: 'center',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: '#344055',
    textTransform: 'uppercase',
    // fontWeight:500,
    paddingBottom: 15,
    textAlign: 'center',
    fontFamily: 'RobotoMono_400Regular',
  },
  description: {
    textAlign: 'center',
    fontFamily: 'Nunito_700Bold',
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: '#7d7d7d',
    textTransform:"capitalize"
  },
  price:{
    backgroundColor:"rgba(0,0,0,.7)",
    paddingHorizontal: 18,
    color:"#fff",
    paddingVertical:10,
    borderRadius:5,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection:"row"
  },
  buttonStyle: {
    backgroundColor: '#809fff',
    paddingVertical:10,
    borderRadius:5,
    marginVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize:18,
    color:"#eee",
    fontFamily:"RobotoMono_500Medium",
    textTransform:"capitalize"
  }
});

export default CourseDetails;
