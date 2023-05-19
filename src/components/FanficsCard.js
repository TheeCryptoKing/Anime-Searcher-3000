import "../stylesheets/FanficsCard.css";

function FanficsCard({
  title,
  creator,
  image,
  animeName,
  genre,
  body,
  id,
  updateStateDelete,
}) {

  function handleDelete() {
    fetch(`http://localhost:3001/fanfics/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        updateStateDelete(id);
      });
  }

  return (
    <article className="fanfic-card">
      <div className="card-info">
        <img src={image} alt={animeName}></img>
        <div className="text-info">
        <h2>{animeName}</h2>
        <h2>By: {creator}</h2>
          <h4>Based on: {title}</h4>
          <h4>Genre: {genre}</h4>
          <button className="delete-button"onClick={handleDelete}>🗑️</button>
        </div>
      </div>
      <p>{body}</p>
    </article>
  );
}

export default FanficsCard;
