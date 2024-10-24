import Image from "next/image";

const About = () => {
  return (
    <div>
      <div
        style={{
          zIndex: "-1",
          backgroundImage: "url('/assets/aboutbanner.jpg')",
          height: "800px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "45px",
          width:"100%"
        }}>
        <h1>BONVOYAGE</h1>
      </div>
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
            marginTop: "20px",
          }}>
          About US
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "#565656",
            width: "788px",
            height: "180",
          }}>
          This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet. Aenean sollicitudin, loreendum auctor nisi elit
          consequat ipsum, nec sagittis sem nibh id elit. vulputate cursus a sit
          amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
          tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat
          auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam
          ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque
          elit
        </p>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14479.302378898701!2d67.03609353217514!3d24.86980555421221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c2e8b055da9%3A0x17231a1953154fa1!2sThe%20Real%20Time%20Travels%20%26%20Tourism%20Services!5e0!3m2!1sen!2s!4v1729708580980!5m2!1sen!2s"
          width="1400px"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading={"lazy"}
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* cards */}
      <div className="aboutcards">
        <div className="img1">
          <Image
            src="/assets/c1.png"
            width={300}
            height={180}
            alt="card1"></Image>
        </div>
        <div className="img2">
          <Image
            src="/assets/c2.webp"
            width={300}
            height={180}
            alt="card1"></Image>
        </div>

        <div className="img3">
          <Image
            src="/assets/c3.png"
            width={300}
            height={180}
            alt="card1"></Image>
        </div>
        <div className="img4">
          <Image
            src="/assets/c4.png"
            width={300}
            height={180}
            alt="card1"></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
