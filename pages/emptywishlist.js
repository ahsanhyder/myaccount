import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Account.module.css';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import axios from 'axios';

export default function Account({ data }) {
	console.log('addressPage');

	return (
		<div className="">
			<div>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>
			
			<div className="container-fluid">
			<div className={`row ${styles.centerMapImg}`}>
				<img src="./ic_empty_wishlist.png" alt="Empty Wishlist Image" className={styles.emptyAdressImg} />
			</div>
			<div className={`row ${styles.centerMapImgDiv}`}>
				{/* <img src="./empty_address.png" alt="Empty Address Image" className={styles.emptyAdressImg} /> */}
			<p className={styles.emptyAdressImgP}>Your wishlist is empty.</p>
			</div>
            <Link href="/wishlist">
                <div className={styles.wishlistButton}>
                    <button className={`btn-dark`}>FILL IT UP</button>
                </div>
            </Link>
			</div>
			
		</div>
	);
}
