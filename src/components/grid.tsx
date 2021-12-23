import { observer } from 'mobx-react-lite'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useStore } from '../store/use-store'

export const Grid = observer(() => {
    const store = useStore()

    return (
        <View style={styles.grid}>

        </View>
    )
})

const styles = StyleSheet.create({
    grid: {
        flexDirection:'row',
        flexWrap: 'wrap'
    }
})