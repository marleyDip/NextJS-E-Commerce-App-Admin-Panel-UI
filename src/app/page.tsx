import ProductList from "@/components/ProductList";
import Image from "next/image";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="feature-product" fill />
      </div>

      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;

/* In Next.js App Router (13–15), searchParams is provided synchronously by the framework.
  => So you don’t need Promise<...> or await.

        const Homepage = ({
        searchParams,
      }: {
        searchParams: { category?: string };
      }) => {
        const category = searchParams.category;

        return <div>Category: {category ?? "All"}</div>;
      };

  => Next.js automatically parses the query string from the URL into searchParams.

*/

/* params → the dynamic route segments (/products/[id])

  searchParams → the query string parameters (?category=shoes&page=2)
*/

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
