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
				<img src="./ic_empty_order.png" alt="Empty Order Image" className={styles.emptyAdressImg} />
			</div>
			<div className={`row ${styles.centerMapImgDiv}`}>
				{/* <img src="./empty_address.png" alt="Empty Address Image" className={styles.emptyAdressImg} /> */}
			<p className={styles.emptyAdressImgP}>What! No orders yet?</p>
			<p className={styles.emptyAdressImgP}>Get Going Already!</p>
			</div>
			</div>
			
		</div>
	);
}
