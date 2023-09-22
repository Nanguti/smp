import axiosClient from "@/utils/axios";
import Link from "next/link";
import FramerMotion from "@/components/FramerMotion";

function getRandomGradient() {
  const gradients = [
    "bg-gradient-to-r from-blue-500 to-green-500",
    "bg-gradient-to-r from-red-400 via-purple-500 to-indigo-500",
    "bg-gradient-to-r from-yellow-300 to-pink-400",
    // Add more gradient classes as needed
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
}
const About = async () => {
  const file_url = process.env.STORAGE_URL;
  const response = await axiosClient.get("/staff");
  const staff = response.data.staff;
  return (
    <FramerMotion>
      {/* Begin Simplifi Networks' Breadcrumb Area */}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Other</h2>
            <ul>
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Simplifi Networks' Breadcrumb Area End Here */}
      {/* Begin Simplifi Networks' About Us Area */}
      <div className="about-us-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-5">
              <div className="overview-img text-center img-hover_effect">
                <Link href="#">
                  <img
                    className="img-full img-border-radius"
                    src="assets/images/about-us/1.jpg"
                    objectFit="cover"
                    layout="fill"
                    alt="Simplifi Networks' About Us Image"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-7 d-flex align-items-center">
              <div className="overview-content">
                <h2>
                  Welcome To <span>Simplifi Networks</span>
                </h2>
                <p className="short_desc">
                  Simplifi Networks is a leading supplier of cutting-edge
                  technologies like Wireless Broadband, Wi-Fi, Networking, VoIP,
                  Fibre, and IP Video. We provide top-quality products,
                  extensive support, and financing solutions. Our East African
                  partners in Kenya, Uganda, Tanzania, Ethiopia, Congo, DRC,
                  Sudan, and Rwanda trust us for exceptional service. Our brands
                  include Ubiquiti, MikroTik, RUIJIE, and more.
                </p>
                <div className="uren-about-us_btn-area">
                  {/* <a class="about-us_btn" href="shop-left-sidebar.html">Shop Now</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Simplifi Networks' About Us Area End Here */}
      {/* Begin Simplifi Networks' Project Countdown Area */}

      {/* Simplifi Networks' Project Countdown Area End Here */}
      {/* Begin Simplifi Networks' Team Area */}
      <div className="team-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section_title-2">
                <h3>Our Team</h3>
              </div>
            </div>
          </div>{" "}
          {/* section title end */}
          <div className="row">
            {staff.map((single_staff, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 col-sm-6 our-team ${getRandomGradient()}`} // Set random gradient class
              >
                <div className="team-member">
                  <div className="team-thumb img-hover_effect">
                    <Link href="#">
                      <img
                        src={`${file_url}/${single_staff.image}`}
                        alt={single_staff.title}
                      />
                    </Link>
                  </div>
                  <div className="team-content text-center">
                    <h3>{single_staff.name}</h3>
                    <div className="staff-desc">{single_staff.bio}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Simplifi Networks' Team Area End Here */}
    </FramerMotion>
  );
};

export default About;
