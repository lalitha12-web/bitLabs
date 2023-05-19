

import React from 'react'
import Signin from './Signin';

function Signout() {
    signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setloggedIn(false);
          setuserInfo([]);
        } catch (error) {
          console.error(error);
        }
      };
    
  return (
    <View>

    <Button onpress={signOut}>Sign out </Button>
    </View>
  )
}

export default Signout;


 