import React from "react";
import { ParentView, HeaderView } from "../../../containers/FolderContainers";
import HeaderContainer from "../../../containers/header";
import { Alert, Text, View , Switch} from "react-native";
import { SubText } from "../../../components/Text";
import { scale } from "react-native-size-matters";
import { SwitchToggle } from "../../../components/Switchtoggle";
const PrivateAccount=({navigation})=>{
    return(
        <ParentView>
            <HeaderView>
                <HeaderContainer back='Cancel' onPressBack={()=>(navigation.goBack())} onpressSkip={()=>{Alert.alert('Privacy Enabled'); navigation.goBack();} } title='Private Account' SkipText='Save' borderbottomwidth={1}/>
            </HeaderView>
            <View style={{flex:0.95, width:'100%', alignItems:'center'}}>
                <View style={{flexDirection:'row',marginVertical:10, alignItems:'center',width:'93%'}}>
                    <Text style={{flex:1, fontSize:scale(16),}}>Privacy Poilicy</Text>
                    <SwitchToggle

                    />
                </View>
                <SubText subtextstyle={{textAlign:'left'}} text='When your account is private, only people you approve can add and access your contact information on Phoneshake. Contacts who have already added you to their list won’t be affected.' />

            </View>
        </ParentView>

    );
};

export default PrivateAccount;