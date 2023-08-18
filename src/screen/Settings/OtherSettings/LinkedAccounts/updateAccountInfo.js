import React from 'react';
import { Text, View } from 'react-native';
import {
  ButtonView,
  HeaderView,
  HeadingView,
  InputView,
  ParentView,
} from '../../../../containers/FolderContainers';
import HeaderContainer from '../../../../containers/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Heading, SubText } from '../../../../components/Text';
import { InputText } from '../../../../components/Textinput';
import { Btn } from '../../../../components/Pressable';
import { themedefault } from '../../../../Theme';

const UpdateAccountInfo = ({route, navigation}) => {
  const Item = route.params.name;
  return (
    <ParentView>

      <HeaderView>
        <HeaderContainer
          back={<Ionicons name="chevron-back-sharp" size={25} />}
          backDisable={false}
          onPressBack={() => navigation.goBack()}
        />
      </HeaderView>

      <HeadingView>
        <Heading Htext={
            Item=='Website'?"What's your Website?":
            Item=='Blog'?"Share your thoughts\nwith Blog":
            Item=='Linkedin'?"What's your Linkedin?":
            Item=='Twitter'?"What's your\nTwitter Handle?":
            Item=='Facebook'?"What's your\nFacebook account?":
            Item=='Instagram'?"Whats your\nInstagram Handle?":
            Item=='Snapchat'?"What's your\nSnapchat Handle?":
            Item=='Skype'?"Share your Skype..":
            Item=='Behance'?"What's your Behance?":
            Item=='Bitbucket'?"Share your Bitbucket":
            Item=='Dribble'?"Dribble :)":
            Item=='Github'?"Share your Github":
            Item=='Google+'?"What's your\nGoogle +account":
            Item=='LINE'?"LINE handle?":
            Item=='Medium'?"Share your Medium info":
            Item=='Pinterest'?"What's your Pinterest Account":
            Item=='Reddit'?"What's your\nReddit account?":
            Item=='Telegram'?"What's your Telegram?":
            Item=='Tumblr'?"What's your Tumblr?":
            Item=='Twitch'?"What's your Twitch id?":
            Item=='Upwork'?"What's your Upwork id??":
            Item=='VK'?"What's your\nVK Account?":
            Item=='WeChat'?"What's your WeChat?":
            Item=='Whatsapp'?"What's your Telegram?":
            Item=='Yelp'?"What's your\nYelp account?":
            Item=='Youtube'?"What's your\nYoutube channel?":null
            }/>
      </HeadingView>

      <InputView>
      <View style={{ width:'100%', alignItems:'center', flexDirection:'row'}}>
      {Item=='Twitter'?<Text style={{fontSize:18, color:themedefault.colors.black,}} >@</Text>:null}
      <InputText placeholder={
        Item=='Website'?"https://":
        Item=='Blog'?"":
        Item=='Linkedin'?"":
        Item=='Twitter'?"":
        Item=='Twitter'?"":
        Item=='Facebook'?"":
        Item=='Instagram'?"":
        Item=='Snapchat'?"":
        Item=='Skype'?"":
        Item=='Behance'?"":
        Item=='Bitbucket'?"":
        Item=='Dribble'?"":
        Item=='Github'?"":
        Item=='Google+'?"":
        Item=='LINE'?"":
        Item=='Medium'?"":
        Item=='Pinterest'?"":
        Item=='Reddit'?"":
        Item=='Telegram'?"":
        Item=='Tumblr'?"":
        Item=='Twitch'?"":
        Item=='Upwork'?"":
        Item=='VK'?"":
        Item=='WeChat'?"":
        Item=='Whatsapp'?"":
        Item=='Yelp'?"":
        Item=='Youtube'?"":null
      } />
      </View>
      <SubText text={
        Item=='Website'?"Work or Personal Website":
        Item=='Blog'?"Blogs and Posts link":
        Item=='Linkedin'?"Linkedin Info":
        Item=='Twitter'?"Twitter Handle":
        Item=='Facebook'?"Facebook account":
        Item=='Instagram'?"Instagram Handle":
        Item=='Snapchat'?"Snapchat Account":
        Item=='Skype'?"Skype Username":
        Item=='Behance'?"Behance Account":
        Item=='Bitbucket'?"Bitbucked id":
        Item=='Dribble'?"Dribble account info":
        Item=='Github'?"Github link":
        Item=='Google+'?"Goggle+ id":
        Item=='LINE'?"Align with line":
        Item=='Medium'?"Medium blogs account info":
        Item=='Pinterest'?"Idea with pinterest":
        Item=='Reddit'?"reddit account":
        Item=='Telegram'?"Telegram number":
        Item=='Tumblr'?"Tumblr Handle":
        Item=='Twitch'?"Twitch Link":
        Item=='Upwork'?"Upwork Account":
        Item=='VK'?"VK Account":
        Item=='WeChat'?"Wechat number":
        Item=='Whatsapp'?"Whatsapp number":
        Item=='Yelp'?"yelp id":
        Item=='Youtube'?"your Youtube channel link":null


      } />
      </InputView>
      
      <ButtonView>
        <Btn title='Continue' onPress={()=>(navigation.goBack())}/>
      </ButtonView>
    </ParentView>
  );
};
export default UpdateAccountInfo;
