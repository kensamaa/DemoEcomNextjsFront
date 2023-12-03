import Headerr from "../_components/Headerr";
import { getData } from "../../lib/api";
export default async function Home() {
  const products = await getData();
  console.log(products);
  return (
    <div>
      <Headerr />

      {products.nodes.map((product) => {
        return (
          <ul key={product.id}>
            <li>{product.name}</li>
          </ul>
        );
      })}
    </div>
  );
}
