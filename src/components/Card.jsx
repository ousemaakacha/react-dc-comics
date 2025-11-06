export default function Card({ thumb, title, series, price }) {
  return (
    <div className="col-md-2 mb-4">
      <div className="card h-100 bg-black border-0 text-center text-white">
        <img
          src={thumb}
          className="card-img-top"
          alt={title}
          style={{ height: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{series}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
