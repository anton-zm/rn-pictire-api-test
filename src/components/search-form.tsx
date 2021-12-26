import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Pressable, Keyboard } from 'react-native'
import { useStore } from '../store/use-store'
import { SearchIcon } from '../assets/svg/search-icon'
import { Colors } from '../utils/consts'
import config from '../config'
import { hydrateItems } from '../utils/funcs'
import { Tags } from '../components/tags'
import { searchPhotos } from '../utils/api-reqs'
import { IPhoto } from '../interfaces'


export const SearchForm = observer(({setPhotos}:{setPhotos:(v:IPhoto[])=> void}) => {
    const store = useStore()
    const [request, setRequest] = useState('')
        
    const Search = (tag?: string) => {
        Keyboard.dismiss()
        const req = tag || request
        if(req){
            store.setTag('')
            searchPhotos(req)
                .then((res: Record<string, any>) => {
                    setPhotos(hydrateItems(res.results))
                    store.setImgData(hydrateItems(res.results))
                })
                .catch((e: Error) => console.log(e))
        }
    }
    return (
        <View>
            <View style={styles.search_form}>
                <TextInput 
                    value={request} 
                    style={styles.input} 
                    onChangeText={setRequest} 
                />
                <Pressable 
                    android_ripple={{
                        color: Colors.Grey
                    }} 
                    onPress={() => { Search()}} 
                    style={styles.search_btn}
                >
                    <SearchIcon />
                </Pressable>
            </View>
            <Tags data={config.tags} onPress={(tag:string) => {
                Search(tag)
            }} />
        </View>
    )
})

const styles = StyleSheet.create({
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