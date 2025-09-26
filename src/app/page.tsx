import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="">
      <div className="relative aspect-[3/1]">
        <Image src="/featured.png" alt="feature-product" fill />
      </div>

      <ProductList />
    </div>
  );
};

export default Homepage;

/* Meaning of aspect-[3/1]

  => It forces the element to keep a width-to-height ratio of 3:1.
  
  => i.e. the width will always be 3× the height.
  
  => So if the div is 300px wide → its height will automatically be 100px.

🔎 Examples:

      aspect-[16/9] → widescreen video style.

      aspect-[1/1] → perfect square.

      aspect-[4/3] → classic photo ratio.

      aspect-[3/1] → extra-wide banner (like in your featured product).
      
           <Image fill />
      => This ensures your <Image fill /> keeps the same shape no matter the screen size. 
*/
