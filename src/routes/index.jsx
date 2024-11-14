import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppRoutes from "./AppRoutes.js";
import InitialRoutes from "./InitialRoutes.js";
import { useAuth } from "../components/hooks/useAuth.jsx";

const Stack = createNativeStackNavigator();

export default function Routes() {
    const { logged } = useAuth(); // Obtém o valor de 'logged' do contexto

    return (
        <>
            {
                logged
                    ? <AppRoutes />
                    : <InitialRoutes />
            }
        </>
    );
}
