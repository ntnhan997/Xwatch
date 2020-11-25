import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: "100px",
    },
  });

export default function SignIn (){
    const classes = useStyles();
    return(<div>
        <form action="" className="form">
            <ul className="box-form">
                <li>
                    <TextField id="standard-basic" className={classes.root} label="User Name" size="normal"/>
                </li>
                <li>
                    <TextField
                        fullWidth
                        className={classes.root}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </li>
                <li>
                    <button className="btn-submit" type="submit">Sign In</button>
                </li>
            </ul>
        </form>

    </div>)
} 