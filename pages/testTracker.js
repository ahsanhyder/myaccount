import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Account.module.css';
import Link from 'next/link';
import axios from 'axios';
import CloseIcon from '@material-ui/icons/Close';


export default function tracker({data, handleClose}) {
    console.log("ordersData", data)
    const [cards, setCards] = useState(data)
    console.log("id",cards.id)
    const [message, setMessage] = useState([]);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    const [detailsTracker, setDetailsTracker] = useState('')


    useEffect((pincode) => {
        axios.post('https://qa.api.sugarcosmetics.com/pincode/qa/pincodeDateOfDelivery')
            .then(res => {
                console.log("hello",res.data)
                setMessage(res.data);
            })
            .catch(err => {
                console.log(err)
                setError(err.message);
            })
    }, []);

//     const handleClick = () =>{
// var message = JSON.stringify({"pincode":"440034"});

// var config = {
//   method: 'post',
//   url: 'https://qa.api.sugarcosmetics.com/pincode/qa/pincodeDateOfDelivery',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : message
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

//     }


	return (
        <div className={` py-5 ${styles.main2}`}>
            <div className="container-fluid" style={{color:"white"}}>
                <div className="row">
                    <div className="col-10" style={{color:"white"}}></div>
                    <div className="col-2">
                        <CloseIcon onClick={handleClose}/>
                    </div>
                </div>
            </div>
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
        </div>
        <div style={{textAlign:"center"}}>
             <Link href='https://sugarcosmetics.clickpost.in/?order_id=" + {cards.number}'>
                <button type="button" class="btn btn-secondary btn-lg btn-block container-fluid mt-5" style={{width:"250px"}}>Track Your Package</button>
             </Link>
         </div>
        {cards.s_status.history.delivery_status!==null?<div className="container-fluid d-flex justify-content-center align-items-center mt-5" style={{paddingBottom:'360px'}}>
            <p class="card-text mt-5" style={{color:"yellow"}}>
               Hey
            </p> 
            {/* <div>
                {message.map((ele)=>{
                   return <>{ele.message}</>
                })}
                </div>  */}
            </div>:<div></div>}
        </div> 
	);
}