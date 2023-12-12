const openai = require("../Config/openaiConfig");

const generateDishDetailsAndImage = async ({ data }) => {
  try {
    // Generate dish details using chat completion
    const dishDetailsResponse = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Come up with a dish using the following as main ingredients: ${data}.
              You can use some other ingredients too if needed to make the dish. If u cant
              make a dish with ${data}, then make a random dish. Provide the Following
              as in JSON format. The required data are provided:
              DishName: ,
              DishCategory: (Eg- Dessert, Chicken etc),
              Ingredients: ,
              Instructions: (Step by Step on How to make the dish),
              If its a random dish make the DishName like this:
              DishName: RandomDish - DishName
              Also don't include the '${data}' in ingredients or anything. 
              The output should be like this (Fill the data accordingly):
              {
                DishName:"",
                DishCategory:"",
                Ingredients:[
                  {"name": "Ingredient 1", "quantity": "Quantity 1"},
                  {"name": "Ingredient 2", "quantity": "Quantity 2"},
                  // Add more as needed
                ],
                Instructions:"",
              }`,
        },
        {
          role: "assistant",
          content: "",
        },
      ],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
    });

    const generatedDetails = JSON.parse(
      dishDetailsResponse.choices[0].message.content
    );

    // Modify the imagePrompt in the generateMeta function
    const imagePrompt = `Generate a high-quality dish image showing the beautiful features of the dish using the
     following prompt: ${generatedDetails.DishName} ${
      generatedDetails.DishCategory
    } ${generatedDetails.Ingredients.map(
      (ingredient) => `${ingredient.quantity} ${ingredient.name}`
    ).join(" ")}`;

    // Generate image using the dishImagePrompt
    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt: imagePrompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });

    return {
      dishDetails: {
        ...generatedDetails,
      },
      imageUrl: image.data[0].url,
    };
  } catch (error) {
    console.error("Error generating dish details and image:", error);
    throw error;
  }
};

module.exports = { generateDishDetailsAndImage };
