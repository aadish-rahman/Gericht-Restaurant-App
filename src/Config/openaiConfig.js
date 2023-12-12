const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "Your_API_Key",
  dangerouslyAllowBrowser: true,
});

module.exports = openai;
