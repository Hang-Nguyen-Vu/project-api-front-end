import { useEffect, useState } from "react";
import { LegoSet } from "./LegoSet";

export const LegoSetList = () => {
  const [legoSetList, setLegoSetList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllSets = async () => {
    setLoading(true);

    await fetch("https://hang-project-express-api.onrender.com/legoSets")
      .then(response => response.json())
      .then(cleanData => {
        setLegoSetList(cleanData);
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
      })
      .finally(() => setLoading(false));
  }
  
  useEffect(() => {
    fetchAllSets();
  }, []);


  return (
    <div className="list-wrapper">
      {loading ? (
        <p className="loading">LOADING...</p>
      ) : (
        legoSetList.map((legoSet) => {
          return (
            <LegoSet key={legoSet.Set_ID} legoSet={legoSet} />
          )
        })
      )}
    </div>
  );
};
