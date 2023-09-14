import { StyleSheet, Button, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { AppScreen } from '../components'
import colors from '../config/colors'

const EditScreen = () => {

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        github: '',
      });
    
      const inputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }
    
      const handleSubmit = () => {
        Alert.alert('Form Data', JSON.stringify(formData, null, 2));
      };


  return (
    <AppScreen>
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    placeholder='enter username'
                    style={{borderColor: colors.secondaryText, borderWidth: 1, padding: 5, color: colors.secondaryText}}
                    value={formData.email}
                    onChange={inputChange}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Full name</Text>
                <TextInput 
                    style={{borderColor: colors.secondaryText, borderWidth: 1, padding: 5, color: colors.secondaryText}}
                    value={formData.fullname}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>slack</Text>
                <TextInput 
                    style={{borderColor: colors.secondaryText, borderWidth: 1, padding: 5, color: colors.secondaryText}}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>github</Text>
                <TextInput 
                    placeholder='enter username'
                    style={{borderColor: colors.secondaryText, borderWidth: 1, padding: 5, color: colors.secondaryText}}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Bio</Text>
                <TextInput 
                    placeholder='enter username'
                    style={{borderColor: colors.secondaryText, borderWidth: 1, padding: 5, color: colors.secondaryText}}
                    multiline= {true}
                    numberOfLines= {3}
                />
            </View>

            <Button onPress={handleSubmit} title="Submit" color={colors.accent} />
        </View>
    </AppScreen>
  )
}

export default EditScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 10
    },

    formContainer: {
        padding: 20,
        gap: 10,
    },

    label: {
        color: colors.secondaryText
    },

    inputContainer:{
        gap: 5
    }
})