import {
    StatusBar,
    Animated,
    TouchableOpacity,
    FlatList,
    Text,
    View,
    StyleSheet,
    useWindowDimensions,
    SafeAreaView,
    TextInput,
    Vibration
} from 'react-native';
import React, { useRef } from 'react'

const CountDown = () => {
    const timers = [...Array(13).keys()].map((i) => (i === 0 ? 1 : i * 5));
    const inputRef = useRef()
    const { width, height } = useWindowDimensions();
    const [duration,setduration] = React.useState(timers[0])
    const colors = {
        black: '#323F4E',
        red: '#F76A6A',
        text: '#ffffff',
    };
    const ITEM_SIZE = width * 0.38;
    const ITEM_SPACING = (width - ITEM_SIZE) / 2;
    const scrollX = useRef(new Animated.Value(0)).current;
    const timerAnimations = useRef(new Animated.Value(height)).current;
    const buttonAnimations = useRef(new Animated.Value(0)).current;
    const textInputAnimations = useRef(new Animated.Value(timers[0])).current;

    React.useEffect(() => {
        const listeneer = textInputAnimations.addListener(({value}) => {
            inputRef?.current?.setNativeProps({
                text:Math.ceil(value).toString()
            });
        })

        return () => {
            textInputAnimations.removeListener(listeneer)
            textInputAnimations.removeAllListeners()
        }
    },[duration])
    const animation = React.useCallback(() => {
        textInputAnimations.setValue(duration)
        Animated.sequence([
            Animated.timing(buttonAnimations,{
                toValue:1,
                duration:300,
                useNativeDriver:true
            }),
            Animated.timing(timerAnimations,{
                toValue:0,
                duration:300,
                useNativeDriver:true
            }),
            Animated.parallel([
                Animated.timing(textInputAnimations,{
                    toValue:0,
                    duration:duration * 100,
                    useNativeDriver:true
                }),
                Animated.timing(timerAnimations,{
                    toValue:height,
                    duration:duration * 100,
                    useNativeDriver:true
                }),
            ]),
            
        ]).start(() => {
            Vibration.vibrate(1000)
            Animated.timing(buttonAnimations,{
                toValue:0,
                duration:300,
                useNativeDriver:true
            }).start()
        })
    },[duration]);

    const opacity = buttonAnimations.interpolate({
        inputRange:[0,1],
        outputRange:[1,0]
    })
    const TextInputopacity = buttonAnimations.interpolate({
        inputRange:[0,1],
        outputRange:[0,1]
    })
    const translateY = buttonAnimations.interpolate({
        inputRange:[0,1],
        outputRange:[0,200]
    })
    return (
        <View style={[styles.container, { backgroundColor: colors.black }]}>
            <StatusBar hidden />
            <Animated.View style={{height,width,backgroundColor:colors.red,transform:[{translateY:timerAnimations}]}}/>
            <Animated.View
                style={[
                    StyleSheet.absoluteFillObject,
                    {
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        paddingBottom: 100,
                        opacity,
                        transform:[{translateY}]
                    },
                ]}>
                <TouchableOpacity
                    onPress={animation}>
                    <View
                        style={[styles.roundButton, {
                            backgroundColor: colors.red,
                        }]}
                    />
                </TouchableOpacity>
            </Animated.View>
            <View
                style={{
                    position: 'absolute',
                    top: height / 3,
                    left: 0,
                    right: 0,
                    flex: 1,
                }}>
                    <Animated.View style={{opacity:TextInputopacity,textAlign:"center"}}>
                        <TextInput 
                        ref={inputRef}
                        defaultValue={duration.toString()}
                        style={{textAlign:"center",fontSize: ITEM_SIZE * 0.8,color: colors.text,position:"absolute",justifyContent:"center",alignItems:"center",alignSelf:"center",width:ITEM_SIZE}}
                        />
                    </Animated.View>
                <Animated.FlatList
                    data={timers}
                    horizontal
                    onMomentumScrollEnd={ev => {
                       const index =  Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
                       setduration(timers[index])
                    }}
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{paddingHorizontal:ITEM_SPACING}}
                    snapToInterval={ITEM_SIZE}
                    decelerationRate="fast"
                    style={{flexGrow:0,opacity}}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}}],{useNativeDriver:true}
                      )}
                    keyExtractor={item => item.toString()}
                    renderItem={({ item ,index}) => {
                        const inputRange = [
                            (index - 1) * ITEM_SIZE,
                            index * ITEM_SIZE,
                            (index + 1) * ITEM_SIZE,
                        ];
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange:[.4,1,.4]
                        })
                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange:[.7,1,.7]
                        })
                        return <View style={{width:ITEM_SIZE}}>
                            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                            <Animated.Text style={[styles.text, {fontSize: ITEM_SIZE * 0.8,color: colors.text,opacity,textAlign:"right",
                            transform:[{
                                scale
                            }]}]}>{item}</Animated.Text>
                            </View>
                        </View>
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    roundButton: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
})

export default CountDown