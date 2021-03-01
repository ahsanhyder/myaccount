import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Account.module.css';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import axios from 'axios';
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";


export default function Account({ data }) {
	const [ orderData, setorderData ] = useState(data);
    const [cards, setCards] = useState(orderData.resbody);
	console.log("AddressCards",cards)

const handleDelete = () =>{
	
}

	return (
		<div className="">
			<div>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>
			{/* <div>
				<Link href="/addAddress">
					<div className="container-fluid">
						<div className={styles.btnDiv}>
							<div className={styles.addAddressbutton}>
								<AddIcon style={{ fontSize: '50px' }} />
							</div>
						</div>
					</div>
				</Link>
			</div>
			<div className="container-fluid">
			<div className={`row ${styles.centerMapImg}`}>
				<img src="./empty_address.png" alt="Empty Address Image" className={styles.emptyAdressImg} />
			</div>
			<div className={`row ${styles.centerMapImgDiv}`}> */}
				{/* <img src="./empty_address.png" alt="Empty Address Image" className={styles.emptyAdressImg} /> */}
			{/* <p className={styles.emptyAdressImgP}>We can't seem to locate you</p>
			<p className={styles.emptyAdressImgP}>Please add in your address</p>
			</div>
			</div> */}
			<div className="container-fluid py-2" style={{backgroundColor:"black", color:"white"}}>
    			<div className="row">
					<div className="col-2">
						<Link href='/account'>
							<KeyboardBackspaceRoundedIcon/>
						</Link>
					</div>
					<div className="col-8">
							<h5>Address</h5>
					</div>
    			</div>
			</div>
{cards.map((ele)=>{
	return(
<div className="container-fluid mt-3">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">{ele.first_name} {ele.last_name}</h5>
					<p class="card-text">{ele.address1}</p>
					<p class="card-text">{ele.city} {ele.province} {ele.zip}</p>
					<p class="card-text">Phone No. {ele.phone}</p>
					<div className="d-flex justify-content-between">
						<button type="button" class="btn btn-primary" style={{width:"80px", height:"40px"}}>Edit</button>
						<button type="button" class="btn btn-primary" style={{width:"80px", height:"40px"}} onClick={handleDelete}>Delete</button>
					</div>
				</div>
    		</div>
			</div>
	)
})}
			{/* <div className="container-fluid mt-3">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title"></h5>
					<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
					<div className="d-flex justify-content-between">
						<button type="button" class="btn btn-primary" style={{width:"80px", height:"40px"}}>Edit</button>
						<button type="button" class="btn btn-primary" style={{width:"80px", height:"40px"}}>Delete</button>
					</div>
				</div>
    		</div>
			</div> */}
			<div>
				<Link href="/addAddress">
					<div className="container-fluid fixed-bottom">
						<div className={styles.btnDiv2}>
							<div className={styles.addAddressbutton2}>
								<AddIcon style={{ fontSize: '30px' }} />
							</div>
						</div>
					</div>
				</Link>
			</div>
			
		</div>
	);
}


export async function getStaticProps() {
var config = {
  method: 'get',
  url: 'https://qa.api.sugarcosmetics.com/users/qa/getcustomersaddress?customer_id=2168277991507',
  headers: { 
    'authorization': 'n8rWAch1D3OIRmDIeCA9flEKdwMqpCLa', 
    'cache-control': 'no-cache', 
    'postman-token': '41ba837a-f7de-79c3-9144-f49c2d7a0213'
  }
};

let data = await axios(config)
.then(function (response) {
  return response.data;
})
.catch(function (error) {
  console.log(error);
});
return {
    props: {
        data
    }
};

	}
