import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { EventPage, NextEvents, Welcome, ScreenHeaderBtn } from '../components'
import { images, COLORS, icons } from '../constants'
import { Stack, useRouter } from 'expo-router';
const detailsEventPage = () => {
    const eventos = [
        {desc: 'Engenharia da mente', dia: '18', mes: 'MAIO', ano: '2023', imagem: images.cardEvento1},
        {desc: 'World Neurotechnology', dia: '23', mes: 'MAIO', ano: '2023', imagem: images.cardEvento2},
        {desc: 'WNF Virtual Reality', dia: '12', mes: 'MAIO', ano: '2023', imagem: images.cardEvento3},
        {desc: 'Convencao de neurotecnologia', dia: '10', mes: 'MAIO', ano: '2023', imagem: images.cardEvento4},
        {desc: 'Brain Tech Summit', dia: '21', mes: 'MAIO', ano: '2023', imagem: images.cardEvento5},
        {desc: 'Apresentacoes sobre neurotecnologia', dia: '30', mes: 'MAIO', ano: '2023', imagem: images.cardEvento6},
    ]
  
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
            <View>
                <Welcome/>
                <EventPage
                    dados={eventos[0]}
                />
                
            </View>
        </ScrollView>
        <Text>OLA MUNDO</Text>
    </SafeAreaView>
  )
}
export default detailsEventPage