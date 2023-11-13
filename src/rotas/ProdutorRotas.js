import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../telas/Home';
import Produtor from "../telas/Produtor";
import Cesta from "../telas/Cesta";
import Pedido from "../telas/Pedido";

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({ component = Home }) {
    const screenOptions = {
        headerShown: false
    };

    return <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Produtores" component={ component } />
        <Stack.Screen name="Produtor" component={ Produtor } />
        <Stack.Screen name="Cesta" component={ Cesta } />
        <Stack.Screen name="Pedido" component={ Pedido } />
    </Stack.Navigator>
}