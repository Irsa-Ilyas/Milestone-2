import Image from "next/image";
import { CiStar } from "react-icons/ci";

const Cards = () => {
  return (
    <div>
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            marginTop: "20px",
          }}>
          We choose for you
        </h1>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "45px",
          marginBottom: "45px",
          height: "2px",
          width: "150px",
          backgroundColor: "black",
          margin: "0 auto",
        }}></div>
      <div>
        <p style={{ textAlign: "center", fontSize: "20px", color: "#565656" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <br />
          labore et dolore magna aliqua. Ut enim ad minim.
        </p>
      </div>
      {/* cards */}
      <div className="cards">
        <div className="card1">
          <Image
            src="/assets/card1.jpg"
            width={369}
            height={200}
            alt="card1"></Image>
          <p>Verona $1750</p>
          <p className="para2">
            Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do
            eiusmod tempor incididunt.…
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}>
            <p style={{ display: "flex", color: "#565656" }}>
              {" "}
              14 Days
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
            </p>
          </div>
        </div>
        <div className="card2">
          <Image
            src="/assets/card2.png"
            width={369}
            height={200}
            alt="card1"></Image>
          <p>Verona $1750</p>
          <p className="para2">
            Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do
            eiusmod tempor incididunt.…
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}>
            <p style={{ display: "flex", color: "#565656" }}>
              {" "}
              10 Days
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
            </p>
          </div>
        </div>
        <div className="card3">
          <Image
            src="/assets/card3.png"
            width={369}
            height={200}
            alt="card1"></Image>
          <p>Verona $1750</p>
          <p className="para2">
            Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do
            eiusmod tempor incididunt.…
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}>
            <p style={{ display: "flex", color: "#565656" }}>
              {" "}
              15 Days
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
              <span style={{ fontSize: "22px" }}>
                <CiStar />
              </span>
            </p>
          </div>
        </div>
        {/* next row */}
        <div className="cardsrow">
          <div className="card4">
            <Image
              src="/assets/card4.png"
              width={369}
              height={200}
              alt="card1"></Image>
            <p>Verona $1750</p>
            <p className="para2">
              Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do
              eiusmod tempor incididunt.…
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "10px",
              }}>
              <p style={{ display: "flex", color: "#565656" }}>
                {" "}
                14 Days
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="card5">
            <Image
              src="/assets/card5.png"
              width={369}
              height={200}
              alt="card1"></Image>
            <p>Verona $1750</p>
            <p className="para2">
              Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do
              eiusmod tempor incididunt.…
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "10px",
              }}>
              <p style={{ display: "flex", color: "#565656" }}>
                {" "}
                14 Days
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="card6">
            <Image
              src="/assets/card6.png"
              width={369}
              height={200}
              alt="card1"></Image>
            <p>Verona $1750</p>
            <p className="para2">
              Lorem ipsum dolor sit amet, consectetur adi- piscing elit sed do
              eiusmod tempor incididunt.…
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "10px",
              }}>
              <p style={{ display: "flex", color: "#565656" }}>
                {" "}
                14 Days
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
                <span style={{ fontSize: "22px" }}>
                  <CiStar />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
