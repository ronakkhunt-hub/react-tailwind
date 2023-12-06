import React, { useState } from "react";
import coverImage from "../assets/coverImage.png";
import profileImg from "../assets/profileOverview.png";
import mainProfile from "../assets/mainProfile.png";
import offer3 from "../assets/offerSvg.svg";
import "./OverviewPage.css";

function OverviewPage() {
  const [selectedValue, setSelectedValue] = useState(1);
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <>
      <div
        className={
          toggleModal
            ? "fixed z-20 top-0 left-0 w-full h-screen overflow-hidden bg-black/50 block"
            : "hidden"
        }
      >
        <div className="bg-white w-3/5 h-80 mx-auto my-20 py-4 px-2 rounded-xl lg:w-1/4 md:w-2/5">
          <div className="flex justify-between items-center my-1 mx-2">
            <p className="font-semibold my-0 mx-2">Make Counter Offer</p>
            <span
              onClick={() => setToggleModal(false)}
              className="text-4xl cursor-pointer"
            >
              &times;
            </span>
          </div>
          <span className="text-violet-600 ml-4">#72873</span>
          <div className="flex items-center mx-4 mt-5">
            <span className="font-semibold">To</span>
            <img className="ml-3" src={profileImg} alt="profile" />
            <p className="text-violet-600 ml-3">CryptoKing.near</p>
          </div>
          <div className="flex flex-col h-1/2 mx-4 mt-5">
            <span className="font-semibold">Amount</span>
            <div className="relative w-full mx-auto h-1/2 flex items-center mt-2">
              <input
                className="absolute rounded-l-lg border-2 border-r-2 top-0 h-10 left-0 bg-gray-50 outline-none pl-2 inputField"
                type="text"
                placeholder="0.0000"
              />
              <select
                className="absolute rounded-r-lg border-t-2 border-r-2 border-b-2 top-0 w-1/4 h-10 text-center right-0 bg-gray-50 outline-none"
                name=""
                id=""
              >
                <option value="">Near</option>
                <option value="">Near1</option>
              </select>
            </div>
            <div
              onClick={() => setToggleModal(false)}
              className="relative w-full h-8 leading-8 mx-auto cursor-pointer flex justify-center items-center mt-0 bg-violet-500"
            >
              <img
                className="absolute h-6 w-6 left-1 text-center"
                src={offer3}
                alt=""
              />
              <span className="absolute w-11/12 text-white top-0 right-3 text-center">
                Make Offer
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen w-full mx-auto bg-white lg:w-25 md:w-4/12">
        <img className="h-2/3 w-full" src={coverImage} alt="cover" />
        <div className="pb-4">
          <div className="space-y-1 p-5">
            <h3 className="font-semibold">Digital Ninja</h3>
            <p className="text-blue-500">#72873</p>
            <div class="flex items-center">
              <img
                class="rounded-full border-none border-gray-500 shadow-sm"
                src={mainProfile}
                height="50"
                width="50"
                alt="userImage"
              />
              <p className="ml-2 font-semibold">JohnDoe.near</p>
            </div>
          </div>
          <div className="grid grid-cols-3 text-center">
            <p
              className={
                selectedValue === 1
                  ? "border-b-4 border-b-slate-700 pb-4 text-gray-800 font-semibold cursor-pointer"
                  : "border-b-2 text-gray-500 pb-4 cursor-pointer"
              }
              onClick={() => setSelectedValue(1)}
            >
              Info
            </p>
            <p
              className={
                selectedValue === 2
                  ? "border-b-4 border-b-slate-700 pb-4 text-gray-800 font-semibold cursor-pointer"
                  : "border-b-2 text-gray-500 pb-4 cursor-pointer"
              }
              onClick={() => setSelectedValue(2)}
            >
              Pending Offers
            </p>
            <p
              className={
                selectedValue === 3
                  ? "border-b-4 border-b-slate-700 pb-4 text-gray-800 font-semibold cursor-pointer"
                  : "border-b-2 text-gray-500 pb-4 cursor-pointer"
              }
              onClick={() => setSelectedValue(3)}
            >
              Trade History
            </p>
          </div>
          <div className="mx-3 overflow-hidden">
            {selectedValue === 1 && (
              <div className="info mt-5">
                <div className="space-y-4">
                  <h3>Overview</h3>
                  <p>
                    digital ninjas are a collection of 1000 unique collectibles
                    on the NEAR blockchain that serve to honor and preserve art.
                  </p>
                </div>
              </div>
            )}
            {selectedValue === 2 && (
              <div className="info">
                <p className="my-5">2 active offer</p>
                <div className="space-y-4">
                  <div className="flex">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-10"
                      src={profileImg}
                      alt="userImage"
                    />
                    <div className="mx-2 space-y-1">
                      <p>
                        <span className="text-slate-400">Lorem ipsum </span>
                        dolor sit amet, consectetur
                        <span className="font-semibold"> 0.345 NEAR</span>
                      </p>
                      <p>5 days ago</p>
                      <div className="flex justify-between">
                        <button className="bg-slate-800 text-white rounded px-4">
                          Accept
                        </button>
                        <button
                          onClick={() => setToggleModal(true)}
                          className="bg-slate-800 text-white rounded px-4"
                        >
                          Counter offer
                        </button>
                        <button className="border-2 border-black rounded px-4">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-10"
                      src={profileImg}
                      alt="userImage"
                    />
                    <div className="mx-2 space-y-1">
                      <p>
                        <span className="text-slate-400">Lorem ipsum </span>
                        dolor sit amet, consectetur
                        <span className="font-semibold"> 0.345 NEAR</span>
                      </p>
                      <p>5 days ago</p>
                      <div className="flex justify-between">
                        <button className="bg-slate-800 text-white rounded px-5">
                          Accept
                        </button>
                        <button className="bg-slate-800 text-white rounded px-5">
                          Counter offer
                        </button>
                        <button className="border-2 border-black rounded px-5">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-10"
                      src={profileImg}
                      alt="userImage"
                    />
                    <div className="mx-2 space-y-1">
                      <p>
                        <span className="text-slate-400">Lorem ipsum </span>
                        dolor sit amet, consectetur
                        <span className="font-semibold"> 0.345 NEAR</span>
                      </p>
                      <p>5 days ago</p>
                      <div className="flex justify-between">
                        <button className="bg-slate-800 text-white rounded px-5">
                          Accept
                        </button>
                        <button className="bg-slate-800 text-white rounded px-5">
                          Counter offer
                        </button>
                        <button className="border-2 border-black rounded px-5">
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedValue === 3 && (
              <div className="info mt-5">
                <div className="space-y-4">
                  <div className="flex">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-10"
                      src={profileImg}
                      alt="userImage"
                    />
                    <div className="mx-2">
                      <p>
                        johdoe.near bought #72873 from
                        <span className="text-slate-400"> ninjaking.near</span>
                      </p>
                      <p>5 days ago</p>
                    </div>
                  </div>
                  <div className="flex">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm h-10"
                      src={profileImg}
                      alt="userImage"
                    />
                    <div className="mx-2">
                      <p>
                        <span className="text-slate-400">ninjaking.near </span>
                        minted #72873
                      </p>
                      <p>3 months ago</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OverviewPage;
