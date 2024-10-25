
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Charts from "./assignment4_YujiaFu"; // Import the Charts component

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Citi Bike Visualization</title>
        <meta name="description" content="infovis_YujiaFu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ margin: 0, padding: 0, backgroundColor: "white" }}>
        {/* Render the Charts component containing the scatter plot */}
        <Charts />
      </main>
    </>
  );
}