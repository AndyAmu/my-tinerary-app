import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, ScrollView, SafeAreaView, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Carousel from '../carousel'

const HomeScreen = (props) => {

    const navigation = useNavigation()

    return (
        <>
            <SafeAreaView>
                <ScrollView>

                    <View style={{
                        flex: 1,
                    }}>
                        <ImageBackground
                            source={require('../../assets/playa.jpg')}
                            resizeMode='cover'
                            style={{
                                flex: 1,
                            }}>

                            <View>
                                <Text
                                    style={{
                                        fontSize: 100,
                                        textAlign: 'center',
                                        marginTop: '30%',
                                        color: 'white',
                                    }}
                                >My <Text style={{
                                    fontSize: 110,
                                    textAlign: 'center',
                                    marginTop: '30%',
                                    color: '#ffc107',
                                    borderColor: 'black'

                                }}>Tinerary</Text></Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    textAlign: 'center',
                                    marginTop: '30%',
                                    color: 'white',
                                }}>Find your perfect trip, designed by insiders who know and love their cities!</Text>

                                <View>
                                    <TouchableOpacity>
                                        <TouchableNativeFeedback onPress={() => navigation.navigate('Cities')}>
                                            <View style={styles.button1}>
                                                <Text style={styles.textBut}>¡ CLICK TO SEE MORE !</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>

                        <View>


                            <Carousel><Text style={{
                                fontWeight: 'bold',
                                fontSize: 50,
                                textAlign: 'center',
                                marginTop: '5%',
                                color: 'white',
                            }}>Popular MyTineraries</Text></Carousel>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    button1: {
        marginTop: 50,
        backgroundColor: 'black',
        width: '50%',
        marginLeft: '24%',
        borderRadius: 10,
        padding: 5.5,
        borderWidth: 3,
        alignItems: 'center',
        marginBottom: 50,
        color: 'white',
        marginTop: '50%',
        marginBottom: '50%'
    },
    textBut: {
        color: 'white'
    }
})

export default HomeScreen;

