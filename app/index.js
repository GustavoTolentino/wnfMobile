import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, NextEvents } from '../components';

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [filterProps, setFilterProps] = useState({
        presencial: null,
        online: null,
        dataDoEvento: null,
        dataFoiSelecionada: null,
        categoria: null
    });

    const applyFilterMethod = (propsToSetForFilter) => {
        setFilterProps(propsToSetForFilter);
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={images.wnfLogo} dimension='100%' logo={true}/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' logo={false}/>
                    ),
                    headerTitle: "",
                }}
            />

            <ScrollView showsHorizontalScrollIndicator={false}>
                <View
                    style={{flex: 1, padding: SIZES.medium}}
                >
                    <Welcome 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                          if (searchTerm) {
                            router.push(`/search/${searchTerm}`)
                          }
                        }}
                        applyFilterMethod={applyFilterMethod}
                    />
                    <NextEvents 
                        searchTerm={searchTerm}
                        filterProps={filterProps}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



export default Home;