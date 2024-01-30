import { Link, useNavigate, createSearchParams } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const id = (Math.random() * 100).toFixed();
    const search = createSearchParams({ id }).toString();
    navigate({ replace: true, pathname: "/remote4/page", search });
  };

  return (
    <div>
      <hr />
      <Link to="/">Host: Home</Link>
      <br />
      <Link to="/page">Host: Page</Link>
      <br />
      <br />
      <Link to="/remote4">Remote4: Home</Link>
      <br />
      <Link to="/remote4/page">Remote4: Page</Link>
      <br />
      <br />
      <button onClick={handleClick}>Replace method</button>
    </div>
  );
};

export default Navigation;
