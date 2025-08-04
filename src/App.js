import React, { useEffect, useState } from "react";
import { getBeauty, getBeautys } from "./apis/beautyApi";
import styled from "@emotion/styled";

const ProductLogo = styled.div`
  margin: 0 auto;
  text-align: center;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 8px;
  padding: 18px 0px 10px;
  margin-bottom: 80px;
`;

const ProductList = styled.div`
  max-width: 800px;
  margin: 0 auto;

  margin-bottom: 16px;

  /* justify-content: center; */

  align-items: center;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  box-shadow: 0 2px 8px #00000014;
  display: flex;
  padding: 18px 24px;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
`;

const ProductImg = styled.div`
  height: 72px;
  margin-right: 24px;
  object-fit: cover;
  width: 72px;
  background: rgb(248, 248, 248);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(221, 221, 221);
  border-image: initial;
  border-radius: 10px;
`;

const ProductText = styled.div`
  text-align: center;
`;

function App() {
  const [beautys, setBeautys] = useState([]);
  useEffect(() => {
    // getBeautys();
    const fetchData = async () => {
      const json = await getBeautys(); // ✅ await 사용
      const check = Array.isArray(json);
      if (check) {
        setBeautys(json);
      } else {
        setBeautys([]);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <ProductLogo>
        <h2>Beauty Product List</h2>
        <p style={{ color: "rgb(136, 136, 136)" }}>
          다양한 뷰티 제품을 한눈에 확인하세요
          <br />
          https://dummyjson.com/products API 사용 예제
        </p>
      </ProductLogo>
      {/* <h2>평가안내서 해보기</h2> */}
      {/* <p>하이, {beautys.length}</p> */}
      {beautys.map((item, index) => (
        <ProductList key={index}>
          <ProductImg>
            <img src={item.images[0]} style={{ width: 70, height: 70 }}></img>
          </ProductImg>
          <ProductText>
            <h3>{item.title}</h3>
            <p style={{ color: "#e91e63" }}>{item.price}</p>
            <p>{item.description}</p>
          </ProductText>
        </ProductList>
      ))}
    </div>
  );
}

export default App;
