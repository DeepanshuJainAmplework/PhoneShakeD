import React from "react";
import { ParentView, HeaderView } from "../../../containers/FolderContainers";
import HeaderContainer from "../../../containers/header";
import { Alert, Text, View , Switch} from "react-native";
import { SubText } from "../../../components/Text";
import { scale } from "react-native-size-matters";
import { SwitchToggle } from "../../../components/Switchtoggle";
import { s } from "react-native-size-matters";
const Notifications=({navigation})=>{
    return(
        <ParentView>
            <HeaderView>
                <HeaderContainer back='Cancel' onPressBack={()=>(navigation.goBack())} onpressSkip={()=>{Alert.alert('Notification settings\n saved successfully'); navigation.goBack();} } title='Notifications' SkipText='Save' borderbottomwidth={1}/>
            </HeaderView>
            <View style={{flex:0.95, width:'100%', alignItems:'center'}}>
            <SubText subtextstyle={{textAlign:'left', width:'93%', fontSize:s(12)}} text='WHEN ACCOUNT IS PRIVATE' />
                <View style={{flexDirection:'row',marginVertical:13, alignItems:'center',width:'93%'}}>
                    <Text style={{flex:1, fontSize:scale(16),}}>You receive a Contact Request</Text>
                    <SwitchToggle
                    />
                </View>
                <View style={{flexDirection:'row',marginVertical:13, alignItems:'center',width:'93%'}}>
                    <Text style={{flex:1, fontSize:scale(16),}}>Your Contact Request was accepted</Text>
                    <SwitchToggle
                    />
                </View>
                <SubText subtextstyle={{textAlign:'left', width:'93%', fontSize:s(12)}} text='WHEN ACCOUNT IS PUBLIC' />
                <View style={{flexDirection:'row',marginVertical:13, alignItems:'center',width:'93%'}}>
                    <Text style={{flex:1, fontSize:scale(16),}}>Your Contact was added</Text>
                    <SwitchToggle
                    />
                </View>
            </View>
        </ParentView>

    );
};

export default Notifications;