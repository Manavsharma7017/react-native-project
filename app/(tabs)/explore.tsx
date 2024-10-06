import { Downloadpitcher } from "@/components/Bottomtab";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function explore(){
    const [pitcherloder,setpitcherloder]=useState(false)
    return<SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}> 
            <Text>exp</Text>
        <Button title="open" onPress={()=>{
          setpitcherloder(!pitcherloder)
        }}></Button>
        {pitcherloder?<Downloadpitcher onclose={()=>{setpitcherloder(false)}}></Downloadpitcher>:null}</View>
       
    </SafeAreaView>
}