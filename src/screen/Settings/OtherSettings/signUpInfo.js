import React from "react";
import { View } from "react-native";
import { HeaderView, ParentView } from "../../../containers/FolderContainers";
import HeaderContainer from "../../../containers/header";
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignUpInfo=()=>{
    return(
        <ParentView>
            <HeaderView>
                <HeaderContainer title='SignUp Info' borderbottomwidth={1} back={<Ionicons name="chevron-back-sharp" size={25} />}  />
            </HeaderView>
            <View style={{flex:0.95}}>
                
            </View>


        </ParentView>
    );
};

export default SignUpInfo;