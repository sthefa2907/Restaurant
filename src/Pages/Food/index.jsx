import { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

const Food = () => {

  const [items, setItems] = useState(null)
  useEffect(() => {
    fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Food/')
    .then(response => response.json())
    .then(data => setItems(data) )

  }, [])
  return (
    <Layout>
        {items?.map((item) => {
          <Card key={item.id} data={item}/>
        })}
    </Layout>
  );
};

export default Food