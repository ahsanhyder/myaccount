import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router'
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
  const router = useRouter()
    const classes = useStyles();
    const [zipValue, setZipValue] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [country, setCountry] = useState('')
    const [firstName, setFirstName] = useState('')
    const [errors, setErrors] = useState({firstName:""})
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [checkbox, setCheckbox] = useState(false)


const handleChange =  (e) =>{
  setZipValue(e.target.value)
  // setFirstName(e.target.value)
  // setLastName(e.target.value)
  // setPhone(e.target.value)
  // setAddress1(e.target.value)
  setAddress2(e.target.value)
}

const handlefChange = (e) =>{
  // setFirstName(e.target.value)
  setErrors({firstName:""})
  setFirstName(e.target.value)
  let reg = new RegExp(/^\d*$/).test(e.target.value)
  if(!reg){
    setErrors({firstName:"Only Numbers are allowed !"})
  }

}

const handlelChange = (e) =>{
  setLastName(e.target.value)
}

const handlephnChange = (e) =>{
  setPhone(e.target.value)
}

const handleadd1Change = (e) =>{
  setAddress1(e.target.value)
}

const handleadd2Change = (e) =>{
  setAddress2(e.target.value)
}

const handleCheckBox = (e) =>{
  setCheckbox(true)
}

 const handleDetails = () => {
console.log(zipValue)
  var config = {
    method: 'get',
    url: 'https://qa.api.sugarcosmetics.com/pincode/qa/getPincodeDetails?pincode=' + zipValue,
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log("detailData",response.data)
    setCity(response.data.resbody.city)
    setProvince(response.data.resbody.province)
    setCountry(response.data.resbody.country)
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });

 }

const handleAddaddress = () => {
var data = {
  customer_id: 2168277991507,
  address1: address1,
  address2: address2,
  first_name: firstName,
  last_name: lastName,
  phone: phone,
  zip: zipValue,
  city: city,
  province: province,
  country: country,
  default:checkbox
};

var config = {
  method: 'post',
  url: 'https://qa.api.sugarcosmetics.com/users/qa/createaddress',
  headers: { 
    'Content-Type': ' application/json', 
    'Authorization': ' n8rWAch1D3OIRmDIeCA9flEKdwMqpCLa', 
    'os_type': ' 1', 
    'version': ' 53'
  },
  data : data
};

axios(config)
.then(function (response) {
  router.push('/address')
  return response.data;
})
.catch(function (error) {
  console.log(error);
});

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
          name="fname"
          fullWidth
          margin="normal"
          required="true"
          inputProps={{maxLength :30}}
          onChange={handlefChange}
          error={Boolean(errors?.firstName)}
          helperText={(errors?.firstName)}
        />
</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Last Name"
          fullWidth
          margin="normal"
          required="true"
          inputProps={{maxLength :30}}
          onChange={handlelChange}
        />
</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Phone number"
          fullWidth
          margin="normal"
          required="true"
          inputProps={{maxLength :10}}
          onChange={handlephnChange}
        />
</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Address Line 1"
          fullWidth
          margin="normal"
          required="true"
          inputProps={{maxLength :300}}
          onChange={handleadd1Change}
        />
</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Address Line 2"
          fullWidth
          margin="normal"
          required="true"
          inputProps={{maxLength :300}}
          onChange={handleadd2Change}
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
          required="true"
          inputProps={{maxLength :6}}
          onChange={handleChange} 
        />
        </div>
        <div className="col-5">
        <button type="button" className={`btn ${styles.btnRounded}`} onClick={() => handleDetails(zipValue)}>Get Details</button>

        </div>
    </div>

</div>

<div className="container-fluid my-4">
  
<TextField
          id="standard-full-width"
          style={{ margin: 8,backgroundColor:"pink",color:"black" }}
          placeholder="City"
          fullWidth
          margin="normal"
          value={city}
          disabled="true"
          required="true"
        />
</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8,backgroundColor:"pink" }}
          placeholder="State/Province"
          fullWidth
          margin="normal"
          value={province}
          disabled="true"
          required="true"

        />
</div>
<div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8,backgroundColor:"pink" }}
          placeholder="Country"
          fullWidth
          margin="normal"
          value={country}
          disabled="true"
          required="true"
        />
</div>
<div className="container-fluid" style={{marginBottom:"25%"}}>
    <FormControlLabel
          control={<Checkbox color="success" />}
          label="Set as default address"
          labelPlacement="end"
          onClick={handleCheckBox}
        />
    </div>
    <div className={styles.btnDiv}>
    <button type="button" className={`btn fixed-bottom ${styles.btnFlat}`} onClick={handleAddaddress}>SAVE</button>

    </div>

</div>
	);
}
