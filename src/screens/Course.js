import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import CourseApi from "../api/CourseApi";

const Course = ({ navigation }) => {
  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <Image
            style={styles.cardImage}
            source={item.image}
            resizeMode="cover"
          />
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("coursedetails",{
                courseId:item.id
              })}
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}> Course details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CourseApi}
      renderItem={courseCard}
    />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom:15
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
    textAlign: 'justify',
    fontFamily: 'Nunito_700Bold',
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: '#7d7d7d',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

export default Course;
