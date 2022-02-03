import React from "react";
import { Space, Col, Row } from "antd";
import Link from "next/link";

const index = () => {
  return (
    <div
      className='container top-auto flex justify-around align-center min-w-full'
      style={{ backgroundColor: "green" }}
    >
      <Link href='/'>
        <a>nav a</a>
      </Link>
      <Link href='/'>
        <a>nav b</a>
      </Link>
      <Link href='/'>
        <a>nav c</a>
      </Link>
      <Link href='/'>
        <a>nav d</a>
      </Link>
    </div>
  );
};

export default index;
