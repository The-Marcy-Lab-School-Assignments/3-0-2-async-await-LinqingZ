const url = "https://jsonplaceholder.typicode.com/posts";

export const fetchHandler = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Fetch failed with status - ${response.status}, ${response.statusText}`
      );
    }
    const isJson = (response.headers.get('content-type') || '').includes('application/json');
    if (!isJson) {
        const text = await response.text();
        return [text, null]
    }
    const data = await response.json();
    return [data, null];
  } catch (error) {
    console.warn(error);
    return [null, error];
  }
};

fetchHandler(url);
