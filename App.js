import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PrefProvider } from "./src/components/hooks/usePref.jsx";
import { AuthProvider } from "./src/components/hooks/useAuth.jsx";
import Routes from "./src/routes/index.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PrefProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </PrefProvider>
    </NavigationContainer>
  );
}
