import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { BackButton } from "../components/BackButton";

export const LegoSetDetails = () => {
  const [legoSetDetails, setLegoSetDetails] = useState(null);
  const { setId } = useParams();
  
  useEffect(() => {
    const fetchLegoSetDetails = async () => {

        await fetch(`https://hang-project-express-api.onrender.com/legoSets/${setId}`)
            .then(response => response.json())
            .then(cleanData => {
            setLegoSetDetails(cleanData);
            })
            .catch((error) => {
            console.error("Fetch error: ", error);
            })
    };

    fetchLegoSetDetails();
  }, [setId]);
  
  return (
    <div>
      <BackButton />
      <Header />
      {legoSetDetails ? (
        <div className="lego-set">
            <h2>Lego Set</h2>
            <h3>Name: {legoSetDetails[0].Name}</h3>
            <p>Theme: {legoSetDetails[0].Theme}</p>
            <p>Year: {legoSetDetails[0].Year}</p>
            <p>Number of pieces: {legoSetDetails[0].Pieces}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
