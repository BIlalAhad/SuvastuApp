import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { UseFirebase } from "../Context/Firebase";

export default function Achivement() {
  const [data, setData] = useState([]);
  const [likes,setlikes]=useState([]);
  
  const Firebase = UseFirebase();

  useEffect(() => {
    Firebase.getAChivement().then((item) => setData(item.docs));
  
    console.log(data[0]);
    // Firebase.getlikes().then(item=>setlikes(item.docs.length))
    //  console.log(likes)
  }, []);
  return (
    <div className="my-10">
      <div className=" max-w-7xl mx-auto items-center gap-2 border-b p-5 ">
        <div className="text-center">
          <h2 className="font-bold text-3xl my-3"> Business Achivement</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aperiam
            veniam beatae, reiciendis ad molestiae est aliquid id qui hic dolore
            cupiditate itaque quaerat officia aut. Quo minus neque sed?
          </p>
        </div>
        {/* <img src="achivement.jpeg" alt="" /> */}
      </div>
      {data.map((item) => {
        return (
          <>
            <div className="max-w-3xl mx-auto my-10 shadow">
              <div className="bg-gray-100 p-4">
                <p className="text-sm p-1">{item.data().description}</p>
                <span className="text-sm font-thin text-blue-700 p-1">
                  {item.data().link}
                </span>
              </div>
              <img
                className="h-[400px] w-full object-cover p-4"
                src={`https://firebasestorage.googleapis.com/v0/b/suvastutech-1e3c4.appspot.com/o/${
                  item.data().img
                }?alt=media`}
                alt=""
              />
              <div className="p-4 bg-gray-100 mt-2 flex items-center  gap-14">
                <button className="text-xl flex items-end gap-2"onClick={()=>Firebase.postlikes(item.id)}>
                  <AiFillLike />
                  <span className="text-sm" >
                    {
                      (item.data().likes.length>0)?item.data().likes.length:0
                    }
                  </span>
                </button>
                <div className="text-xl flex items-end gap-2">
                  <FaCommentDots />
                  <span className="text-sm">20</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
