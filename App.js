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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function addExpenseHandler() {
  console.log("add expense");
}
function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary700 },
        headerTintColor: "#fff",
        tabBarActiveTintColor: Colors.primary700,
        tabBarInactiveTintColor: "#adabab",
        headerRight: () => (
          <Ionicons
            name="ios-add"
            size={24}
            color={"#fff"}
            onPress={addExpenseHandler}
            style={styles.addButton}
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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Navigation"
            component={BottomNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Manage Expenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    marginRight: 18,
    fontWeight: "bold",
  },
});
