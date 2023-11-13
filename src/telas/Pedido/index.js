import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

import trofeu from '../../assets/sucesso.png';
import Voltar from '../../assets/voltar.svg';

import useTextos from '../../hooks/useTextos';

export default function Pedido() {
    const navigation = useNavigation();
    const route = useRoute();
    const { botaoHomePedido, botaoProdutorPedido, conteudoSubtituloPedido, conteudoTituloPedido, tituloPedido } = useTextos();
    const subtitulo = conteudoSubtituloPedido?.replace('$CESTA', route.params.cesta);

    return <>
        <ScrollView>
            <Image style={estilos.trofeu} source={trofeu} />
            <Text style={estilos.conteudoTitulo}>{ conteudoTituloPedido }</Text>
            <Text style={estilos.conteudoSubtitulo}>{ subtitulo }</Text>
            <TouchableOpacity style={estilos.botaoHome} onPress={() => navigation.popToTop()}>
                <Text style={estilos.textoBotaoHome}>{ botaoHomePedido }</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.botaoProdutor} onPress={() => navigation.pop(2) }>
                <Text style={estilos.textoBotaoProdutor}>{ botaoProdutorPedido }</Text>
            </TouchableOpacity>
        </ScrollView>
        <View style={estilos.topo}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Voltar color={'black'} />
            </TouchableOpacity>
            <Text style={estilos.titulo}>{ tituloPedido }</Text>
        </View>
    </>;
}

const estilos = StyleSheet.create({
    topo: {
        position: "absolute",
        flexDirection: "row",
        padding: 16,
        backgroundColor: 'white',
        // ANDROID
        elevation: 4,
        // IOS
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    titulo: {
        color: '#464646',
        fontSize: 16,
        lineHeight: 26,
        flex: 1,
        textAlign: "center",
        fontWeight: "700"
    },
    trofeu: {
        width: '100%'
    },
    conteudoTitulo: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: '700',
        marginStart: 16
    },
    conteudoSubtitulo: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3',
        fontWeight: '400',
        marginStart: 16
    },
    botaoHome: {
        margin: 16,
        backgroundColor: '#2A9F85',
        borderRadius: 6
    },
    textoBotaoHome: {
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: '700',
        textAlign: "center",
        marginVertical: 16
    },
    botaoProdutor: {
        marginHorizontal: 16,
        marginBottom: 16,
        borderColor: '#ECECEC',
        borderWidth: 1,
        borderRadius: 6
    },
    textoBotaoProdutor: {
        fontSize: 16,
        lineHeight: 26,
        color: '#464646',
        fontWeight: '700',
        textAlign: "center",
        marginVertical: 16
    }
});