.main{
    background-color: #F6F6F6;
    color: #7A7A7A;
}

.card{
    background-image: url('../public/profile_user_info_card_bg.png');
}

.btnDiv{
    display: flex;
    justify-content: center;
    align-items: center;
}

.addAddressbutton{
    width:80px;
    height: 80px;
    border-radius: 50%;
    background-color: #0040ff;
    color: white;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btnRounded{
    height: 60px;
    width: 120px;
    background-color: pink;
    border-radius: 42%;
    font-size: large;
    font-weight: bold;
}

.btnFlat{
    height: 60px;
    width: 220px;
    background-color: black;
    color: white;
    font-size: large;
    font-weight: bold;
}

.centerMapImg{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}

.emptyAdressImg{
width: 300px;
}

.emptyAdressImgP{
    width: 300px;
    font-size: large;
    font-weight: bold;
}

.centerMapImgDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
}
.wishlistButton{
    display: flex;
    justify-content: center;
    align-items: center;
}

.containerTracker{
    width: 100%;
}
.progressBar{
    counter-reset: step;
}
.progressBar li{
    list-style-type: none;
    width: 33.3%;
    float: left;
    position: relative;
    text-align: center;
} 
.progressBar li::before{
    content: counter(step);
    counter-increment: step;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ddd;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: white;
}

.progressBar li::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #ddd;
    top: 15px;
    left: -50%;
    z-index: -1;
}

.progressBar li:first-child::after{
    content: none;
}

.progressBar li.active{
    color: green;
}

.progressBar li.active:before{
    border-color: green;
}

.progressBar li.active + li:after{
    background-color: green;
}

@media only screen 
and (device-width : 375px) 
and (device-height : 812px) 
and (-webkit-device-pixel-ratio : 3) {
  .btnFlat{
    margin-left: 20%;
    margin-bottom: 5%;
  }
 }

 @media screen and (min-width: 768px) {
   .btnFlat {
    margin-left: 42%;
    margin-bottom: 5%;
   }
}

.OrderCardTop{
    display: flex;
}



import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Account.module.css';
import Link from 'next/link';
import axios from 'axios';


export default function tracker({data}) {

    const [ orderData, setorderData ] = useState(data);
    const [cards, setCards] = useState(orderData.resbody[0])

	return (
        <div>
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
            <p class="card-text">Track Order Number : {cards.number}</p>  
        </div>
        <div className={styles.containerTracker}>
            <ul className={styles.progressBar}>
                <li className={styles.active}>Confirmed</li>
                <li>Shipped</li>
                <li>Out for Delivery</li>
                <li>Delivered</li>
            </ul>
        </div>
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
            <p class="card-text"></p>  
        </div>
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


