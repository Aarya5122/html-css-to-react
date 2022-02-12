import React from "react";
import Card from "./Card"

const CardSection = () => (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card ImageSrc="https://learnyst.s3.amazonaws.com/assets/schools/2410/resources/images/logo_lco_t17sd_0trrqu_bbqhtm.png"
                  CardTitle="LearnCodeOnline"
                  CardText="Well managed courses are placed here in pizza price, Well handled by Hitesh Choudary"
                  ButtonText="LCO Pro"
            />
          </div>
          <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
              <img
                src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-success">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
              <img
                src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-success">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default CardSection;