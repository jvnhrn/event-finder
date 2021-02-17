import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

function HosteEventPage() {
  const [event_category, setEvent_category] = useState("");
  const [event_title, setEvent_title] = useState("");
  const [event_description, setEvent_description] = useState("");
  const [event_location, setEvent_location] = useState("");
  const [event_country, setEvent_country] = useState("");
  const [event_city, setEvent_city] = useState("");
  const [event_postalcode, setEvent_postalcode] = useState("");
  const [event_address, setEvent_address] = useState("");
  const [event_host_phone, setEvent_host_phone] = useState("");
  const [event_host_email, setEvent_host_email] = useState("");
  const [event_price, setEvent_price] = useState(0);
  const [event_start_date, setEvent_start_date] = useState("");
  const [event_end_date, setEvent_end_date] = useState("");
  const [event_image, setEvent_image] = useState("");
  const [event_max_participants, setEvent_max_participants] = useState(0);

  // Drag and Drop
  const onDrop = useCallback((acceptedFile) => {
    /* console.log(acceptedFile)
        console.log(acceptedFile[0])
 */
    setEvent_image(
      Object.assign(acceptedFile[0], {
        preview: URL.createObjectURL(acceptedFile[0]),
      })
    );
    /* console.log(acceptedFile[0]) */
    /* console.log(event_image[0]) */
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  /*         const {getRootProps, getInputProps} = useDropzone({
              accept: 'image/*',
              onDrop: acceptedFiles => {
                setFiles(acceptedFiles.map(file => Object.assign(file, {
                  preview: URL.createObjectURL(file)
                })));
              }
            }); */

  // Check event in console
  useEffect(() => {
    console.log(event_image);
  }, [event_image]);

  //Send event data and image. Image is just sent if the event data is save first

  const sendEventData = async () => {
    try {
      const eventData = {
        event_category,
        event_title,
        event_description,
        event_location,
        event_country,
        event_city,
        event_postalcode,
        event_address,
        event_host_phone,
        event_host_email,
        event_price,
        event_start_date,
        event_end_date,
        event_max_participants,
      };
      const sendEvent = await axios.post(
        "http://localhost:7777/events",
        eventData
      );
      console.log(sendEvent.data);
      if (!!sendEvent.data.saveImage) {
        const formData = new FormData();
        formData.append("avatar", event_image, event_image.name);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        const sendImage = await axios.post(
          "http://localhost:7777/image",
          formData,
          config,
          {
            onUploadProgress: (progressEvent) => {
              console.log(
                "Upload progress: " +
                  Math.round(progressEvent.loaded / progressEvent.total) * 100 +
                  "%"
              );
            },
          }
        );
        console.log(sendImage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-10 container mx-auto">
      {/* <form className="content-center px-24 pt-6"  onSubmit="event.preventDefault();"  role="search"> */}
      {/*             <h1 class="tracking-tighter font-light text-3xl text-grey-500 hover:text-gray-900 py-6">
                Host an Event
            </h1> */}

      {/* grid starts here */}

      <p class="pt-24 mt-2 text-gray-800 font-bold 2xl:text-5xl xl:text-3xl lg:text-3xl md:text-3xl text-3xl">
        how this works:
      </p>
      <div class="grid grid-cols-4 gap-6 object-center">
        <div className="pt-6 text-center">
          <h1 class="bg-gradient-to-br from-blue-900 to-pink-900 bg-clip-text text-transparent tracking-tighter font-bold text-9xl py-20">
            1
          </h1>
          <p>👤</p>
          <span class="px-4 tracking-tighter text-lg font-light text-grey-600">
            in order to host an event, you will need an{" "}
            <strong class="font-semibold">eventi account</strong> , just so we
            can verify you as a host and contact person.
          </span>
        </div>

        <div className="py-6 text-center">
          <h1 class="bg-gradient-to-br from-purple-700 to-red-500 bg-clip-text text-transparent tracking-tighter font-bold text-9xl py-20">
            2
          </h1>
          <p>📝</p>
          <span class="px-4 tracking-tighter text-lg font-light text-grey-600">
            <strong class="font-semibold">fill out the form</strong> below with
            your event details. For audience attention retention, upload a
            banging image paired with a banging description
          </span>
        </div>

        <div className="py-6 text-center">
          <h1 class="bg-gradient-to-br from-blue-900 via-pink-600 to-red-500 bg-clip-text text-transparent tracking-tighter font-bold text-9xl py-20">
            3
          </h1>
          <p>👀</p>
          <span class="px-4 tracking-tighter text-lg font-light text-grey-600">
            <strong class="font-semibold">cross-check</strong> for mistakes.
            Don't worry, you can always edit details after you publish an event
          </span>
        </div>

        <div className="py-6 pb-10 text-center">
          <h1 class="bg-gradient-to-br from-red-500 via-pink-600 to-yellow-500 bg-clip-text text-transparent tracking-tighter font-bold text-9xl py-20">
            4
          </h1>
          <p>🚀</p>
          <span class="px-4 tracking-tighter text-lg font-light text-grey-600">
            share share share on all your social media platforms. Remember to{" "}
            <strong class="font-semibold"> tell your friends </strong>about
            eventi.
          </span>
        </div>
      </div>






      <div class=" px-10 pb-10 bg-yellow-50 bg-opacity-5 shadow-2xl rounded-2xl">
        <p class="pt-24 mt-2 text-gray-800 font-bold 2xl:text-5xl xl:text-3xl lg:text-3xl md:text-3xl text-3xl text-center">
          create your event
      </p>
        <div class="grid grid-cols-4 gap-4 container py-4">
          <div className="pt-20">
            <p class="text-md font-bold text-gray-600 my-auto px-2">Most important details of your event</p>
          </div>
          <div id="empty"></div>
          <div id="empty"></div>
          <div id="empty"></div>
          
          <div className="">
            <p class="text-sm text-gray-600 my-auto mb-2 px-2">Give your Event a name</p>
            <input
              onChange={(e) => {
                setEvent_title(e.target.value);
              }}
              type="text"
              name="postal_code"
              id="event_name"
              class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none"
              placeholder="Event name"
            />
          </div>
          <div class=" outline-none">
            <p class="text-sm text-gray-600 my-auto mb-2 px-2">Select a category</p>
            <select
              onChange={(e) => {
                setEvent_category(e.target.value);
              }}
              id="country"
              name="country"
              autocomplete="country"
              class="tracking-tighter bg-gray-100 container mt-1 py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text"
            >
              <option>Category</option>
              <option>Yoga</option>
              <option>Literature</option>
              <option>Food</option>
              <option>Architecture</option>
              <option>Music</option>
              <option>Pottery</option>
              <option>Random</option>
            </select>
          </div>
          <div className="">
            <p class="text-sm text-gray-600 my-auto mb-2 px-2">Number of participants</p>
            <input
              onChange={(e) => {
                setEvent_max_participants(e.target.value);
              }}
              type="number"
              name="event_max_participants"
              id="event_max_participants"
              class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none"
              placeholder="Number of participants"
            />
          </div>
          <div class=" outline-none">
            <p class="text-sm text-gray-600 my-auto mb-2 px-2">Select your Location</p>
            <select
              onChange={(e) => {
                setEvent_location(e.target.value);
              }}
              id="location"
              name=""
              class="tracking-tighter bg-gray-100 container mt-1 block w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text"
              placeholder="location"
            >
              <option>Location</option>
              <option>Indoor</option>
              <option>Outdoor</option>
              <option>Virtual</option>
            </select>
          </div>

          <div class=" tracking-tighter container sm:text outline-none relative text-gray-600">
            <p class="text-sm text-gray-600 my-auto mb-2 px-2">Event starts at:</p>
            <input
              onChange={(e) => {
                setEvent_start_date(e.target.value);
              }}
              type="datetime-local"
              id="date"
              name="event_date"
              value={event_start_date}
              min="2021-01-17"
              max="2100-12-31"
              class="bg-gray-100 container rounded-md px-4 py-2 focus:ring-purple-600 outline-none "
            />
          </div>
          <div class=" tracking-tighter container outline-none relative text-gray-600">
            <p class="text-sm text-gray-600 my-auto mb-2 px-2">Event ends at:</p>
            <input
              onChange={(e) => {
                setEvent_end_date(e.target.value);
              }}
              type="datetime-local"
              id="date"
              name="event_date"
              value={event_end_date}
              min="2021-01-17"
              max="2100-12-31"
              class="bg-gray-100 container rounded-md px-4 py-2 focus:ring-purple-600 outline-none"
            />
          </div>

          <div class="container">
            <p class="text-sm text-gray-600 my-auto mb-2 px-2">Entry Fee:</p>
            <div class=" relative ">
              <div class="absolute left-0 pl-3 items-center pointer-events-auto "></div>
              <input
                onChange={(e) => {
                  setEvent_price(e.target.value);
                }}
                type="number"
                name="price"
                id="price"
                class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none "
                placeholder="0.00"
              />
              <div class="absolute inset-y-0 right-3 flex items-center">
                <select
                  id="currency"
                  name="currency"
                  class="tracking-tighter focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 px-2 bg-transparent text-gray-500 sm:text-sm rounded-md outline-none"
                >
                  <option>EUR</option>
                  <option>USD</option>
                  <option>CAD</option>
                </select>
              </div>
            </div>
          </div>
          <div id="empty"></div>

          <div className="pt-4">
            <p class="text-md font-bold text-gray-600 my-auto px-2">How to get in touch with you?</p>
          </div>
          <div id="empty"></div>
          <div id="empty"></div>
          <div id="empty"></div>

          <div className="">
            <p class="text-sm text-gray-600 my-auto mb-2 px-2">Phone number</p>
            <input
              onChange={(e) => {
                setEvent_host_phone(e.target.value);
              }}
              type="text"
              name="event_host_phone"
              id="event_host_phone"
              class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none"
              placeholder="+01 234 567 89"
            />
          </div>
          <div className="">
            <p class="text-sm text-gray-600 my-auto mb-2 px-2">Email address</p>
            <input
              onChange={(e) => {
                setEvent_host_email(e.target.value);
              }}
              type="email"
              name="event_host_email"
              id="event_host_email"
              class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="pt-4 pb-2">
          <p class="text-md font-bold text-gray-600 my-auto mb-2 px-2">Event address</p>
        </div>

        <div class="grid grid-cols-4 gap-4 container pb-2">
          <div
            onChange={(e) => {
              setEvent_country(e.target.value);
            }}
            className=""
          >
            <input
              type="text"
              name="country"
              id="country"
              autocomplete="country"
              class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none"
              placeholder="Country"
            />
          </div>
          <div
            onChange={(e) => {
              setEvent_address(e.target.value);
            }}
            className=""
          >
            <input
              type="text"
              name="street_address"
              id="street_address"
              autocomplete="street-address"
              class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none"
              placeholder="Street with Number"
            />
          </div>
          <div
            onChange={(e) => {
              setEvent_city(e.target.value);
            }}
            className=""
          >
            <input
              type="text"
              name="city"
              id="city"
              autocomplete="city"
              class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none"
              placeholder="City"
            />
          </div>
          <div
            onChange={(e) => {
              setEvent_postalcode(e.target.value);
            }}
            className=""
          >
            <input
              type="text"
              name="postal_code"
              id="postal_code"
              autocomplete="postal-code"
              class="tracking-tighter bg-gray-100 rounded-md px-4 py-2 container focus:ring-purple-600 outline-none"
              placeholder="Postal Code"
            />
          </div>
        </div>

        <div className="pt-4 pb-2">
          <p class="text-md font-bold text-gray-600 my-auto mb-2 px-2">Event description</p>
          <textarea
            onChange={(e) => {
              setEvent_description(e.target.value);
            }}
            rows="5"
            className="tracking-tighter bg-gray-100 rounded-md px-4 py-6 container focus:ring-purple-600 outline-none"
            id="search"
            type="search"
            placeholder="max. 175 characters"
          />
        </div>

        <div className="pt-4 pb-2">
          <p class="text-md font-bold text-gray-600 my-auto mb-2 px-2">Event image</p>
        </div>

        <div
          {...getRootProps({ className: "dropzone" })}
          class=" flex justify-center container px-6 py-6 border-2 border-gray-300 border-dashed rounded-md"
        >
          <div class="space-y-1 text-center">
            <svg
              class="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div>
              <div class="focus:outline-none flex text-sm text-gray-600 relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 ">
                <input
                  {...getInputProps()}
                  className="focus:outline-none "
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                />
                {isDragActive ? (
                  <p>Drop image here ...</p>
                ) : (
                  <p>Drag 'n' drop or click to select image</p>
                )}
              </div>
            </div>
            <p class="text-xs text-center text-gray-500">JPG up to 10MB</p>
          </div>
        </div>

        <br />

        <div class="flex justify-center container">
          <img
            src={event_image.preview}
            style={{
              display: "block",
              width: "auto",
              height: 150,
            }}
          />
        </div>

        <div className=" pb-10 ">
          <button
            onClick={sendEventData}
            className="text-white rounded-md ring-1 ring-gray-500 tracking-tighter float-right bg-purple-600 hover:bg-purple-800 active:bg-purple-900 text-white font-bold uppercase py-2 px-6 rounded shadow-lg hover:shadow-xl outline-none focus:outline-none transition duration-200" /* type="submit" */
          > Done
          </button>
        </div>

      </div>
    </div>
    );
  }
export default HosteEventPage;
