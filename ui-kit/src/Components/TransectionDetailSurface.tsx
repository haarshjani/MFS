import { Children, ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface TransectionDetailSurfacePropsTypes {
    children : ReactNode;
    styles : Object
}

const TransectionDetailSurface = ({ children, styles }:TransectionDetailSurfacePropsTypes) => {

    const styleNative = StyleSheet.create({
        innerCardView :{
            maxWidth: 200,             
            height: 50,
            borderRadius: 10,      
            justifyContent: 'center',
            alignItems: 'center',
            ...styles

    },
    })

    return(<View style={styleNative.innerCardView}>

    </View>)
}

export default TransectionDetailSurface