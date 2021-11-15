import React, { useEffect, useState } from "react";
import Head from "next/head";
import Axios from "axios";
import { useRouter } from "next/router";
import Item from "../../src/component/Item";
import Loading from "../../src/component/Loader";

const Post = ({ item }) => {
  console.log(item);
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  // console.log(context);
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
