import { Text,  View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, } from 'react-native'
import { useCallback, useState, useEffect } from 'react';
import { ScreenHeaderBtn, EventPage, Welcome } from '../../components';
import { COLORS, icons, SIZES, images } from '../../constants';
import useFetch from '../../hook/useFetch';
import { useSearchParams, Stack, useRouter } from 'expo-router';

const EventDetails = () => {
    const params = useSearchParams();
    const router = useRouter();    
    const [evento, setEvento] = useState({});
    const [refreshing, setRefreshing] = useState(false);
    const { data, isLoading, error, refetch } = useFetch(`evento/${params.id}`)
    
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      refetch()
      setRefreshing(false)
    }, []);

    useEffect(() => {
      if (data.id != undefined) {
        setEvento({
          id: data.id,
          titulo: data.nome_do_evento,
          dataEvento: data.data,
          local: data.local,
          imagem: data.imagem_do_evento ? data.imagem_do_evento.guid : null,
        })
      }
    }, [data])
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                      <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension='60%'
                        handlePress={() => router.back()}
                      />
                    ),
                    headerRight: () => (
                      <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
                    ),
                    headerTitle: "",
                }}
            />
            <>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                >
                    <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                        <Welcome/>
                        {evento.dataEvento != undefined &&
                          <EventPage dados={evento}/>
                        }
                    </View>
                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default EventDetails;