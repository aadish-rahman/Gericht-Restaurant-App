const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

module.exports = openai;
