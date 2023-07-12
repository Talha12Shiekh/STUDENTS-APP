import Rerender from "./src/screens/Rerendered"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import About1 from "./src/screens/About1";
import { Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
} from '@expo-google-fonts/roboto-mono';
import CourseDetails from './src/screens/CourseDetails';
import AppLoading from 'expo-app-loading';

export default function App() {
  const Stack = createNativeStackNavigator();
  let [fontsloaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    RobotoMono_400Regular,
    RobotoMono_500Medium,
  });

  if (!fontsloaded) {
    return <AppLoading />;
  }
  const description =
    "Here you wil get all type of courses related to web development ,ethical hacking ,graphic designing we will try to teach you the things in short time that took us years to learn.";

  const HomeObject = {
    description : description,
    image:require("./assets/Header.jpg"),
    welcomeText: "Welcome to",
    extraData:"TK students",
    showmenu:true,
    align:true
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Rerender {...props}  {...HomeObject} />}
        </Stack.Screen>
        <Stack.Screen
          name="about"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Nunito_600SemiBold',
            },
            headerTitle: 'About',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Nunito_600SemiBold',
            },
            headerTitle: 'Courses',
            headerTitleAlign: 'center',
          }}
        />
       <Stack.Screen
          name="userdata"
          component={About1}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Nunito_600SemiBold',
            },
            headerTitle: 'Students data',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Nunito_600SemiBold',
            },
            headerTitle: 'Contacts',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="coursedetails"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: 'Nunito_600SemiBold',
            },
            headerTitle: 'CourseDetails',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
