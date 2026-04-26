import { View, StyleSheet, Image, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { Link } from "expo-router"
import { input } from "@/components/input"
import { Button } from "@/components/button"

/*não ser visivel a senha (editable={false}) 
  a bolinha na senha (secureTextEndry)
  (keyboardType="") seria o tipo de teclado*/ 

export default function Tela_Inicial(){
  return(

    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ios:"padding", android:"height"})}>
    <ScrollView /*Para rolar a tela*/
        contentContainerStyle={{ flexGrow: 1}} 
        keyboardShouldPersistTaps="handled" 
        showsVerticalScrollIndicator={false} /*tirar a barra de rolagem*/
    >
          <View style={styles.container}>

            <Image 
             source={require("@/assets/LOGO2.png")}
                style={styles.illustration_logo}/>

            <Text style={styles.title}> Bem vindo ao Agenda Rural </Text>
            <Text style={styles.subtitle}> Acesse sua conta com E-mail e Senha</Text>

            <View style={styles.form}>
                <input placeholder="E-mail"/>
                <input placeholder="Senha"/> 
                <Button label="Entrar"/>
            </View> 

            <Text style={styles.footerText}> Não tem uma conta?{" "}
                 <link href="/Cadastro" style={styles.footerLink}> Cadastre-se </link>
            </Text>

        </View>
    </ScrollView>
    </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#EFF5D2',
        padding: 32,
    },

    illustration_logo: {
        width: "100%",
        height: 330,
        resizeMode: "contain", /*ajustar no tamanho sugerido*/ 
        marginTop: 62,
    },

    title: {
        fontSize: 32,
        fontWeight: 900,
        color: '#4F2D1A'
    },

    subtitle: {
        fontSize: 16,
    },

    form: {
        marginTop: 24,
        gap: 12,
    },

    footerText: {
        textAlign: 'center',
        marginTop: 24,
        color: "#0505bb",
    },

    footerLink: {
        color: '#e93650',
        fontWeight: 700,

    },
})