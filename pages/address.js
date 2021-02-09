import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Account.module.css';
import PinDropIcon from '@material-ui/icons/PinDrop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PaymentIcon from '@material-ui/icons/Payment';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Link from 'next/link'
import axios from 'axios';

export default function Account({ data }) {
	console.log('addressPage');



	return (
		<div className={styles.main}>
			<div>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
			</div>
			<div>

            </div>
			</div>
	);
}
