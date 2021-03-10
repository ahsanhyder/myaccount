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

export default function Account({ data , handleBack}) {
    const router = useRouter()
	// console.log('addAddressPage', data);
    const [ orderData, setorderData ] = useState(data);
	const [cards, setCards] = useState(data)
    console.log('addAddressPageCards', cards);
console.log("cardsRequired",cards)
    const classes = useStyles();
    const [zipValue, setZipValue] = useState(cards[0].zip)
    const [city, setCity] = useState(cards[0].city)
    const [province, setProvince] = useState(cards[0].province)
    const [country, setCountry] = useState(cards[0].country)
    const [firstName, setFirstName] = useState(cards[0].first_name)
    const [lastName, setLastName] = useState(cards[0].last_name)
    const [phone, setPhone] = useState(cards[0].phone)
    const [address1, setAddress1] = useState(cards[0].address1)
    const [address2, setAddress2] = useState(cards[0].address2)
    const [checkbox, setCheckbox] = useState(false)

const handleChange =  (e) =>{
  setZipValue(e.target.value)
}

const handlefChange = (e) =>{
  setFirstName(e.target.value)
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

const handleEditaddress = (id) => {
    console.log("hello")
var data = {
  customer_id: 2168277991507,
  id:id,
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
    method: 'put',
    url: 'https://qa.api.sugarcosmetics.com/users/qa/updateaddress',
    headers: { 
      'Authorization': ' n8rWAch1D3OIRmDIeCA9flEKdwMqpCLa', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  console.log("resdata",data)
  axios(config)
  .then(function (response) {
      console.log("res",response
      )
      router.push('/address')
    return response;
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
						{/* <Link href='/address'> */}
							<KeyboardBackspaceRoundedIcon onClick={handleBack}/>
						{/* </Link> */}
					</div>
					<div className="col-8">
							<h5>Address</h5>
					</div>
    			</div>
			</div>
 {cards.map((elem)=>{
    return(
                <> 
                    <div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="First Name"
        //   name={elem.first_name}
          fullWidth
          margin="normal"
          required="true"
          value={firstName}
          inputProps={{maxLength :30}}
          onChange={handlefChange}
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
          value={lastName}
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
          value={phone}
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
          value={address1}
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
          value={address2}
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
          value={zipValue}
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
    <button type="button" className={`btn fixed-bottom ${styles.btnFlat}`} onClick={()=>handleEditaddress(elem.id)}>SAVE</button>

    </div>

                 </>
    )
})} 
{/* <div className="container-fluid my-4">
<TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="First Name"
          name="fname"
          fullWidth
          margin="normal"
          required="true"
          onChange={handlefChange}
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
        />
    </div>
    <div className={styles.btnDiv}>
    <button type="button" className={`btn fixed-bottom ${styles.btnFlat}`} onClick={handleAddaddress}>SAVE</button>

    </div> */}

</div>
	);
}
