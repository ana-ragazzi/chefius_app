import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Initial from "../../src/components/screens/Initial/Initial.jsx";
import Login from "../components/screens/Auth/Login/Login.jsx";
import LoginEmail from "../components/screens/Auth/LoginEmail/LoginEmail.jsx";
import Cadastro from "../components/screens/Auth/Cadastro/Cadastro.jsx";
import Etapa1 from "../components/screens/Auth/Etapa1/Etapa1.jsx";
import Etapa2 from "../components/screens/Auth/Etapa2/Etapa2.jsx";
import Etapa3 from "../components/screens/Auth/Etapa3/Etapa3.jsx";
import Etapa4 from "../components/screens/Auth/Etapa4/Etapa4.jsx";
import CadastroEmail from "../components/screens/Auth/CadastroEmail/CadastroEmail.jsx";

const Stack = createNativeStackNavigator();

export default function InitialRoutes() {
  return (
          <Stack.Navigator
            initialRouteName="Initial"
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
            <Stack.Screen name="Initial" component={Initial} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="LoginEmail" component={LoginEmail} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="CadastroEmail" component={CadastroEmail} />
            <Stack.Screen name="Etapa1" component={Etapa1} />
            <Stack.Screen name="Etapa2" component={Etapa2} />
            <Stack.Screen name="Etapa3" component={Etapa3} />
            <Stack.Screen name="Etapa4" component={Etapa4} />
          </Stack.Navigator>
  );
}
