import React, { useEffect, useState } from "react";
import Head from "next/head";
import Axios from "axios";
import { useRouter } from "next/router";
import Item from "../../src/component/Item";
import Loading from "../../src/component/Loader";

const Post = ({ item, name }) => {
  const router = useRouter();
  console.log(router.isFallback);

  if (router.isFallback) {
    return (
      <>
        <div style={{ paddingTop: 500 }}>
          <Loading />
        </div>
      </>
    );
  }
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  // 실제 상품품은 계속 변경될 가능성이 높아서 실제로 id를 지정해서 쓰지 않는다
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  return {
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    // paths: [
    //   { params: { id: "740" } },
    //   { params: { id: "730" } },
    //   { params: { id: "729" } },
    // ],
    // fallback이 true면 이미 만들어진 html이 페이지가 아니더라도 서버에 데이터 요청해서 그려줌
    // fallback이 false면 이미 만들어진 html이 없으면 에러페이지로 띄워버림
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
