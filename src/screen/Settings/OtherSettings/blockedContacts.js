import React from "react";
import { Alert, View } from "react-native";
import { HeaderView, ParentView } from "../../../containers/FolderContainers";
import HeaderContainer from "../../../containers/header";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Heading } from "../../../components/Text";

const BlockedContacts=({navigation})=>{
    return(
        <ParentView>
            <HeaderView>
                <HeaderContainer borderbottomwidth={1} title='  Blocked Contacts' onPressBack={()=>(navigation.goBack())} back='Cancel' onpressSkip={()=>{navigation.goBack(); Alert.alert('Settings Saved')} } SkipText='Save'/>
            </HeaderView>
            <View style={{flex:0.95}}>
                <Heading t />

            </View>

        </ParentView>
    );
};

export default BlockedContacts;