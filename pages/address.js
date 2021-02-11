import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Account.module.css';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link'
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
			<div>
			<Link href='/addAddress'>
<div className="container-fluid">
	<div className={styles.btnDiv}>
		<div className={styles.addAddressbutton}>
			<AddIcon style={{fontSize: '50px' }}/>
		</div>
	</div>
</div>
</Link>
</div>
			</div>
	);
}
