import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    mesText: {
        fontSize: SIZES.small,
        fontFamily: FONT.regular,
     },
     diaText: {
         fontSize: SIZES.xLarge,
         fontFamily: FONT.bold,
     },
     anoText: {
         fontSize: SIZES.small,
         fontFamily: FONT.regular,
     },
     nextEventCardWrapper: {
        width: '100%',
        height: 100,
        padding: SIZES.medium,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        display: 'flex',
        gap: 10,
        // marginTop: 5,
    },
    dataArea: {
        flexDirection: 'column',
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderColor: '#c4c4c4',
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '16%',
        height: '90%',
    },
    dataAndTitleArea: {
        display: 'flex'
    },
    eventTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.bold,
    },
    eventImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    imageContainer: {
        width: 305,
        height: 70,
    },
});

export default styles;