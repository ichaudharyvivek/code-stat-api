const fetchQuery = async (url, query, variables) => {
  // Fetch data from server
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  // Parse response
  const { data } = await response.json();

  // Return data
  return data;
};

module.exports = fetchQuery;
