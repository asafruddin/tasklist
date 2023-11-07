import { createStackNavigator } from "@react-navigation/stack"
import TaskListPage from "./pages/TaskListPage";
import TaskFormPage from "./pages/TaskFormPage";
import AuthenticationPage from "./pages/AuthenticationPage";

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="AuthenticationPage">
            <Stack.Screen component={AuthenticationPage} name="AuthenticationPage" options={{ headerTitle: 'Authentication' }} />
            <Stack.Screen component={TaskListPage} name="TaskListPage" options={{ headerTitle: 'List Task' }} />
            <Stack.Screen component={TaskFormPage} name="TaskFormPage" options={{ headerTitle: 'Form Page' }} />
        </Stack.Navigator>
    )
}

export default MainNavigation;