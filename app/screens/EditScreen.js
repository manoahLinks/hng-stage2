import { StyleSheet, Button, Text, TextInput, View, Alert } from 'react-native'
import React, {useState} from 'react'
import { AppScreen } from '../components'
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../config/colors'

const EditScreen = () => {

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        slack: '',
        github: '',
        bio: ''
      });
    
      const handleInputChange = (field, text) => {
        setFormData({
          ...formData,
          [field]: text,
        });
      };
    
      const handleSubmit = () => {
        Alert.alert('Form Data', JSON.stringify(formData, null, 2));
      };


  return (
    <AppScreen>
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input}
                    value={formData.email}
                    onChangeText={(text) =>  handleInputChange('email', text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Full name</Text>
                <TextInput 
                    style={styles.input}
                    value={formData.fullname}
                    onChangeText={(text) =>  handleInputChange('fullname', text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>slack</Text>
                <TextInput 
                    style={styles.input}
                    value={formData.slack}
                    onChangeText={(text) =>  handleInputChange('slack', text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>github</Text>
                <TextInput 
                    style={styles.input}
                    value={formData.github}
                    onChangeText={(text) =>  handleInputChange('github', text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Bio</Text>
                <TextInput 
                    style={styles.input}
                    value={formData.bio}
                    onChangeText={(text) =>  handleInputChange('bio', text)}
                    multiline= {true}
                    numberOfLines= {3}
                />
            </View>

            <Button style={styles.button} onPress={handleSubmit} title="Submit" color={colors.accent} />
        </View>
    </AppScreen>
  )
}

export default EditScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },

    formContainer: {
        padding: 20,
        gap: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: colors.secondary
    },

    label: {
        color: colors.accent
    },

    inputContainer:{
        gap: 5
    },

    input: {
        borderColor: colors.secondaryText, 
        borderWidth: 0.5,
        borderRadius: 3, 
        color: colors.secondaryText
    },

    button: {
        top: 70,
    }
})