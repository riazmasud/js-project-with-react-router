import { useState } from "react";

const DetailsText = () => {
  return <p>This is the details detailsText</p>;
};
const ShowHide = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <div>
        <h1>Show/Hide</h1>
        {show && <DetailsText />}
        <button onClick={() => toggleShow()}>
          {show ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </div>
  );
};

export default ShowHide;
