import React, { useState } from "react";
import DashboardSidebar from "../Components/DashboardSidebar";
import { UseFirebase } from "../Context/Firebase";

const Addachivement = () => {
  const [img, setImg] = useState([]);
  const [description, setDescription] = useState([]);
  const [link, setLink] = useState([]);
  const [data, setData] = useState([]);

  const Firebase = UseFirebase();
  useState(() => {
    Firebase.getAChivement().then((item) => setData(item.docs));
  }, []);
  const handleform = (e) => {
    Firebase.postAchivement(img, link, description);
    e.preventDefault();
    console.log(img, description, link);
  };
  return (
    <div className="flex gap-5">
      <DashboardSidebar />
      <div className="w-full">
        <div class="p-6 bg-white w-full flex items-center justify-center rounded-md ">
          <form className="w-[100vh]  space-y-4" onSubmit={handleform}>
            <div>
              <label htmlFor="" className="w-full">
                image
              </label>
              <input
                type="file"
                onChange={(e) => {
                  setImg(e.target.files[0]);
                }}
              />
            </div>
            <div>
              <label htmlFor=""> link</label>
              <input
                type="text"
                className="w-full border p-2 mt-2 "
                onChange={(e) => {
                  setLink(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="">Description</label>
              <input
                type="text"
                placeholder=" description"
                className="w-full border p-2 mt-2 "
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <button
              className="border p-2 px-10 bg-blue-800 text-white hover:bg-blue-700"
              type="submit"
            >
              post
            </button>
          </form>
        </div>

        <div>
          {
            <table className="w-full text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th>
                    image
                  </th>
                  <th>
                    description
                  </th>
                  <th>
                    Link
                  </th>
                  <th>
                   <button className="bg-blue-800 hover:bg-blue-700 text-sm text-white p-2">
                      update
                   </button>
                  </th>
                  <th>
                  <button className="bg-red-600 hover:bg-red-500 text-sm text-white p-2">
                      Delete
                   </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map(item=>{
                  return <>
                  <tr className="border-b  text-center">
                    <td>
                      <img className="w-16 h-16 object-cover" src={`https://firebasestorage.googleapis.com/v0/b/suvastutech-1e3c4.appspot.com/o/${item.data().img}?alt=media`} alt="" />
                    </td>
                    <td>
                      {item.data().description}
                    </td>
                    <td>
                      {item.data().link}
                    </td>
                  <td>
                   <button className="bg-blue-800 hover:bg-blue-700 text-sm text-white p-2" onClick={()=>Firebase.updateAchivement(item.id)}>
                      update
                   </button>
                  </td>
                  <td>
                  <button className="bg-red-600 hover:bg-red-500 text-sm text-white p-2"  onClick={()=>Firebase.deleteAchivement(item.id)}>
                      Delete
                   </button>
                  </td>
                  </tr>
                  </>
                })
                }
              </tbody>
            </table>
          }
        </div>
      </div>
    </div>
  );
};

export default Addachivement;
