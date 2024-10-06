import { Slot } from "expo-router";
import { View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Rootlayout(){
    return (
        <SafeAreaView>
            <View><Text>manav</Text></View>
            <Slot></Slot>
        </SafeAreaView>

    )
}