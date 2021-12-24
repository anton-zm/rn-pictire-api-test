import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IPhoto } from '../interfaces'
import { getResultDate } from '../utils/funcs'

export const ItemDetails = observer(({item}:{item:IPhoto}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.row}>
                <Text>Author: {item.author}</Text>
                <Text>Likes: {item.likes}</Text>
                <Text>Date: {getResultDate(new Date(item.createdAt))}</Text>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 24,
        flex: 1
    },
    description: {
        fontWeight: 'bold',
        fontSize: 16
    },
    row: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})