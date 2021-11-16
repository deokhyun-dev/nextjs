import Axios from "axios";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ItemList from "../src/component/ItemList";
import { Divider, Header } from "semantic-ui-react";
import Loading from "../src/component/Loader";

export default function Home({ list }) {
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     setList(res.data);
  //     setIsLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <>
        <Head>
          <title>Home | nextjs</title>
        </Head>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  // console.log(res);
  return {
    props: {
      list: res.data,
      name: process.env.name,
    },
  };
}
