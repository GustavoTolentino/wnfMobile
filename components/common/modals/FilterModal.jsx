import { Image, TouchableOpacity, Text, StyleSheet, View, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import styles from './filterModal.style';
import { CheckBox } from 'react-native-elements';
import { icons, SIZES } from '../../../constants';
import { format } from 'date-fns';

const eventTypes = ["Neurociencia", "Neurotecnologia", "Tecnologia", "Consciencia", "Neuroetica", "Entretenimento"];

const FilterModal = ({onCloseFilter, applyFilterMethod}) => {
    const [date, setDate] = useState(new Date());
    const [dataWasSelected, setDataWasSelected] = useState(false);
    const [renderFilter, setRenderFilter] = useState(false);
    const [isPresencialSelected, setPresencialSelected] = useState(false);
    const [isOnlineSelected, setOnlineSelected] = useState(false);
    const [activeEventType, setActiveEventType] = useState("");
    const [eventTypeWasSelected, setEventTypeWasSelected] = useState(false);

    const onChange = (e, selectedDate) => {
        setDate(selectedDate);
        setDataWasSelected(true);
        setRenderFilter(false);
        console.log(selectedDate);
    };

    const submitFilter = () => {
        filterProps = {
            presencial: isPresencialSelected,
            online: isOnlineSelected,
            dataDoEvento: format(new Date(date), 'yyyy-MM-dd'),
            dataFoiSelecionada: dataWasSelected,
            categoria: activeEventType,
            tipoEventoFoiSelecionado: eventTypeWasSelected
        }
        applyFilterMethod(filterProps);
        onCloseFilter();
    }

    return (
        <View style={styles.filterArea}>
            <View style={styles.headerFilterArea}>
                <Text>Filtro</Text>

                <TouchableOpacity style={styles.clickableFilterArea} onPress={onCloseFilter}>
                    <Image 
                        source={icons.filter}
                        resizeMode="cover"
                        style={styles.searchFilter}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine} />
            <View>
                <Text style={styles.filterTitle}>Categorias</Text>
                <View style={styles.tabsContainer}>
                    <FlatList 
                        data={eventTypes}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.tab(activeEventType, item)}
                                onPress={() => {
                                    setActiveEventType(item);
                                    setEventTypeWasSelected(true);
                                    // router.push(`/search/${item}`);
                                }}
                            >
                                <Text style={styles.tabText(activeEventType, item)}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item}
                        contentContainerStyle={{ columnGap: SIZES.small }}
                        horizontal
                    />
                </View>
                <Text style={styles.filterTitle}>Ordenar Por</Text>  
                <View>
                    <Text>Tipo: </Text>
                    <View style={styles.eventModeContainer}>
                        <CheckBox
                            title="Presencial"
                            checked={isPresencialSelected}
                            onPress={() => {
                                setPresencialSelected(!isPresencialSelected);
                                setOnlineSelected(false); // Desmarcar "Online" quando "Presencial" é selecionado
                            }}
                        />
                        <CheckBox
                            title="Online"
                            checked={isOnlineSelected}
                            onPress={() => {
                                setOnlineSelected(!isOnlineSelected);
                                setPresencialSelected(false); // Desmarcar "Presencial" quando "Online" é selecionado
                            }}
                        />
                    </View>
                </View>
                <View>
                    <Text>Data:</Text>

                    <View style={styles.container}>
                        <TouchableOpacity 
                            onPress={
                                () => setRenderFilter(true)
                            }
                        >
                            <Text>Clique aqui para selecionar a data</Text>
                        </TouchableOpacity>
                        {renderFilter &&
                            <DateTimePicker
                                value={date}
                                mode={"date"}
                                is24Hour={true}
                                onChange={onChange}
                            />
                        }
                        <Text>{date.toLocaleString()}</Text>
                    </View>
                </View>
                <View style={styles.btnFilterArea}>
                    <TouchableOpacity style={styles.btnFilter} onPress={submitFilter}>
                        <Text style={styles.textInsideBtnFilter}>APLICAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default FilterModal;