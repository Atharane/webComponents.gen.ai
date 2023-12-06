const url =
  "https://test-atg-openai.openai.azure.com/openai/deployments/text-davinci-002/completions?api-version=2023-09-15-preview"

const data = {
  prompt: `Your task is to write content for the home page of a website. The required content is delimited in backticks. For each requirement, provide the output in a structured manner. Later, also provide the same output in JSON format with keys :

keys = ['title', 'heading', 'desc', 'service1', 'service2', 'service3', 'service4']

Title of the website (At most 3 words and creative)
Heading (At most 15 words)
Description of the website (At most 100 words)
4 Services related to the Topic of the website with description not exceeding 50 words
Footer containing the copyright and establishment year 2023

The user will provide the topic and description of the website in the format : \${topic}\$, \${description}\$.

User Input : $Sports News Portal$, $I want to get the content for a Sports News Website that will provide latest news updates form the sports world spanning all sorts of sports, players, franchises. I want the Title of the Website to be a mix of Hindi and English words related to sports$`,
  max_tokens: 100,
  temperature: 0.1,
  frequency_penalty: 0,
  presence_penalty: 0,
  top_p: 0.5,
  best_of: 1,
  stop: null,
}

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": "d92f204755a24159aa49bedda4493e44",
  },
  body: JSON.stringify(data),
}

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error))
