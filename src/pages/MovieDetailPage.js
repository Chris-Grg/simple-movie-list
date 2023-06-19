import React from "react";
import Figure from "react-bootstrap/Figure";

const MovieDetailPage = ({ movie, detailsId }) => {
  return (
    <div>
      {movie
        .filter((mov) => mov.imdId === detailsId)
        .map((mov) => (
          <Figure key={mov.imdbID}>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={mov.Poster}
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        ))}
    </div>
  );
};

export default MovieDetailPage;
