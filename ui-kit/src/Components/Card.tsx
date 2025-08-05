import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";


interface CardPropsTyes{
    style : Object;
    children : ReactNode
}
const Card = ({style, children}:CardPropsTyes) => {

    const styleNative = StyleSheet.create({
        card: {
        margin: 10,
        borderRadius : 10,
        padding : 2,
        ...style
    }
    })

    return(
        <View style={styleNative.card} >
            {children}
        </View>
    )

}
export default Card