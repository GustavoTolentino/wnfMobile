import { useState, useEffect } from 'react';
import { COLORS, icons, images, SIZES } from '../../../constants';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { NextEvents, Welcome, ScreenHeaderBtn } from './../../../components'
import { Stack, useRouter } from 'expo-router';
import styles from './eventPage.style';

const EventPage = (dados) => {
    const [data, setData] = useState({});

    useEffect(() => {
        console.log(dados.dados.imagem);
        if(dados.dados.id != undefined){
            setData({
                dia: dados.dados.dataEvento.split('-')[2],
                mes: dados.dados.dataEvento.split('-')[1],
                ano: dados.dados.dataEvento.split('-')[0]
            })
        }
    }, [])
    
    return(
        <View style={{flex: 1, padding: SIZES.medium}}>
            <View style={styles.dataAndTitleArea}>
                <TouchableOpacity style={styles.nextEventCardWrapper}>
                    <View style={styles.dataArea}>
                        <Text style={styles.mesText}>{data.mes}</Text>
                        <Text style={styles.diaText}>{data.dia}</Text>
                        <Text style={styles.anoText}>{data.ano}</Text>
                    </View>

                    <View style={{paddingRight: SIZES.xxLarge}}>
                        <Text style={styles.eventTitle}>{dados.dados.titulo}</Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Text>
                    </View>
                    
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: "http:" + dados.dados.imagem.split(":")[1] }} style={styles.eventImage} onError={(e) => console.log("Erro ao carregar a imagem", e.nativeEvent.error)}/>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat delectus, libero, at et nam, adipisci qui incidunt illum quos ullam reiciendis laudantium cum consequatur reprehenderit amet rerum dolor repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam tempora quasi nesciunt in exercitationem corporis. Ab, dolores eius labore sed unde excepturi, cumque </Text>
            </View>
        </View>
    )
}

export default EventPage;