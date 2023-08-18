import React from "react";
import { Alert, View } from "react-native";
import { HeaderView, ParentView } from "../../../containers/FolderContainers";
import HeaderContainer from "../../../containers/header";
import { SearchInput } from "../../../components/Textinput";
import { InputText } from "../../../components/Textinput";

const Address=({navigation})=>{
    return(
        <ParentView>
            <HeaderView>
                <HeaderContainer borderbottomwidth={1} back='Cancel' SkipText='Done' title='Edit Address'  onPressBack={()=>(navigation.goBack())} onpressSkip={()=>{navigation.goBack(); Alert.alert('Address Updated')}} />

            </HeaderView>
            <View style={{flex:0.95, width:'95%', height:11}}>
                <SearchInput placeholder='Search Address' />

            </View>


        </ParentView>
    );
};

export default Address;