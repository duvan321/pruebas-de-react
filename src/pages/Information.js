import React from "react";
import "../style/Information.css";
function Information() {
  return (
    <div>
      <div className="card text-center">
        <h2 className="card-title">Information.test</h2>
        <img
          src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/12/13/16394194098280.jpg"
          alt="..."
        />
        <div className="card-body">
          <h2 className="card-title">Spider Man</h2>
          <p className="card-text">
            <article title="main paragraph" style={{ backgroundColor: "blue" }}>
              Lorem Ipsum is simply dummy text of
              <br />
              the printing and typesetting industry. Lorem Ipsum has been <br />
              the industry's standard dummy <br />
              ever since the 1500s, when an unknown
              <br />
              printer took a galley of type and
              <br />
              scrambled it to make atype specimen book
            </article>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
