import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Account.module.css';
import Link from 'next/link';
import axios from 'axios';
import TestDetails2 from './testDetails2'

export default function Orders({ data }) {
    const [ orderData, setorderData ] = useState(data);
    const [cards, setCards] = useState(orderData.resbody);
    const [singleOrder, setSingleOrder] = useState('')

const handleBack = () =>{
    setSingleOrder('')
}
    const handleClick = (id) =>{
        console.log(id)
        var data = cards.filter(ele=>ele.id==id && ele)[0]
        console.log(data)
        setSingleOrder(data)
    }
    
    if(singleOrder){
        return <TestDetails2  data={singleOrder} handleBack={()=>handleBack()}/>
    }
	return (
        
		<div className="">
			<div>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>
{cards.map((elem)=>{
    return(
<div class="container-fluid mt-4">
            <div class="card">
    <div className="d-flex justify-content-between mx-2 my-2">
        <div>
            <p class="card-text"><small class="text-muted">Wed 17 Feb 2021</small></p>
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
          {elem.s_status.current_status==`${"Cancelled"}` || elem.s_status.current_status==`${"Delivered"}`?   
               <button type="button" class="btn btn-outline-dark btn-lg btn-block container-fluid mt-2 mb-2" onClick={() =>handleClick(elem.id)}>View More Details</button>
              
:<>
        
            <button type="button" class="btn btn-outline-dark btn-lg btn-block container-fluid mt-2 mb-2" onClick={() =>handleClick(elem.id)} >View More Details</button>
   
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
    'Authorization': 'JdUZM1KDVeCyb6oy73oPrEZqlJwpl0mR'
  }
};

let data = await axios(config)
.then(function (response) {
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