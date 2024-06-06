import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    //api call aise krte hai
    fetch(
      ` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      //response changed into json
      .then((res) => res.json())
      //now we are taking access of key
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]); //currency pe dependecy hai bcoz if curency change then we want to again run this useeffect
  console.log(data);
  return data;
}

export default useCurrencyInfo;
