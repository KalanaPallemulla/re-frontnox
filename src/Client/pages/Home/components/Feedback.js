import React from "react";
import { BsPersonFill } from "react-icons/bs";
import F1 from "../../../assets/F1.jpeg";
import F2 from "../../../assets/F2.jpeg";
import F3 from "../../../assets/F3.jpeg";
import F4 from "../../../assets/F4.jpeg";
import F5 from "../../../assets/F5.jpeg";
import Profile from "../../../assets/Profile.png";

const Feedback = () => {
  return (
    <div className="mt-8">
      <div className="md:grid md:grid-cols-3">
        <div></div>
        <div className="h-16 bg-mainDarkBrown col-span-1 rounded-sm">
          <div className="flex items-center h-16 px-4 text-2xl md:text-4xl font-serif text-white justify-center ">
            Feedbacks
            <BsPersonFill className=" text-2xl md:text-4xl ml-4" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="mt-12 md:px-32 border-b border-gray-100">
        <div className="md:grid md:grid-cols-3 ">
          {/* Col1 */}
          <div className="">
            <div className="container md:grid md:grid-rows-3 justify-center">
              <div className="md:p-8 p-2">
                <div
                  className=" h-48 w-full hover:scale-110 transition-all"
                  style={{
                    backgroundImage: `url(${F1})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className=" p-2 flex items-center">
                    <div
                      className="h-8  w-8 rounded-full"
                      style={{
                        backgroundImage: `url(${Profile})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <div className="ml-2 text-xs AF text-gray-700">
                      John Smith
                    </div>
                  </div>

                  <div className=" flex items-center h-48">
                    <h1 className="AF text-xl text-center -mt-16 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incid alor the old familer olfre
                      idunt ut labore ellt{" "}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="hidden md:block h-48 items-center"></div>
              <div className="md:px-8 p-2">
                <div
                  className=" h-48 w-full hover:scale-110 transition-all"
                  style={{
                    backgroundImage: `url(${F1})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className=" p-2 flex items-center">
                    <div
                      className="h-8  w-8 rounded-full"
                      style={{
                        backgroundImage: `url(${Profile})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <div className="ml-2 text-xs AF text-gray-700">
                      John Smith
                    </div>
                  </div>

                  <div className=" flex items-center h-48">
                    <h1 className="AF text-xl text-center -mt-16 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incid alor the old familer olfre
                      idunt ut labore ellt{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Col2 */}
          <div className="">
            <div className="container md:grid md:grid-rows-3 justify-center">
              <div className="md:p-2 p-2">
                <div
                  className=" h-48 w-full hover:scale-110 transition-all"
                  style={{
                    backgroundImage: `url(${F5})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className=" p-2 flex items-center">
                    <div
                      className="h-8  w-8 rounded-full"
                      style={{
                        backgroundImage: `url(${Profile})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <div className="ml-2 text-xs AF text-gray-700">
                      John Smith
                    </div>
                  </div>

                  <div className=" flex items-center h-48">
                    <h1 className="AF text-xl text-center -mt-16 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incid alor the old familer olfre
                      idunt ut labore ellt{" "}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="md:p-2 p-2 ">
                <div
                  className=" h-48 w-full hover:scale-110 transition-all"
                  style={{
                    backgroundImage: `url(${F2})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className=" p-2 flex items-center">
                    <div
                      className="h-8  w-8 rounded-full"
                      style={{
                        backgroundImage: `url(${Profile})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <div className="ml-2 text-xs AF text-white">John Smith</div>
                  </div>

                  <div className=" flex items-center h-48">
                    <h1 className="AF text-xl text-center -mt-16 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incid alor the old familer olfre
                      idunt ut labore ellt{" "}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="md:p-2 p-2">
                <div
                  className=" h-48 w-full hover:scale-110 transition-all"
                  style={{
                    backgroundImage: `url(${F3})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className=" p-2 flex items-center">
                    <div
                      className="h-8  w-8 rounded-full"
                      style={{
                        backgroundImage: `url(${Profile})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <div className="ml-2 text-xs AF text-white">John Smith</div>
                  </div>

                  <div className=" flex items-center h-48">
                    <h1 className="AF text-xl text-center -mt-16 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incid alor the old familer olfre
                      idunt ut labore ellt{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Col3 */}
          <div className="">
            <div className="container md:grid md:grid-rows-3 justify-center">
              <div className="hidden md:block h-48 items-center"></div>
              <div className="md:p-4 p-2">
                <div
                  className=" h-48 w-full hover:scale-110 transition-all"
                  style={{
                    backgroundImage: `url(${F4})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className=" p-2 flex items-center">
                    <div
                      className="h-8  w-8 rounded-full"
                      style={{
                        backgroundImage: `url(${Profile})`,
                        backgroundSize: "cover",
                      }}
                    />
                    <div className="ml-2 text-xs AF text-gray-700">
                      John Smith
                    </div>
                  </div>

                  <div className=" flex items-center h-48">
                    <h1 className="AF text-xl text-center -mt-16 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incid alor the old familer olfre
                      idunt ut labore ellt{" "}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="hidden md:block h-48 items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
