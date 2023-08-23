import React from "react";
import { View, TouchableOpacity, Text} from "react-native";
import { HeaderView, ParentView } from "../../../containers/FolderContainers";
import HeaderContainer from "../../../containers/header";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Storage } from "../../../navigation/StackNavigation";
import { StackActions } from "@react-navigation/native";

const SignUpInfo=({navigation})=>{
    return(
        <ParentView>
            <HeaderView>
                <HeaderContainer title='SignUp Info' borderbottomwidth={1} back={<Ionicons name="chevron-back-sharp" size={25} />}  />
            </HeaderView>
            <View style={{flex:0.95}}>
                <TouchableOpacity onPress={()=>{Storage.clearAll(); }}>
                    <Text>
                        delete Account
                    </Text>

                </TouchableOpacity>
                
            </View>


        </ParentView>
    );
};

export default SignUpInfo;