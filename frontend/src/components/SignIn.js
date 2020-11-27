import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Recaptcha from 'react-grecaptcha';
import { useDispatch, useSelector } from 'react-redux';
import {signin} from "../actions/userAction"; 





export default function SignIn (props){

    const useStyles = makeStyles({
        root: {
          width: '80%',
        },
      });

    const dispatch = useDispatch();
    const classes = useStyles();

    const [check, setCheck] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const signIn = useSelector(state => state.signIn);
    const {userInfo} = signIn;
    

    const verifyCallback = res => {
        if(typeof(res) == 'string'){
            setCheck(!check);
        }
        
        // if(res){
        //     alert("ban la nguoi");
        // }else{
        //     alert("sdsd");
        // }
    }

    const expiredCallback = () =>{

    }

    useEffect(() => {
        
        if(userInfo){
            props.history.push('/');
        }
        return () => {

        }
    }, [userInfo]);

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(signin(username,password));
    }

    return(<div>
        <form className="form" onSubmit={submitHandler}>
            <ul className="box-form">
                <li>
                    <TextField id="standard-basic" className={classes.root} label="User Name" size="medium" value={username} onChange={(e) => setUserName(e.target.value) }/>
                </li>
                <li>
                    <TextField
                        fullWidth
                        className={classes.root}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        value={password}
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </li>
                <Recaptcha 
                    sitekey="6LdMBe4ZAAAAAAXrhqRTW6hhpbNjBjzjD9TYiDKf" 
                    callback={verifyCallback}
                    expiredCallback={expiredCallback}
                    locale="vi"
                    />
                <br/>
                <li>
                    <button disabled={check === false} className="btn-submit" type="submit">Sign In</button>
                </li>
            </ul>
        </form>

    </div>)
} 