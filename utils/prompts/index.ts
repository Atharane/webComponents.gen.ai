import { GPT35endpoint } from '../constants';

const fetchLLMResponse = async (
  prompt: string,
  max_tokens = 600,
  temperature = 0.1,
  frequency_penalty = 0,
  presence_penalty = 0,
  top_p = 0.5,
  best_of = 1,
  stop = null
) => {
  try {
    const response = await fetch(GPT35endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'c5aad6db429c40cf902aef94032cd3ea' // "d92f204755a24159aa49bedda4493e44"
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens,
        temperature,
        frequency_penalty,
        presence_penalty,
        top_p,
        best_of,
        stop
      })
    });
    const data = await response.json();
    return data.choices[0].text;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const failsafeLLMResponse = async (
  prompt: string,
  validator: (response: string) => boolean,
  retries = 4
) => {
  while (retries--) {
    const response = await fetchLLMResponse(prompt);
    console.log("broken response:", response)
    if (validator(response)) return response;
    await new Promise((resolve) => setTimeout(resolve, 500)); // backoff
  }
  return undefined;
};
