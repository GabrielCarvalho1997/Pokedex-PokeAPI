import "./PokeCard.css";

const PokeCard = ({ name, image, id }) => {
  return (
    <div className="poke-card">
      <div className="info-card">
        <img src={image} alt={name} />
        {/* <p id="id">{`#${id}`}</p> */}
      </div>

      <h2>{name.toUpperCase()}</h2>
    </div>
  );
};

export default PokeCard;
