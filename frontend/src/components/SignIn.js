import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Recaptcha from 'react-grecaptcha';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles({
    root: {
      width: '80%',
    },
  });
  


export default function SignIn (props){
    const classes = useStyles();


    const [check, setCheck] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const signIn = useSelector(state => state.signIn);
    const {loading, error, userInfo} = signIn;
    const distpatch = useDispatch();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        distpatch(SignIn(username,password));
    }

    return(<div>
        <form action="/api/signin" method="GET" className="form" onSubmit={handleSubmit}>
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
                    <button disabled={check === false} className="btn-submit" type="submit" onClick={verifyCallback}>Sign In</button>
                </li>
            </ul>
        </form>

    </div>)
} 