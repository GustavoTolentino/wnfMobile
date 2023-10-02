import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  nextEventsContainer: {
    marginTop: SIZES.xLarge,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextEventsTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    marginTop: 10,
  },
});

export default styles;
