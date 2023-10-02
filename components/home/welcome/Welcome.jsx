import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES, images } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import FilterModal from "../../common/modals/FilterModal";

const Welcome = ({ searchTerm, setSearchTerm, handleClick, applyFilterMethod }) => {
  const router = useRouter();
  const [canRenderFilterModal, setCanRenderFilterModal] = useState(false);
  const { data, isLoading, error } = useFetch(
    'evento/10493'
  )

  function openCloseFilter(){
    setCanRenderFilterModal(!canRenderFilterModal);
  }

  return (
    <View>
      <View style={styles.eventContainer}>
        <Text style={styles.eventTitle}>Eventos</Text>
        <Image
          source={images.eventoBanner}
          style={styles.eventImageBackground}
        />
      </View>

      <View style={styles.searchAndFilterContainer}>
        
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput 
              style={styles.searchInput}
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
              placeholder='Pesquisar'
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
            <Image 
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.clickableFilterArea} onPress={openCloseFilter}>
          <Image 
            source={icons.filter}
            resizeMode="cover"
            style={styles.searchFilter}
          />
        </TouchableOpacity>
      </View>
        {canRenderFilterModal &&
          <FilterModal 
            onCloseFilter={openCloseFilter}
            applyFilterMethod={applyFilterMethod}  
          />
        }
    </View>
  )
}

export default Welcome;