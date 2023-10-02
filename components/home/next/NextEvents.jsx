import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { format } from 'date-fns';
import NextEventCard from '../../common/cards/next/NextEventCard';
import { images, icons, SIZES } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./nextEvents.style";
import { useRouter } from 'expo-router';
import useFetch from '../../../hook/useFetch';
import axios from 'axios';

const NextEvents = ({ searchTerm, filterProps }) => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('evento');
  const [eventos, setEventos] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setEventos(
        data.map(item => ({
          id: item.id,
          titulo: item.nome_do_evento,
          dataEvento: format(new Date(item.date), 'yyyy-MM-dd'),
          local: item.local,
          imagem: item.imagem_do_evento ? item.imagem_do_evento.guid : null,
          categoria: item.categoria
        }))
      );
    }
    console.log('searchTerm:', searchTerm);
    console.log('eventosFiltrados:', eventosFiltrados);
  }, [data]);

  useEffect(() => {
    setRefresh(true);
    setRefresh(false);
  }, [searchTerm]);

  const eventosFiltrados = useMemo(() => {
    let eventosFiltrados = [...eventos];

    if (filterProps.presencial) {
      eventosFiltrados = eventosFiltrados.filter(evento => evento.local !== 'Online');
    } else if (filterProps.online) {
      eventosFiltrados = eventosFiltrados.filter(evento => evento.local === 'Online');
    }

    if (filterProps.dataFoiSelecionada) {
      eventosFiltrados = eventosFiltrados.filter(evento => evento.dataEvento === filterProps.dataDoEvento);
    }
    if(filterProps.tipoEventoFoiSelecionado) {
      eventosFiltrados = eventosFiltrados.filter(evento => evento.categoria === filterProps.categoria);
      console.log(eventosFiltrados[0].categoria)
      console.log(filterProps.categoria)
    }
    
    return eventosFiltrados;
  }, [eventos, filterProps]);

  const handleCardPress = (item) => {
    router.push(`/eventDetails/${item.id}`);
  };

  return (
    <View>
      <Text style={styles.nextEventsTitle}>Próximos Eventos</Text>
      <View style={styles.nextEventsContainer}>
        {!isLoading && !refresh && (
          <FlatList
            data={eventosFiltrados}
            renderItem={({ item }) => (
              (searchTerm === '' || item.titulo.toLowerCase().includes(searchTerm.toLowerCase())) && (
                <NextEventCard
                  dataEvento={item.dataEvento}
                  imagemBanner={item.imagem}
                  handleCardPress={() => handleCardPress(item)}
                  id={item.id}
                />
              )
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.small }}
            vertical
          />
        )}
      </View>
    </View>
  );
};

export default NextEvents;
