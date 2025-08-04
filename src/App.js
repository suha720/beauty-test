import React, { useEffect, useState } from "react";
import { getBeauty, getBeautys } from "./apis/beautyApi";

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
      <div>
        <h2>Beauty Product List</h2>
        <p>다양한 뷰티 제품을 한눈에 확인하세요</p>
        <p>https://dummyjson.com/products API 사용 예제</p>
      </div>
      <h2>평가안내서 해보기</h2>
      <p>하이, {beautys.length}</p>
      {beautys.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            textAlign: "center",
            backgroundColor: "cyan",
          }}
        >
          <div>
            <img src={item.images[0]} style={{ width: 70, height: 70 }}></img>
          </div>
          <div>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
