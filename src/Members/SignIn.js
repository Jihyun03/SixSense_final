import 'firebase/firestore';
import 'firebase/auth';
import { signInWithGoogle } from '../firebase_config';
import { auth } from '../firebase_config';

function GoogleSignin(props){

    auth.onAuthStateChanged(user => {
    // user.currentUser 를 통해 현재 로그인 중인 사용자에 대한 정보를 이용할 수 있습니다.
    // ex) user.currentUser.email , user.currentUser.displayName .. etc
    
      if(user !== null){;
        console.log('로그인되었습니다.');
      }
    })

    return (
      <div>
        <button onClick={signInWithGoogle}>LogIn</button>
      </div>
    )
}

export default GoogleSignin;