import React, { useEffect, useState } from "react";
import { generateDishDetailsAndImage } from "../../Config/openaiController";
import "./Input.css";

function Input({ onDishDetailsChange, setIsLoading }) {
  const [data, setData] = useState("");
  const [dishDetails, setDishDetails] = useState();

  useEffect(() => {
    // This effect will run whenever dishDetails changes
    console.log("dishDetails:", dishDetails?.dishDetails);
    console.log("ImageLink: ", dishDetails?.imageUrl);
  }, [dishDetails]);

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  const fetchDishData = async () => {
    setData("");
    if (!data.trim()) {
      console.error("Input is empty");
    } else {
      setIsLoading(true);
      try {
        const result = await generateDishDetailsAndImage({ data });
        setDishDetails(result);
        onDishDetailsChange(result); // Call the callback function
      } catch (error) {
        console.error("Error fetching dish details:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="app__input">
      <div className="app__input-heading">
        <h1 className="headtext__cormorant">AI Food</h1>
        <p className="p__opensans">Enter the ingredients!!!</p>
        <div className="app__input-input flex__center">
          <input
            type="text"
            placeholder="Eg:- Chicken Butter Bread........"
            onChange={handleInputChange}
            value={data}
          />
          <button
            type="submit"
            className="custom__button"
            onClick={fetchDishData}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
