import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Account.module.css';
import PinDropIcon from '@material-ui/icons/PinDrop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PaymentIcon from '@material-ui/icons/Payment';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Link from 'next/link'
import axios from 'axios';

export default function Account({ data }) {
	console.log('accountPage');

const handleOrders = () =>{
var data = '';

var config = {
  method: 'get',
  url: 'https://qa.api.sugarcosmetics.com/orders/qa/getOrders?offset=0&limit=20&customer_id=2168277991507',
  headers: { 
    'Authorization': ' JdUZM1KDVeCyb6oy73oPrEZqlJwpl0mR'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

}

	return (
		<div className={styles.main}>
			<div>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>
			<div className="">
				<div className={styles.ProfileDiv}>
					<div className={styles.card}>
						<div style={{ display: 'flex', padding: '22px' }}>
							<img
								class="card-img-top"
								src="http://www.gstatic.com/tv/thumb/persons/582791/582791_v9_ba.jpg"
								alt="Card image cap"
								style={{ width: '100px', height: '100px', borderRadius: '50%' }}
							/>
							<div class="card-body">
								<h3 class="card-title">Ahsan Hyder</h3>
								<h6 class="card-title">+917899074550</h6>
								<h6 class="card-title">abcde@gmail.com</h6>
							</div>
						</div>
					</div>
				</div>
				<br />
				<div className="">
					<ul class="list-group">
						<li
							class="list-group-item d-flex justify-content-between align-items-center"
							style={{ padding: '31px', fontSize: '22px' }}
						>
							<span>
								<ListAltOutlinedIcon
									style={{ fontSize: 35, marginRight: '10px', marginLeft: '-10px' }}
								/>
								<span style={{ fontSize: '22px'}}>Orders</span>
							</span>
							<Link href=''><KeyboardArrowRightIcon style={{ fontSize:32 }} onClick={handleOrders}/></Link>
						</li>
						<li
							class="list-group-item d-flex justify-content-between align-items-center font-weight-bold"
							style={{ padding: '31px', fontSize: '22px' }}
						>
							<span>
								<PinDropIcon style={{ fontSize: 35, marginRight: '10px', marginLeft: '-10px' }} />
								<span style={{ fontSize: '22px' }}>Addresses</span>
							</span>
							<Link href='/address'><KeyboardArrowRightIcon style={{ fontSize:32 }} /></Link>
						</li>
						<li
							class="list-group-item d-flex justify-content-between align-items-center"
							style={{ padding: '31px', fontSize: '22px' }}
						>
							<span>
								<FavoriteBorderIcon
									style={{ fontSize: 35, marginRight: '10px', marginLeft: '-10px' }}
								/>
								<span style={{ fontSize: '22px' }}>WishList</span>
							</span>
							<Link href='/wishlist'><KeyboardArrowRightIcon style={{ fontSize:32 }} /></Link>
						</li>
						<li
							class="list-group-item d-flex justify-content-between align-items-center"
							style={{ padding: '31px', fontSize: '22px' }}
						>
							<span>
								<PaymentIcon style={{ fontSize: 35, marginRight: '10px', marginLeft: '-10px' }} />
								<span style={{ fontSize: '22px' }}>Payment Methods</span>
							</span>
							<Link href=''><KeyboardArrowRightIcon style={{ fontSize:32 }} /></Link>
						</li>
					</ul>
				</div>
				<br />
				<div>
					<ul class="list-group">
						<li
							class="list-group-item d-flex justify-content-between align-items-center"
							style={{ padding: '30px', fontSize: '22px' }}
						>
							<span>
								<ShareIcon style={{ fontSize: 35, marginRight: '10px', marginLeft: '-10px' }} />
								<span style={{ fontSize: '22px' }}>Refer & Earn</span>
							</span>
							<Link href=''><KeyboardArrowRightIcon style={{ fontSize:32 }} /></Link>
						</li>
						<li
							class="list-group-item d-flex justify-content-between align-items-center"
							style={{ padding: '30px', fontSize: '22px' }}
						>
							<span>
								<ExitToAppIcon style={{ fontSize: 35, marginRight: '10px', marginLeft: '-10px' }} />
								<span style={{ fontSize: '22px' }}>Logout</span>
							</span>
							<Link href=''><KeyboardArrowRightIcon style={{ fontSize:32 }} /></Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
