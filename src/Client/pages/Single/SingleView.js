import React from "react";
import { Carousel } from "react-carousel-minimal";
import { useParams } from "react-router-dom";
import RentComponent from "../Home/components/RentComponent";
import SellComponent from "../Home/components/SellComponent";

const SingleView = ({ type }) => {
  const routes = useParams();

  console.log(routes);
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <>
      <div className="md:px-24 px-4 sm:mt-10 mt-24">
        <div className="sm:grid sm:grid-cols-2">
          <div className="md:px-4">
            <Carousel
              data={data}
              time={2000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </div>
          <div className="md:px-4 md:mt-16">
            <div className="bg-mainLightBrown rounded-lg p-8">
              {routes.key === "rent" ? (
                <div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Location
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : Nugegoda
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Size
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : 10 Perches
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Beds
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : 3
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Bath
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : 1
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Monthly Rental
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : 35000 LKR
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Advance
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : 6 Months
                    </div>
                  </div>
                  <div className="mt-4 AF font-bold text-md ">
                    Description :
                  </div>
                  <div className="mt-2 AF font-bold text-md">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Location
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : Nugegoda
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Size
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : 10 Perches
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Type
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : House & land
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Beds
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : 3
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Bath
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : 1
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Monthly Rental
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : 35000 LKR
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      Advance
                    </div>
                    <div className="AF text-white font-bold text-lg sm:text-xl">
                      : 6 Months
                    </div>
                  </div>
                  <div className="mt-4 AF font-bold text-md ">
                    Description :
                  </div>
                  <div className="mt-2 AF font-bold text-md">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        {routes.key === "rent" ? (
          <div>
            <RentComponent />
            <SellComponent />
          </div>
        ) : (
          <div>
            <SellComponent />
            <RentComponent />
          </div>
        )}
      </div>
    </>
  );
};

export default SingleView;
