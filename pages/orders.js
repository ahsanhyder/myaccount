import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Account.module.css';
import Link from 'next/link';
import axios from 'axios';
import TestDetails2 from './testDetails2'
import Testtracker from './testTracker'
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import ChatIcon from '@material-ui/icons/Chat';

export default function Orders({ data }) {
    const [ orderData, setorderData ] = useState(data);
    const [cards, setCards] = useState(orderData.resbody);
    const [singleOrder, setSingleOrder] = useState('')
    const [singleTracker, setSingleTracker] = useState('')
    console.log("cardOrders", cards)

const handleBack = () =>{
    setSingleOrder('')
}
const handleClose = () =>{
    setSingleTracker('')
}
    const handleClick = (id) =>{
        console.log(id)
        var data = cards.filter(ele=>ele.id==id && ele)[0]
        console.log(data)
        setSingleOrder(data)
    }

    const handleTracker = (id ) =>{
        var data = cards.filter(ele=>ele.id==id && ele)[0]
        setSingleTracker(data)
    }
    
    if(singleOrder){
        return <TestDetails2  data={singleOrder} handleBack={()=>handleBack()}/>
    }
    if(singleTracker){
        return <Testtracker  data={singleTracker} handleClose={()=>handleClose()}/>
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
            <Link href='/account'>
                <KeyboardBackspaceRoundedIcon/>
            </Link>
        </div>
        <div className="col-8">
                <h5>Orders</h5>
        </div>
        <div className="col-2">
        <Link href='https://developers.freshchat.com/web-sdk/'>
                <ChatIcon />
            </Link>
        </div>
    </div>
</div>
{cards.map((elem)=>{
    {var date = new Date(elem.created_at).toString().substring(0,15)}
    return(
<div class="container-fluid mt-4">
            <div class="card">
    <div className="d-flex justify-content-between mx-2 my-2">
        <div>
            <p class="card-text"><small class="text-muted">{date}</small></p>
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
   
        <button type="button" class="btn btn-secondary btn-lg btn-block container-fluid mt-2 mb-2" onClick={() =>handleTracker(elem.id)}>Track Order</button>
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