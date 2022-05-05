import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';


const Alert = () => {

  const [ show, setShow ] = useState(false)
   
  const ShowAlert = () => {
    setShow(true)
    console.log('OK');
  }
  const HideAlert = () => {
    setShow(false)
    console.log('NO');
  }
  return (
    <View style={{ width: '100%', height: '10%',justifyContent: 'center', alignItems: 'center'}}>
      <AwesomeAlert
          show={show}
          showProgress={false}
          title="AwesomeAlert"
          message="I have a message for you!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, show it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={
           HideAlert
          }
          onConfirmPressed={
            HideAlert
          }
        />

        <TouchableOpacity onPress={ShowAlert}>
          <Text> Try me !!!</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Alert