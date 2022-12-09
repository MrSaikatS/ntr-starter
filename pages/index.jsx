import Head from "next/head";
import HomeComp from "../components/HomeComp";

const index = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HomeComp />
		</>
	);
};

export default index;
