import { StyleSheet } from "react-native";
import { scaleFontSize } from "../../assets/scaling";

const style = StyleSheet.create({
    label: {
        fontFamily: 'Inter', 
        fontWeight: '400',
        color: '#36455A',
        fontSize: scaleFontSize(12),
        lineHeight: scaleFontSize(15)
    }
});

export default style;