
export const LegoSet = ({ legoSet }) => {
  return (
    <div className="lego-set">
        <h2>Lego Set</h2>
        <h3>Name: {legoSet.Name}</h3>
        <p>Theme: {legoSet.Theme}</p>
        <p>Year: {legoSet.Year}</p>
        <p>Number of pieces: {legoSet.Pieces}</p>
    </div>

  )
}
