import React from "react";
import { View, SectionList , TouchableOpacity, Text} from "react-native";
import { HeaderView, ParentView } from "../../../../containers/FolderContainers";
import HeaderContainer from "../../../../containers/header";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DATA } from "./LinkedAccountList";
import { ForwardIcon } from "../../../../components/Image";
import style from "../../SettingsList/Styles";
import { LinkedListIcons } from "../../../../components/Image";
import { LinkedAccountsFooter } from "../../SettingsList/SectionFooter";


const LinkedAccounts=({navigation})=>{
    return(
        <ParentView>
            <HeaderView>
                <HeaderContainer back={<Ionicons name="chevron-back-sharp" size={25} />} onPressBack={()=>(navigation.goBack())} title='Linked Accounts' borderbottomwidth={1} />
            </HeaderView>
            <View style={{flex:0.95,}}>
                <SectionList 
                sections={DATA}
                keyExtractor={(item,index)=>item+index}
                renderSectionHeader={({section:{title}})=>(
                    <Text style={style.TitleText}>{title}</Text>
                )}
                renderItem={({item})=>(
                    
                    <TouchableOpacity onPress={()=>(navigation.navigate('updateAccountInfo',{name:item.label}))}>
                    <View style={[style.itemView,{width:'100%'}]}>
                        <LinkedListIcons sourceimage={item.image} />
                        <Text style={[style.ItemText,{marginLeft:8}]} >{item.label}</Text>
                        <Text style={style.Itemid}>{item.value}</Text>
                        <ForwardIcon />
                    </View>
                    </TouchableOpacity>
                )}
                stickySectionHeadersEnabled={false}
                ListFooterComponent={<LinkedAccountsFooter />}
                
                />
                
            </View>

        </ParentView>
    )
}
export default LinkedAccounts;