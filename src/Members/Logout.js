import React, {Component} from 'react';
import { auth } from '../firebase_config';

class Logout extends Component{
    render(){
        return (
            <button onClick={() => {
                auth.signOut();
                console.log('로그아웃 합니다');
            }}>EXIT</button>
        );
    }
}

export default Logout;
