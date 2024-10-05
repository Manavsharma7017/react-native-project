import { useEffect, useState } from "react";
import { View,Text, Button } from "react-native";

export default function(){
    const [count ,setcount]=useState(0)
    useEffect(()=>{
       
        setInterval(()=>{
            setcount(count=>count+1)
        },1000
    )
 
    },[])
    return(
        <View>
          <Text>{count}</Text>
          <Button title="sign up"></Button>
        </View>
    )
}