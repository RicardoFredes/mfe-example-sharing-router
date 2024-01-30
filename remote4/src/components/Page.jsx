import { useSearchParams } from "react-router-dom";

const Page = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return (
    <div>
      <h3>Remote 4: Page {id}</h3>
    </div>
  );
};

export default Page;
