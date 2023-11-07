import React from "react";

function Card() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card text-bg-primary h-100">
          <div className="card-body">
            <h5 className="card-title">Card 1</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-primary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-danger h-100">
          <div className="card-body">
            <h5 className="card-title">Card 2</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-danger">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card text-bg-success h-100">
          <div className="card-body">
            <h5 className="card-title">Card 3</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-success ">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
