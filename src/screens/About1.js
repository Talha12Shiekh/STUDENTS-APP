import { useState } from 'react';
import { Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import userSlides from './UserSlides';
import { SIZES, COLORS } from './Theme';
import Rerendered from './Rerendered';

const About1 = () => {
  const [showHomePage, setshowHomePage] = useState(true);
  const AboutObject = {
    description:
      'We will completely keep track of all of your students names , phone numbers and    emails and we will give our best to teach the particular course or technology',
    image: require('../../assets/studentsgroup.png'),
    welcomeText: 'We will keep track of your',
    extraData: 'students data',
    showmenu: false,
    buttonText: 'Check details',
    align: false,
    heading: true,
    showSlides: setshowHomePage,
  };
  const buttonLabel = (label) => {
    return (
      <View
        style={{
          padding: 12,
        }}>
        <Text
          style={{
            fontWeight: '600',
            color: COLORS.title,
            fontSize: SIZES.h4,
          }}>
          {label}
        </Text>
      </View>
    );
  };

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={userSlides}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 15,
                paddingTop: 50,
                backgroundColor: '#fff',
              }}>
              <Image
                source={item.image}
                style={{
                  width: SIZES.width - 80,
                  height: 450,
                  marginBottom: 10,
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: SIZES.h1,
                  color: COLORS.title,
                  marginBottom: 3,
                }}>
                Name : {item.name}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '600',
                  paddingTop: 5,
                  color: COLORS.title,
                  fontSize: SIZES.h3,
                  marginBottom: 3,
                }}>
                Email: {item.email}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '500',
                  paddingTop: 5,
                  color: COLORS.title,
                  fontSize: SIZES.h3,
                }}>
                Number: {item.number}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showPrevButton
        renderNextButton={() => buttonLabel('Next')}
        renderPrevButton={() => buttonLabel('Previous')}
        renderDoneButton={() => buttonLabel('Done')}
        onDone={() => setshowHomePage(true)}
      />
    );
  }
  return <Rerendered {...AboutObject} />;
};

export default About1;
