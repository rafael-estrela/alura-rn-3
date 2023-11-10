import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';

import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    const screenOptions = ({ route }) => {
        return {
            headerShown: false,
            tabBarActiveTintColor: '#2A9F85',
            tabBarInactiveTintColor: '#C7C7C7',
            tabBarIcon: ({ color }) => {
                let Icon = Home;

                if (route.name === 'Melhores produtores') {
                    Icon = Coracao;
                }

                return <Icon color={color} width={16} height={16}/>;
            },
            tabBarLabelStyle: {
                fontSize: 16,
                lineHeight: 22
            }
        }
    };

    return <NavigationContainer>
        <Tab.Navigator screenOptions={ screenOptions }>
            <Tab.Screen name='Home' component={ ProdutorRotas } />
            <Tab.Screen name='Melhores produtores' component={ MelhoresProdutoresRotas } />
        </Tab.Navigator>
    </NavigationContainer>;
}