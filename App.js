import react from 'react'
//import ArrayMap from './array-map';
//import ColumnItem from './column-item';
//import RowItem from './row-item';
//import LayoutItem from './Layout-item';
//import Question from './Question';
//import Image from './image';
//import ButtonDemo from './button-demo';
//import ButtonStateDemo from './button-state-demo';
//import TextInputDemo from './text-input-demo';
//import ImageDemo from './image-demo';
//import Bmi from './bmi';
//import TouchableDemo from './touchable-demo';
import List from './List';
import Subject from './Subject';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/*import Home from './home';
import About from './About';
import Contact from './contact';*/

export default function App() {
  const Stack = createStackNavigator()
  return (
      //[<Question/>,<Image/>,<LayoutItem/>]
      //<ButtonDemo/>
      //<ButtonStateDemo/>
      //<TextInputDemo/>
      //<ImageDemo/>
      //<Bmi/>
      //<TouchableDemo/>
      /*<NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home}
          options={{headerTitle: 'หน้าแรก', headerBackTitle:''}}
          />
          <Stack.Screen name="About" component={About}
          options={{headerTitle: 'เกี่ยวกับ', headerBackTitle:'หน้าแรก'}}
          />
          <Stack.Screen name="Contact" component={Contact}
          options={{headerTitle: 'ข้อมูลส่วนตัว', headerBackTitle:'หน้าแรก'}}
          />

        </Stack.Navigator>
      </NavigationContainer>*/
      <NavigationContainer>
        <Stack.Navigator initialRouteName='List'>
          <Stack.Screen name="List" component={List}
          options={{headerTitle: 'หน้าแรก', headerBackTitle:''}}
          />
          <Stack.Screen name="Subject" component={Subject}
          options={{headerTitle: 'รายละเอียดสินค้า', headerBackTitle:''}}
          />

        </Stack.Navigator>
      </NavigationContainer>

  );
}