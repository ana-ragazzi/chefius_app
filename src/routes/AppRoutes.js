import Layout from "../../src/components/layouts/Layout/Layout.jsx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "../../src/components/screens/Chat/Chat.jsx";
import Receitas from "../../src/components/screens/Receitas/Receitas.jsx";
import Home from "../../src/components/screens/Home/Home.jsx";
import Config from "../../src/components/screens/Config/Config.jsx";
import Health from "../../src/components/screens/Health/Health.jsx";
import PrefAcompanhamento from "../../src/components/screens/PrefAcompanhamento/PrefAcompanhamento.jsx";
import Restaurantes from "../../src/components/screens/Restaurantes/Restaurantes.jsx";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
        <Layout>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
              contentStyle: {
                backgroundColor: "transparent",
                padding: 0,
                margin: 0
              },
              animation: 'none'
            }}
          >
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Restaurantes" component={Restaurantes} />
            <Stack.Screen name="PrefAcompanhamento" component={PrefAcompanhamento} />
            <Stack.Screen name="Receitas" component={Receitas} />
            <Stack.Screen name="Health" component={Health} />
            <Stack.Screen name="Config" component={Config} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </Layout>
  );
}
