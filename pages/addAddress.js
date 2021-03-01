import Head from 'next/head';
import { useState } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from '../styles/Account.module.css';
import Link from 'next/link'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      width: '25ch',
    },
  }));

export default function Account({ data }) {
	console.log('addAddressPage');
    const classes = useStyles();
 const handleDetails = () => {
   
 }

	return (
		<div className="">
			<div>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>

      <div className="container-fluid py-2" style={{backgroundColor:"black", color:"white"}}>
    			<div className="row">
					<div className="col-2">
						<Link href='/address'>
							<KeyboardBackspaceRoundedIcon/>
						</Link>
					</div>
					<div className="col-8">
							<h5>Address</h5>
					</div>
    			</div>
			</div>

<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="First Name"
          fullWidth
          margin="normal"
        />
</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Last Name"
          fullWidth
          margin="normal"
        />
</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Phone number"
          fullWidth
          margin="normal"
        />
</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Address Line 1"
          fullWidth
          margin="normal"
        />
</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Address Line 2"
          fullWidth
          margin="normal"
        />
</div>
<div className="container-fluid my-4">
    <div className="row">
        <div className="col-7">
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Pincode"
          fullWidth
          margin="normal"
        />
        </div>
        <div className="col-5">
        <button type="button" className={`btn ${styles.btnRounded}`} onClick={handleDetails}>Get Details</button>

        </div>
    </div>

</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8,backgroundColor:"pink" }}
          placeholder="City"
          fullWidth
          margin="normal"
          disabled="true"
        ></TextField>
</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8,backgroundColor:"pink" }}
          placeholder="State/Province"
          fullWidth
          margin="normal"
          disabled="true"
        ></TextField>
</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8,backgroundColor:"pink" }}
          placeholder="Country"
          fullWidth
          margin="normal"
          disabled="true"
        ></TextField>
</div>
<div className="container-fluid" style={{marginBottom:"25%"}}>
    <FormControlLabel
          control={<Checkbox color="success" />}
          label="Set as default address"
          labelPlacement="end"
        />
    </div>
    <div className={styles.btnDiv}>
    <button type="button" className={`btn fixed-bottom ${styles.btnFlat}`}>SAVE</button>

    </div>

</div>
	);
}
