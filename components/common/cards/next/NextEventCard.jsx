import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'

import styles from './NextEventCard.style';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { images } from '../../../../constants';

const NextEventCard = ({ dataEvento, imagemBanner, handleCardPress, id}) => {
  const [data, setData] = useState({
    dia: 0,
    mes: 0,
    ano: 0
  })
  useEffect(() => {
    setData({
      dia: dataEvento.split('-')[2].substring(0, 2),
      mes: dataEvento.split('-')[1],
      ano: dataEvento.split('-')[0]
    })
  }, [])
  

  return (
    <TouchableOpacity style={styles.nextEventCardWrapper} onPress={() => handleCardPress(id)}>
      <View style={styles.dataArea}>
        <Text style={styles.mesText}>{data.mes}</Text>
        <Text style={styles.diaText}>{data.dia}</Text>
        <Text style={styles.anoText}>{data.ano}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image 
          source={{uri: imagemBanner != null ? 'http:' + imagemBanner.split(":")[1] : "http://mdin7.sg-host.com/wp-content/uploads/2023/09/banner_summit_1.png"}} 
          resizeMode='cover'
          style={styles.bannerImage(30)} 
          // alt={desc}
        />
      </View>
    </TouchableOpacity>
  )
}

export default NextEventCard;