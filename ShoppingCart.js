import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  DrawerItems
} from "react-navigation";
import HomeScreen from "./containers/HomeScreen";
import ElectronicsScreen from "./containers/ElectronicsScreen";
import BooksScreen from "./containers/BooksScreen";
import ShoppingCartIcon from "./containers/ShoppingCartIcon";
import CartScreen from "./containers/CartScreen";
import PointsScreen from "./containers/PointsScreen";
import LogOutScreen from "./containers/LogOutScreen";
import BillScreen from "./containers/BillScreen";
import QrScreen from "./containers/QrScreen";
//import HistorytScreen from "./containers/HistoryScreen";
//import { Left, Right, Icon } from "native-base";
//import Bill from "./containers/Bill";


class ShoppingCart extends Component {
  render() {
    return <AppDrawerNavigator />;
  }
}
export default ShoppingCart;

/*const AppDrawerNavigator = createDrawerNavigator({ 
    Homex: AppStackNavigator,
    
})


/*const AppSwitchNavigator = createSwitchNavigator({
    rout1:AppStackNavigator,
})*/

const custom = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150 }}>
 
      <ImageBackground
        source={{
          uri:
            "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX16850183.jpg"
        }}
        style={styles.container}
      >
      <View  style={{ height: 125, width: 125, borderRadius: 80 ,backgroundColor:'black', alignItems: "center",justifyContent: "center"}}>
      <Image
          source={require("./images/cart.jpg")}
          style={{ height: 120, width: 120, borderRadius: 60 }}
        />
      </View>
        
        <Text style={{ fontWeight: "bold" }}>Chanduka Samarasinghe</Text>
      </ImageBackground>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen,
    qr: QrScreen,
    points:PointsScreen,
    
    bill: BillScreen,
   
    logout: LogOutScreen

    //bill:BillScreen
  },
  {
    navigationOptions: {
      headerTitle: "            welcome to Elysium",
      headerRight: <ShoppingCartIcon />
      //headerRight:"Left"
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    ProFile: AppStackNavigator,
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen,
    QrCode: QrScreen,
    points:PointsScreen,
    
    bill: BillScreen,
   
    logout: LogOutScreen
  },
  {
    contentComponent: custom,
    contentOptions: {
      activeTintColor: "orange"
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
