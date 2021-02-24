import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Account.module.css';
import Link from 'next/link';
import axios from 'axios';
import InfoIcon from '@material-ui/icons/Info';

export default function testDetails2({ data, handleBack }) {
    // console.log("hello",data.resbody)
	console.log('data', data);
	console.log('orderDetailPage');
	const [ orderData, setorderData ] = useState(data);
	const [cards, setCards] = useState(data)
    const [track, setTrack] = useState(false)
const cancelMessage = () =>{
    alert("Order can be cancelled after 1 hour!")
}
const handleTracker = () =>{
    setTrack(true)
}
console.log(cards)
	return (

		<div className="">
			<div>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>
            {cards &&
<>
<div onClick={handleBack}>Back</div>
			<div className="container-fluid mt-4 mb-3">
				<h5 class="card-title">Order Number : {cards.number}</h5>
				<p class="card-text">
					<small class="text-muted">Order Status : {cards.s_status.current_status}</small>
				</p>
			</div>
            <div className="container-fluid d-flex justify-content-between px-2 py-2">
                <div>
                    <small class="text-muted">Cancel Order <InfoIcon style={{backgroundColor:"white", color:"black",marginLeft:"3px"}} onClick={cancelMessage}/></small>
                </div>
                <div>
             <Link href='/tracker'>
                    <small class="text-dark" style={{textDecoration:"underline",textDecorationColor:"blue"}}>Track Your Order</small>

             </Link>
                </div>

            </div>
            {cards.line_items.map((ele)=>{
                // console.log(cards)
                return(
<div class="card flex-row flex-nowrap" style={{ backgroundColor: 'white', marginBottom: '15px' }}>
						<div class="card-header border-0">
							<img src={ele.image_url} alt="hello" style={{ width: '85px', height: '85px' }} />
						</div>
						<div class="container-fluid px-2">
							<h5 class="card-title">{ele.title}</h5>
							<p class="card-text">
								<small class="text-muted">Rs. {ele.price}</small>
							</p>
							<p class="card-text">
								<small class="text-muted">Qty : {ele.quantity} </small>
							</p>
						</div>
					</div>
                )
            })}

			<div>
				<div
					class="card flex-row flex-nowrap"
					style={{ backgroundColor: 'white', marginBottom: '15px', padding: '18px' }}
				>
					<div class="container-fluid px-2">
						<p class="card-text">
							<small class="text-muted">Payment : {cards.gateway}</small>
						</p>
					</div>
				</div>
			</div>
			<div>
				<div class="card flex-row flex-nowrap" style={{ backgroundColor: 'white', marginBottom: '15px' }}>
					<div class="container-fluid px-2 py-2">
						<h5 class="card-title">Price Details</h5>
						<div className="d-flex justify-content-between">
							<h6>Subtotal</h6>
							<h6>{cards.subtotal_price}</h6>
						</div>
						<div className="d-flex justify-content-between">
							<h6>Tax</h6>
							<h6>{cards.total_tax}</h6>
						</div>
						<div className="d-flex justify-content-between">
							<h6>Discount</h6>
							<h6>{cards.total_discounts}</h6>
						</div>
						<div className="d-flex justify-content-between">
							<h6>Shipping</h6>
							<h6>FREE</h6>
						</div>
						<hr />
						<div className="d-flex justify-content-between">
							<h5>Total</h5>
							<h6>{cards.total_line_items_price}</h6>
						</div>
					</div>
				</div>
			</div>
			<div class="card flex-nowrap" style={{ backgroundColor: 'white', marginBottom: '15px' }}>
				<div class="container-fluid px-2 py-2">
					<h5 class="card-title">Billing Address</h5>
					<h6>
						{cards.billing_address.first_name} {cards.billing_address.last_name}
					</h6>
					<h6>{cards.billing_address.address1}</h6>
					<h6>
						{cards.billing_address.city} {cards.billing_address.province} {cards.billing_address.zip}
					</h6>
					<h6>Phone number : {cards.billing_address.phone}</h6>
				</div>
				<div class="container-fluid px-2 py-2">
					<h5 class="card-title">Delivery Address</h5>
					<h6>
						{cards.shipping_address.first_name} {cards.shipping_address.last_name}
					</h6>
					<h6>{cards.shipping_address.address1}</h6>
					<h6>
						{cards.shipping_address.city} {cards.shipping_address.province} {cards.shipping_address.zip}
					</h6>
					<h6>Phone number : {cards.shipping_address.phone}</h6>
				</div>
			</div>
            
            </>
            }
		</div>
        
        
	);
}


// export async function getStaticProps() {

//     var config = {
//       method: 'get',
//       url: 'https://qa.api.sugarcosmetics.com/orders/qa/getOrders?offset=0&limit=20&customer_id=2168277991507',
//       headers: {
//         'Authorization': '  JdUZM1KDVeCyb6oy73oPrEZqlJwpl0mR'
//       }
//     };

//     let data = await axios(config)
//     .then(function (response) {
//       return response.data ;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//     return {
//         props: {
//             data
//         }
//     };

//     }
