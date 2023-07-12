import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';

const UserData = () => {
  const [response, setresponse] = useState([]);
  const [loaded, setloaded] = useState(true);
  const getUserData = async () => {
    try {
      const data = await fetch(
        'https://thapatechnical.github.io/userapi/users.json'
      );
      const response = await data.json();
      setresponse(response);
      setloaded(false);
    } catch (error) {
      setloaded(false);
      console.log(error);
    }
  };

  const showUserData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.image }} />
        </View>
        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}>Bio-Data</Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `${item.id}`}
            </Text>
          </View>

          <View style={styles.mainContent}>
            <Text style={styles.MyName}>Name : {item.name}</Text>
            <Text style={styles.MyName}>Email : {item.email}</Text>
            <Text style={styles.MyName}>Mobile : {item.mobile}</Text>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View>
      {loaded ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.mainHeader}>UserData</Text>
            <FlatList
              data={response}
              renderItem={showUserData}
              contentContainerStyle={{ paddingBottom: 125 }}
              ItemSeparatorComponent={() => (
                <View style={{ height: 20, marginVertical: 55 }} />
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#353535',
    paddingVertical: 10,
    paddingHorizontal: 6,
    fontFamily: 'RobotoMono_400Regular',
  },
  bioData: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'RobotoMono_400Regular',
  },
  idNumber: {
    fontSize: 20,
    backgroundColor: '#fff',
    fontFamily: 'RobotoMono_400Regular',
  },
  mainHeader: {
    fontSize: 30,
    textAlign: 'center',
    color: '#a18ce5',
    fontFamily: 'RobotoMono_400Regular',
    paddingVertical: 5,
  },
  imgContainer: {
    padding: 10,
    marginVertical: 5,
  },
  mainContent: {
    marginVertical: 10,
    padding: 5,
    backgroundColor: '#353535',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  imgStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  MyName: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
    fontFamily: 'RobotoMono_400Regular',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 400,
    bottom: 0,
  },
});

export default UserData;
