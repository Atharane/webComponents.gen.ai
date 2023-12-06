const url =
  "https://test-atg-openai.openai.azure.com/openai/deployments/text-davinci-002/completions?api-version=2023-09-15-preview";

const data = {
  prompt: `You are given the requirement for a website which is delimited with $$$. Based on that creatively generate the Title, Heading, four services offered, valid footer content and description of a relevant image to be shared as a prompt to an image generating LLM. Add the generated content to the following JSON as values to the corresponding keys.

  Format:
  {
  "Title": "",
  "Heading": "",
  "Service1": {"Service Title": "", "Service Description": ""},
  "Service2": {"Service Title": "", "Service Description": ""},
  "Service3": {"Service Title": "", "Service Description": ""},
  "Service4": {"Service Title": "", "Service Description": ""},
  "Footer": "",
  "Image Description": ""
  }
  
  Requirement : 
  $$$
  Generate a HoneyMoon Planner Website
  $$$`,
  max_tokens: 3000,
  temperature: 0.1,
  frequency_penalty: 0,
  presence_penalty: 0,
  top_p: 0.5,
  best_of: 1,
  stop: null,
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": "d92f204755a24159aa49bedda4493e44",
  },
  body: JSON.stringify(data),
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => console.log(JSON.parse(data.choices[0].text)))
  .catch((error) => console.error("Error:", error));
