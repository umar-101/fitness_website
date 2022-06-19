export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c5645877cdmshd67c44e89619831p1414bajsn0918ba17bd10",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();

  return data;
};
