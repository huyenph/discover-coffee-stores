import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  console.log({ router });

  return (
    <div>
      Coffee Store page {router.query.id}
      <Link href="/">Back to home</Link>
      <Link href="/coffee-store/dynamic">Go to dynamic</Link>
    </div>
  );
};

export default CoffeeStore;
