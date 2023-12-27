import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://duckduckgo8.p.rapidapi.com/";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);

  const getResults = async (type) => {
    setLoading(true);

      const res = await fetch(`${baseUrl}${url}`, {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'd318093cdfmshcbe384d44ce09a5p12a022jsn546108d7d136',
              'X-RapidAPI-Host': 'duckduckgo8.p.rapidapi.com'
          },
      });
    // const response = await fetch(`${baseUrl}/?q=${searchTerm}&rapidapi-key=${process.env.REACT_APP_API_KEY}&format=json&pretty=1&t=${type}`);
      const data = await res.json();
      setResults(data);
        setLoading(false);
  
    };
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useStateContext = () => useContext(ResultContext);