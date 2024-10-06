import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function layout(){
    return<GestureHandlerRootView>
        <Slot></Slot>
    </GestureHandlerRootView>
}