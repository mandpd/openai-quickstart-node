import {
  Configuration,
  OpenAIApi
} from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.text),
    temperature: 0.3,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 1.0,
    presence_penalty: 0.0
  });
  res.status(200).json({
    result: completion.data.choices[0].text
  });
}

function generatePrompt(text) {
  return `Extract a comma-separaated list of all forms of Company names from "${text}"`;
}