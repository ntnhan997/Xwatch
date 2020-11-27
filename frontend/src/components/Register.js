import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
    input: {
        width: "200px",
        fontSize: 20,
        '& label.Mui-focused': {
            color: 'green',
            fontSize: 20
          },
          '& label':{
           fontSize: 14 
          }

    },
    resize:{
        fontSize:25
      },
});


export default function Register() {
    const [name,setName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [sex, setSex] = useState('');
    const [mail, setMail] = useState('');

    const classes = useStyles();

    return (
        <div className="register">
            <form className="form-register">
                <ul>
                     <li>
                        <TextField id="standard-basic" label="Họ và Tên" type="text" value={name} onChange={(e) => setName(e.target.value)} className={classes.input}  InputProps={{classes: {
                        input: classes.resize,
                        },}}/>  
                    </li>

                    <li>
                     <FormControl component="fieldset">
                        <FormLabel component="legend">Giới tính</FormLabel>
                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
                            <FormControlLabel
                            value="Nam"
                            control={<Radio color="primary"/>}
                            label="Nam"
                            labelPlacement="start"
                            onClick={(e) => setSex(e.target.value)}
                            />
                            <FormControlLabel
                            value="Nữ"
                            control={<Radio color="primary" />}
                            label="Nữ"
                            labelPlacement="start"
                            onClick={(e) => setSex(e.target.value)}
                            />
                        </RadioGroup>
                        </FormControl>
                    </li>
                    <li>
                        <TextField id="standard-basic" label="Tên đăng nhập" type="text" value={username} onChange={(e) => setUserName(e.target.value)} className={classes.input}  InputProps={{classes: {
              input: classes.resize,
            },}}/>  
                    </li>
                    <li>
                        <TextField id="standard-basic" label="Mât khẩu" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={classes.input}  InputProps={{classes: {
              input: classes.resize,
            },}}/>      
                    </li>
                    <li>
                        <TextField id="standard-basic" label="Nhập lại mật khẩu" type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} className={classes.input}  InputProps={{classes: {
              input: classes.resize,
            },}}/>      
                    </li>
                    <li>
                        <TextField id="standard-basic" label="Email" type="mail" value={mail} onChange={(e) => setMail(e.target.value)} className={classes.input}  InputProps={{classes: {
              input: classes.resize,
            },}}/>   
                    </li>
                </ul>
                <button type="submit" className="btn-register">Register</button>
            </form>
        </div>
    )
}