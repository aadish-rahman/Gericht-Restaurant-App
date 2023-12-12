import React, { useState } from "react";
import { Input, Loader } from "../../components";
import "../AiFood/AiFood.css";

function AiFood() {
  const [dishDetails, setDishDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const displayIngredients = () => {
    if (
      dishDetails &&
      dishDetails.dishDetails &&
      dishDetails.dishDetails.Ingredients
    ) {
      return (
        <div className="ingredients-list">
          {dishDetails.dishDetails.Ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-item">
              <span className="ingredient-name p__opensans">
                {ingredient.name}
              </span>
              <span className="ingredient-quantity p__opensans">
                {ingredient.quantity}
              </span>
            </div>
          ))}
        </div>
      );
    }
  };

  const displayInstructions = () => {
    if (
      dishDetails &&
      dishDetails.dishDetails &&
      dishDetails.dishDetails.Instructions
    ) {
      const instructionsArray =
        dishDetails.dishDetails.Instructions.split(/\d+\./);

      const formattedInstructions = instructionsArray
        .filter((instruction) => instruction.trim().length > 0)
        .map((instruction, index) => (
          <p key={index} className="p__opensans">
            {index + 1}. {instruction.trim()}
          </p>
        ));

      return formattedInstructions;
    }
  };

  const handleDishDetailsChange = (newDetails) => {
    setDishDetails(newDetails);
    // Set loading to false when data is received
  };

  return (
    <div className="app__aiFood app__bg">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Input
            onDishDetailsChange={handleDishDetailsChange}
            setIsLoading={setIsLoading}
          />
          {dishDetails && (
            <div className="app__aiFood_content app__bg">
              <div className="app__aiFood_content-head">
                <h2 className="headtext__cormorant">
                  {dishDetails.dishDetails.DishName}
                </h2>
                <img
                  src={dishDetails.imageUrl}
                  alt="Generated Dish img"
                  className="generated-image"
                  loading="lazy"
                />
              </div>

              <div className="app__aiFood_content-data">
                <p>
                  <span className="p__cormorant" style={{ color: "#DCCA87" }}>
                    Category:
                  </span>
                  <br />
                  <span className="p__opensans">
                    {dishDetails.dishDetails.DishCategory}
                  </span>
                </p>
                <hr />
                <p className="p__cormorant" style={{ color: "#DCCA87" }}>
                  Ingredients:
                </p>
                <div className="ingredients__data">{displayIngredients()}</div>
                <hr />
                <p className="p__cormorant" style={{ color: "#DCCA87" }}>
                  Instructions:
                </p>
                {displayInstructions()}
                <hr />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AiFood;
