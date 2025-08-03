import { Text } from "react-native-paper"

interface AmountTextPropsTypes {
    text : string;
    stylesProp : Object;
}

const AmountText = ({text, stylesProp}:AmountTextPropsTypes) => {

    

    return(<Text style={stylesProp} variant="titleMedium">{text}</Text>)
}

export default AmountText