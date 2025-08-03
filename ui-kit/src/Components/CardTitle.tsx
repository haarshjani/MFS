import { Text } from "react-native-paper";


interface CardTitlePropsTypes {
    title:string;
    styleProp? : Object;
}

const styles= {
    cardtitle:{
        color:'#2196F3'
    }
}
const CardTitle = ({title,styleProp}:CardTitlePropsTypes) =>{

    return(
        <Text variant="titleLarge" style={{...styles.cardtitle, ...styleProp}}>{title}</Text>
    )
}

export default CardTitle