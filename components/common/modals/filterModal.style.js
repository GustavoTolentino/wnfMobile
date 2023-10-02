import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnEventMode: (width) => ({
    padding: 5,
    borderColor: '#c4c4c4',
    borderRadius: 10,
    borderWidth: 2,
    width: width,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  }),

  btnEventModeActive: {
    backgroundColor: '#ff0000'
  },
   
  container: {
    display: 'flex',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 200
  },

  eventModeContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filterArea: {
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5, // Para Android
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: 500,
    backgroundColor: '#f1f1f1',
    padding: 20,
    zIndex: 2,
    marginTop: -60,
  },
  filterTitle: {
    fontSize: SIZES.large / 1.1,
    fontWeight: FONT.bold,
  },
  btnFilter: {
    backgroundColor: COLORS.pink,
    padding: 5,
    marginTop: 20,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
  },
  textInsideBtnFilter: {
    color: "#ffffff",
    fontSize: SIZES.medium / 1.3,
    fontWeight: FONT.bold,
  },
  btnFilterArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerFilterArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: 'row',
    width: '100%',
    marginTop: -20,
  },
  searchFilter: {
    marginTop: 20,
    marginRight: -35,
    width: 35,
    height: 35,
  },
  clickableFilterArea: {
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLine: {
    borderBottomColor: 'rgba(0, 0, 0, 0.3)', // Cor preta com 20% de opacidade
    borderBottomWidth: 1, // Ajuste a espessura da linha conforme necessário
    marginVertical: 10, // Ajuste a margem vertical conforme necessário
    width: '100%'
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.small / 2,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
