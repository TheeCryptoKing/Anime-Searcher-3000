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
        <div>
          <h2>{title}</h2>
          <h2>{creator}</h2>
          <h4>Based on: {animeName}</h4>
          <h4>{genre}</h4>
          <button onClick={handleDelete}>🗑️</button>
        </div>
      </div>
      <p>{body}</p>
    </article>
  );
}

export default FanficsCard;
