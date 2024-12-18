import {ImageBackground,  StatusBar,  View } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, InputComponent, } from '../../components'
import { Email, Login, Login2, } from '../../assets/svg'
import { Lock} from 'iconsax-react-native'
import { appInfos } from '../../constants/appInfos'
import SpaceComponent from '../../components/SpaceComponent'
import { appColor } from '../../constants/appClor'
import ToggleSwitch from 'toggle-switch-react-native'

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const handleLogin = async () => {
    const api = `http://192.168.107.248:3001/hello`;
    try {
      const res = await fetch(api, {
        method: 'get'
      })

      console.log(res)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'}/>
      <ImageBackground
        style = {{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        source={require('../../assets/image/SinhVien_Login.png')}>
        <View
         style = {{
          flex: 5.5,
          width: appInfos.size.WIDTH * 0.7 ,
          marginTop: 100,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
          }}
        >
          <SpaceComponent width={10}/>
           <ToggleSwitch
              isOn={isEnabled}
              onColor= {appColor.blue}
              icon = { !isEnabled ? <Login/> : <Login2/>}
              thumbOffStyle={{
                backgroundColor: appColor.blue,  
                width: 30,               
                height: 30,            
                borderRadius: 15,
                marginTop: 10,        
              }}
              thumbOnStyle={{
                backgroundColor: appColor.yellow, 
                width: 30,               
                height: 30,              
                borderRadius: 15,        
              }}
              offColor= {appColor.white}
              size='large'
              onToggle={() => setIsEnabled(!isEnabled)}
           />
        </View>
        <View  
        style = {{
          flex: 5.5,
          width: appInfos.size.WIDTH,
          height: appInfos.size.HEIGHT * 0.5,
          alignItems: 'center',
          }}>
        <InputComponent
          icon_affix = {<Email/>}
            value = {email}
            onChange={val => setEmail(val)}
            placeHolder='email'
            allowClear
        />
        <SpaceComponent height={20} width={20}/>
        <InputComponent
            icon_affix = {<Lock variant="Bold"/>}
            value = {password}
            onChange={val => setPassword(val)}
            placeHolder='password'
            isPassWord
        />
          <SpaceComponent height={20}/>
          <ButtonComponent text='Đăng Nhập' type='primary'onPress={() => navigation.navigate('TabGVNavigatior')}/>
          <ButtonComponent text='Quên mật khẩu' type='link' 
          onPress={() => navigation.navigate('EmailAdressScreen')}
          />
        </View>


      </ImageBackground>
    </>
  )
}

export default LoginScreen