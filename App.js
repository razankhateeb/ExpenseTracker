import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import AllExpensesScreen from "./Screens/AllExpensesScreen";
import RecentExpensesScreen from "./Screens/RecentExpenses";
import Ionicons from "react-native-vector-icons/Ionicons";
import ManageExpenses from "./Screens/ManageExpenses";
import Colors from "./constants/Colors";
import IconButton from "./components/Ui/IconButton";
import { Provider } from "react-redux";
import store from "./store/store";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomNavigation({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary700 },
        headerTintColor: Colors.white,
        tabBarActiveTintColor: Colors.primary700,
        tabBarInactiveTintColor: Colors.gray300,
        headerRight: () => (
          <IconButton
            icon="ios-add"
            size={24}
            color={Colors.white}
            onPress={() => navigation.navigate("ManageExpenses")}
          />
        ),
      }}
    >
      <Tab.Screen
        name="RecenExpenses"
        component={RecentExpensesScreen}
        options={{
          title: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-hourglass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-calendar" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              gestureDirection: "vertical",
              headerStyle: { backgroundColor: Colors.primary700 },
              headerTintColor: Colors.white,
            }}
          >
            <Stack.Screen
              name="Bottom Navigation"
              component={BottomNavigation}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpenses}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
