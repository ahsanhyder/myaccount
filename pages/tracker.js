import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Account.module.css';
import Link from 'next/link';
import axios from 'axios';


export default function tracker({data}) {
    console.log("ordersData", data)
    //const [ orderData, setorderData ] = useState(data);
    const [cards, setCards] = useState(data.resbody[0])
    console.log('cards', cards)
    const [deliveryResponse, setdeliveryResponse] = useState('')

const pincodeApi = () =>{
console.log("its in")
var deliveryData = JSON.stringify({"pincode":"440034"});

var config = {
  method: 'post',
  url: 'https://qa.api.sugarcosmetics.com/pincode/qa/pincodeDateOfDelivery',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : deliveryData
};

axios(config)
.then(function (response) {
    setdeliveryResponse(response.data)
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

}
console.log("history",cards.s_status.history)

	return (
        <>
        <div className={` py-5 ${styles.main2}`}>
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
            <p class="card-text">Track Order Number : {cards.number}</p>  
        </div>
        <div className={styles.containerTracker}>
        {cards.s_status.history.map((ele)=>{
                    return(
                        <>
                            <ul className={styles.progressBar}>
                                {ele.isCompleted==1?<li className={styles.active}>{ele.status}</li>:<li>{ele.status}</li>}  
                            </ul>
                        </>
                    )
                })}
                
                {/* {cards.s_status.history[0].isCompleted === 1 ?
                    <> */}
                        {/* {pincodeApi} */}
                        <div>{deliveryResponse.message}</div>
                        {/* <div>{deliveryData.message}</div> */}
                    {/* </> */}
                    {/* :<div>Hello World</div>}  */}

           
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
            <p class="card-text"></p>  
        </div>
        </div>
        <div style={{height:"500px",width:"100%",backgroundColor:"black",color:"white",borderColor:"black",opacity:0.8}}>

        </div>
        </>
        
        
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