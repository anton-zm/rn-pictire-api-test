import React from 'react'
import { TextInput, StyleSheet } from 'react-native';
import { Colors } from '../utils/consts';

export const Input = ({
    placeholder,
    value,
    onChange
}:{
    placeholder: string,
    value: string,
    onChange: (v:string) => void
}) => {
    return (
        <>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: Colors.Grey,
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginBottom: 15,
        paddingHorizontal: 10
    }    
  });