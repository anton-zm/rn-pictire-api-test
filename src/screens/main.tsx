import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useStore } from '../store/use-store'
import { Header } from '../components/header'
import { SearchIcon } from '../assets/svg/search-icon'
import { Colors } from '../utils/consts'

const SearchForm = observer(() => {
    const [request, setRequest] = useState('')
    const Search = () => {}
    return (
        <View style={styles.search_form}>
            <TextInput value={request} style={styles.input} onChangeText={setRequest} />
            <TouchableOpacity onPress={Search} style={styles.search_btn}>
                <SearchIcon />
            </TouchableOpacity>
        </View>
    )
})

export const MainScreen = observer(({navigation}:{navigation: any}) => {
    const store = useStore()
    
    useEffect(() => {
        if(!store.login) navigation.navigate('Login')
    },[store.login])

    return (
        <View style={styles.wrapper}>
            <Header />
            <ScrollView style={styles.content}>
                <Text style={styles.title}>1000000+ photos, find your favourite!</Text>
                <SearchForm />
            </ScrollView>
        </View>
    )
})

const styles = StyleSheet.create({
    error: {
      color: 'red',
      textAlign: 'center',
  
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content:{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    search_form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 32
    },
    input: {
        width: '85%',
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.Grey,
    },
    search_btn: {
        width: '15%',
        backgroundColor: Colors.Main,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
  