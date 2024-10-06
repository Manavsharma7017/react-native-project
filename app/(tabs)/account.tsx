
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function accountinfo(){
    return<SafeAreaView>
        <Text>account</Text>
     <Link href={"/accountinfo"}><Text>acc</Text></Link>
    </SafeAreaView>
}