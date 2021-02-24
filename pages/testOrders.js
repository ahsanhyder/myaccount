import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Account.module.css';
import Link from 'next/link';
import axios from 'axios';
import viewOrderDetails from './viewOrderDetails'
import hello from './hello'
import testDetails2 from './testDetails2'


export default function Orders({ data }) {
    const [ orderData, setorderData ] = useState(data);
    const [cards, setCards] = useState(orderData.resbody)
    const [ orderNumber, setorderNumber ] = useState(orderData.resbody[0].name);
    const [price, setPrice] = useState(orderData.resbody[0].total_price)
    const [status, setstatus] = useState(orderData.resbody[0].s_status.current_status)
    const [paymentGateway, setpaymentGateway] = useState(orderData.resbody[0].gateway)
    const [noItems, setnoItems] = useState(orderData.resbody.length)
    const [ show, setShow ] = useState(false);
    const [id, setId] = useState('')
    
    // const handleClick = () =>{
    //     return(
    //         <testDetails2 />
    //     )
    //     // alert("hello!")
    // }
    
    
	return (
        
		<div className="">
			<div>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>
            {console.log(cards[1])}
            {/* {console.log(cards.indexOf[4])} */}
{cards.map((elem)=>{
    {var date = new Date(elem.created_at).toString().substring(0,15)}
    // console.log(date)
    return(
        
<div className="container-fluid mt-4">
            <div class="card">
    <div className="d-flex justify-content-between mx-2 my-2">
        <div>
            <p class="card-text"><small class="text-muted">{date}</small></p>
            {``}
        </div>
        <div>
            <p class="card-text"><small class="text-primary">{elem.s_status.current_status}</small></p>
        </div>    
        </div>
    <div class="card-body">
      <h5 class="card-title">Order Number : {elem.name}</h5>
      <p class="card-text"><small class="text-primary">{elem.line_items.length>1?<>{elem.line_items.length} Items</>:<>{elem.line_items.length} Item</>}</small></p>
      <div className={styles.scrollImg}>

      </div>
      <div className="d-flex justify-content-between  my-2">
            <div>
                <p class="card-text"><small class="text-muted">Amount : Rs. {elem.total_price}</small></p>
            </div>
            <div>
                <p class="card-text"><small class="text-primary">Payment : {elem.gateway}</small></p>
            </div> 
      </div>
      <div>
          {elem.s_status.current_status==`${"Cancelled"}` || elem.s_status.current_status==`${"Delivered"}`? <Link href='/testDetails2'>
               <button type="button" class="btn btn-outline-dark btn-lg btn-block container-fluid mt-2 mb-2">View More Details</button>
               </Link>
              
:<>
         
         <Link href='/testDetails2path?id=elem.id'>
               <button type="button" class="btn btn-outline-dark btn-lg btn-block container-fluid mt-2 mb-2">View More Details</button>
               </Link>            
   
        <button type="button" class="btn btn-secondary btn-lg btn-block container-fluid mt-2 mb-2">Track Order</button>
   </>   
}</div>
    </div>
    </div>
            </div>
    )
})}			
		</div>
	);
}


export async function getStaticProps() {

var config = {
  method: 'get',
  url: 'https://qa.api.sugarcosmetics.com/orders/qa/getOrders?offset=0&limit=20&customer_id=2168277991507',
  headers: { 
    'Authorization': 'JdUZM1KDVeCyb6oy73oPrEZqlJwpl0mR',
    // 'Content-type': 'application/json'
    // 'contentType': 'application/json'
    // 'Content-Type': 'text/html'
  }
};

let data = await axios(config)
.then(function (response) {
    // console.log(response.data)
  return response.data ;
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