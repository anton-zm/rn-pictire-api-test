import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../utils/consts'
import config from '../config'

const Tag = observer(({text, onPress}:{text:string, onPress: (v:string)=>void}) => {
    return (
        <TouchableOpacity style={styles.tag} onPress={() => onPress(text)}>
            <Text><Text style={styles.tag_text}>{text}</Text></Text>
        </TouchableOpacity>
    )
})

export const Tags = observer(({data, onPress}:{data:string[], onPress: (v:string)=> void}) => {
    return (
        <View style={styles.container}>
            {data.map((tag, i) => (
                <Tag onPress={onPress} key={i} text={tag} />
            ))}
        </View>
    )
})

const styles = StyleSheet.create({
    tag: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: Colors.Grey,
        borderRadius: 7,
        marginRight: 5,
        marginBottom: 5
    },
    container: {
        flexDirection:'row',
        marginTop: 24,
        flexWrap: 'wrap'
    },
    tag_text: {
        color: 'white'
    }
})