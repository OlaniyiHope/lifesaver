import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../component/intro/Intro';
import Topbar from '../component/topbar/Topbar';
import Identity from '../component/identity/Identity';
import Bank from '../component/bank/Bank';
import Debit from '../component/debit/Debit';
import Profile from '../component/personal/Personal';
import Top from '../component/top/Top';
import WithDraw from '../component/withdraw/WithDraw';
import Edit from '../component/edit/Edit';
import Welcome from '../component/welcome/Welcome';
import Thrift from '../component/thrift/Thrift';
import Bill from '../component/bill/Bill';
import Save from '../component/save/Save';
import Invest from '../component/invest/Invest';
import Sign from '../component/sign/Sign';
import Forgot from '../component/forgot/Forgot';
import Reset from '../component/reset/Reset';
import Change from '../component/change/Change';
import Total from '../component/total/Total';
import Your from '../component/your/Your';
import Proceed from '../component/proceed/Proceed';
import Name from '../component/name/Name';
import Verify from '../component/verify/Verify';
import Idv from '../component/idv/Idv';
import Has from '../component/has/Has';
import Unable from '../component/unable/Unable';
import Safe from '../component/safe/Safe';
import Finish from '../component/finish/Finish';
import Act from '../component/act/Act';
import Personal from '../component/personal/Personal';
import Update from '../component/update/Update';
import Two from '../component/two/Two';
import AddCard from '../component/addcard/AddCard';
import Debit1 from '../component/debit1/Debit1';
import Bank2 from '../component/bank2/Bank2';
import Bank3 from '../component/bank3/Bank3';
import Pid from '../component/pid/Pid';
import Pid2 from '../component/pid2/Pid2';
import Setrift from '../component/setrift/Setrift';
import Setrift2 from '../component/setrift2/Setrift2';
import Yourthrift from '../component/yourthrift/Yourthrift';
import Failed from '../component/failed/Failed';
import Airtime from '../component/airtime/Airtime';
import Method from '../component/method/Method';
import Success from '../component/success/Success';
import Data from '../component/data/Data';
import Elect from '../component/elect/Elect';
import Cable from '../component/cable/Cable';
import Inter from '../component/inter/Inter';
import Kin from '../component/kin/Kin';
import Kick from '../component/kick/Kick';
import Security from '../component/security/Security';
import Notify from '../component/notify/Notify';
import Invite from '../component/invite/Invite';
import Prefer from '../component/prefer/Prefer';
import Sell from '../component/sell/Sell';
import Fund from '../component/fund/Fund';
import Quick from '../component/quick/Quick';
import Phone1 from '../component/phone1/Phone1';
import Phone2 from '../component/phone2/Phone2';
import Target from '../component/target/Target';
import Phone3 from '../component/phone3/Phone3';
import Fundwith from '../component/fundwith/Fundwith';
import Total2 from '../component/total2/Total2';
import Kind from '../component/kind/Kind';
import What from '../component/what/What';
import Set from '../component/set/Set';
import Setsafedash from '../component/setsafedash/Setsafedash';
import Setsafedash2 from '../component/Setsafedash2/Setsafedash2';
import Total3 from '../component/total3/Total3';
import Uh from '../component/uh/Uh';
import Opps from '../component/opps/Opps';
import Phone4 from '../component/phone4/Phone4';
import Quicksafe from '../component/quicksafe/Quicksafe';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
      <Stack.Screen name='Thrift' component={Thrift} options={{headerShown:false}}/>
      <Stack.Screen name='Bill' component={Bill} options={{headerShown:false}}/>
      <Stack.Screen name='Save' component={Save} options={{headerShown:false}}/>
      <Stack.Screen name='Invest' component={Invest} options={{headerShown:false}}/>
      <Stack.Screen name='Sign' component={Sign} options={{headerShown:false}}/>
      <Stack.Screen name='Forgot' component={Forgot} options={{headerShown:false}}/>
      <Stack.Screen name='Reset' component={Reset} options={{headerShown:false}}/>
      <Stack.Screen name='Change' component={Change} options={{headerShown:false}}/>
      <Stack.Screen name='Your' component={Your} options={{headerShown:false}}/>
      <Stack.Screen name='Proceed' component={Proceed} options={{headerShown:false}}/>
      <Stack.Screen name='Name' component={Name} options={{headerShown:false}}/>
      <Stack.Screen name='Verify' component={Verify} options={{headerShown:false}}/>
      <Stack.Screen name='Idv' component={Idv} options={{headerShown:false}}/>
      <Stack.Screen name='Act' component={Act} options={{headerShown:false}}/>
      <Stack.Screen name='Fund' component={Fund} options={{headerShown:false}}/>
      <Stack.Screen name='Unable' component={Unable} options={{headerShown:false}}/>
      <Stack.Screen name='Edit' component={Edit} options={{headerShown:false}}/>
      <Stack.Screen name='Personal' component={Personal} options={{headerShown:false}}/>
      <Stack.Screen name='Update' component={Update} options={{headerShown:false}}/>
      <Stack.Screen name='Two' component={Two} options={{headerShown:false}}/>
      <Stack.Screen name="Debit1" component={Debit1} options={{headerShown:false}}/>
      <Stack.Screen name="Debit" component={Debit} options={{headerShown:false}}/>
      <Stack.Screen name="AddCard" component={AddCard} options={{headerShown:false}}/>
      <Stack.Screen name="Bank" component={Bank} options={{headerShown:false}}/>
      <Stack.Screen name="Sell" component={Sell} options={{headerShown:false}}/>
      <Stack.Screen name="Uh" component={Uh} options={{headerShown:false}}/>
      <Stack.Screen name="Opps" component={Opps} options={{headerShown:false}}/>
      <Stack.Screen name="Quicksafe" component={Quicksafe} options={{headerShown:false}}/>
      <Stack.Screen name="Bank2" component={Bank2} options={{headerShown:false}}/>
      <Stack.Screen name="Bank3" component={Bank3} options={{headerShown:false}}/>
      <Stack.Screen name="Pid" component={Pid} options={{headerShown:false}}/>
      <Stack.Screen name="Phone4" component={Phone4} options={{headerShown:false}}/>
      <Stack.Screen name="Prefer" component={Prefer} options={{headerShown:false}}/>
      <Stack.Screen name="Pid2" component={Pid2} options={{headerShown:false}}/>
      <Stack.Screen name="Total3" component={Total3} options={{headerShown:false}}/>
      <Stack.Screen name="Kin" component={Kin} options={{headerShown:false}}/>
      <Stack.Screen name="Invite" component={Invite} options={{headerShown:false}}/>
      <Stack.Screen name='Set' component={Set} options={{headerShown:false}} />
      <Stack.Screen name='Setsafedash2' component={Setsafedash2} options={{headerShown:false}} />
      <Stack.Screen name='Setsafedash' component={Setsafedash} options={{headerShown:false}} />
      <Stack.Screen name="Security" component={Security} options={{headerShown:false}}/>
      <Stack.Screen name="Notify" component={Notify} options={{headerShown:false}}/>
      <Stack.Screen name="Setrift2" component={Setrift2} options={{headerShown:false}}/>
      <Stack.Screen name="Setrift" component={Setrift} options={{headerShown:false}}/>
      <Stack.Screen name='What' component={What} options={{headerShown:false}}/>
      <Stack.Screen name='Kind' component={Kind} options={{headerShown:false}}/>
      <Stack.Screen name='Total2' component={Total2} options={{headerShown:false}}/>
      <Stack.Screen name='Fundwith' component={Fundwith} options={{headerShown:false}}/>
      <Stack.Screen name='Kick' component={Kick} options={{headerShown:false}}/>
      <Stack.Screen name='Finish' component={Finish} options={{headerShown:false}}/>
      <Stack.Screen name='Target' component={Target} options={{headerShown:false}}/>
      <Stack.Screen name='Yourthrift' component={Yourthrift} options={{headerShown:false}}/>
      <Stack.Screen name='Phone3' component={Phone3} options={{headerShown:false}}/>
      <Stack.Screen name='Failed' component={Failed} options={{headerShown:false}}/>
      <Stack.Screen name='Airtime' component={Airtime} options={{headerShown:false}}/>
      <Stack.Screen name='Method' component={Method} options={{headerShown:false}}/>
      <Stack.Screen name='Phone2' component={Phone2} options={{headerShown:false}}/>
      <Stack.Screen name='Phone1' component={Phone1} options={{headerShown:false}}/>
      <Stack.Screen name='Success' component={Success} options={{headerShown:false}}/>
      <Stack.Screen name='Data' component={Data} options={{headerShown:false}}/>
      <Stack.Screen name='Cable' component={Cable} options={{headerShown:false}}/>
      <Stack.Screen name='Elect' component={Elect} options={{headerShown:false}}/>
      <Stack.Screen name='Inter' component={Inter} options={{headerShown:false}}/>
      <Stack.Screen name='Has' component={Has} options={{headerShown:false}}/>
      <Stack.Screen name='Quick' component={Quick} options={{headerShown:false}}/>
      <Stack.Screen name='Total' component={Total} options={{headerShown:false}}/>
      <Stack.Screen name='Safe' component={Safe} options={{headerShown:false}}/>
      <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
      <Stack.Screen name="Topbar" component={Topbar} options={{headerShown:false}}/>
      <Stack.Screen name="Identity" component={Identity} options={{headerShown:false}}/>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
      <Stack.Screen name="Top" component={Top} options={{headerShown:false}}/>
      <Stack.Screen name="WithDraw" component={WithDraw} options={{headerShown:false}}/>
     
    </Stack.Navigator>
  );
}
export default MyStack;