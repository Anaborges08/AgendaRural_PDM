import { TextInput, StyleSheet, TextInputProps } from "react-native"

export function input({...rest}: TextInputProps){ /*qualquer propriedade que colocar aqui, vai ficar em baixo*/ 
    return <TextInput style={styles.input} {...rest}/>
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 12, 
    },

})