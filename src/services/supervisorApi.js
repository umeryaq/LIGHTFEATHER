export const handleGet = () => {
  return fetch(
    "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers"
  );
};

export const handlePost = (info) => {
  return fetch(
    "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/submit",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info),
    }
  );
};
