import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { AppScreen } from '../components'
import Icon from 'react-native-vector-icons/FontAwesome'
import colors from '../config/colors'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
    
    const [user, setUser] = useState('')

    // Retrieve the user's name and email from AsyncStorage
    const getData = async () => {
        try {
          const foundUser = await AsyncStorage.getItem('user');
          
          if (!foundUser) {
              await AsyncStorage.setItem('user', JSON.stringify({
                  slack: 'Manoah luka',
                  fullName: 'Manoah luka',
                  github: 'github.com/manoahLinks',
                  bio: 'I am manoah luka a software developer from Nigeria with 2years of experience, i have worked on diverse projects and i am here to improve my skills and become world class in what i do. i hope HNG will help me achieve that.'
              }))

              const foundUser1 = await AsyncStorage.getItem('user');

              return setUser(JSON.parse(foundUser1))
          }

          setUser(JSON.parse(foundUser))
  
        } catch (error) {
          Alert.alert('error', JSON.stringify(error.message))
        }
      };

    useEffect(() => {
        getData();
        
      }, []);

      useFocusEffect(
        useCallback(() => {
            getData();
        }, [])
      )

  return (
    <AppScreen>
        <View>
                
            <View style={styles.detailsContainer}>
                <View >
                    <Image source={require('../assets/profile.jpeg')} style={{width: 150, height: 150, borderRadius: 100}}/>
                    <TouchableOpacity onPress={()=> {navigation.navigate('Edit-cv', {user: user})}} style={{display: 'flex', flexDirection:'row', marginLeft: 50}}>  
                        <Icon name='edit' size={20} color={colors.secondaryText} />
                        <Text style={{color: colors.secondaryText}}>edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tagContainer}>
                    <Text style={styles.nameTag}>{user.fullName}</Text>
                    <Text style={{color: 'white'}}>Mobile developer intern at HNG</Text>
                </View>
                
                <View style={[styles.info]}>
                    <View style={styles.infoItem}>
                        <Icon name='slack' color={'white'} size={20}/>
                        <Text style={styles.bioText}>{user.slack}</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Icon name='github' color={'white'} size={20}/>
                        <Text style={styles.bioText}>{user.github}</Text>
                    </View>
                </View>

                <View style={styles.bioContainer}>
                    <View>
                        <Text style={{fontSize: 18, color: colors.accent}}>👨🏽‍💻  Bio</Text>
                    </View>
                    <Text style={styles.bioText}>{user.bio}</Text>
                </View>
            </View>

        </View>
     
    </AppScreen>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        
    },

    detailsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 20
    },

    nameTag: {
        fontWeight: 'bold',
        fontSize: 25,
        color: colors.accent
    },

    tagContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },  

    info: {
        display: 'flex',
        gap: 10
    },

    infoItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    bioText: {
        textAlign: 'center',
        lineHeight: 25,
        color: colors.secondaryText,
    },

    bioContainer: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 0.5,
        gap: 15,
        borderColor: colors.divider,
        backgroundColor: colors.secondary
    }
})

export default HomeScreen;