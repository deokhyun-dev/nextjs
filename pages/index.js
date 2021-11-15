import Axios from "axios";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ItemList from "../src/component/ItemList";
import { Divider, Header } from "semantic-ui-react";
import Loading from "../src/component/Loader";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios.get(API_URL).then((res) => {
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          <Head>
            <title>Home | nextjs</title>
            <meta name="description" content="nexdjs 연습용"></meta>
          </Head>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <div style={{ padding: "300px 0" }}>
            <Loading />
          </div>
        </>
      ) : (
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
      )}
    </div>
  );
}
