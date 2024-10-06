import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Suggested from '../foryoutopbar/Suggested';
import Library from '../foryoutopbar/Library';
import Liked from '../foryoutopbar/Liked';
const Tab = createMaterialTopTabNavigator();

export default function foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name='Suggested' component={Suggested}/>
    </Tab.Navigator>
  );
}