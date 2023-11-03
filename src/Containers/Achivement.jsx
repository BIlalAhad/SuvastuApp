import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { UseFirebase } from "../Context/Firebase";

export default function Achivement() {
  const [data, setData] = useState([]);
  const [likes, setLikes] = useState([]);
  const [comment, setComment] = useState([]);
  // console.log(comment);

  const Firebase = UseFirebase();

  useEffect(() => {
    Firebase.getAChivement().then((item) => setData(item.docs));

    console.log(data[0]);
    // Firebase.getlikes().then(item => setlikes(item.docs.length))
    //  console.log(likes)
  }, []);

  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto items-center gap-2 border-b p-5">
        <div className="text-center">
          <h2 className="font-bold text-3xl my-3"> Business Achievement</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aperiam
            veniam beatae, reiciendis ad molestiae est aliquid id qui hic dolore
            cupiditate itaque quaerat officia aut. Quo minus neque sed?
          </p>
        </div>
        {/* <img src="achievement.jpeg" alt="" /> */}
      </div>
      {data.map((item) => {
        return (
          <div key={item.id} className="max-w-3xl mx-auto my-10 shadow">
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
            <div className="p-4 bg-gray-100 mt-2 flex items-center gap-14">
              <button
                className="text-xl flex items-end gap-2"
                onClick={() => Firebase.postlikes(item.id)}
              >
                <AiFillLike />
                <span className="text-sm">
                  {item.data().likes && item.data().likes.length}
                </span>
              </button>
              <div className="text-xl flex items-end gap-2">
                <FaCommentDots />
                <span className="text-sm">{item.data().comments&&item.data().comments.length}</span>
              </div>
            </div>
            <div className="bg-gray-100 p-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="p-1 border border-orange-100 rounded w-full"
                />
                <button
                  className="bg-orange-500 text-white rounded p-2"
                  onClick={() => Firebase.postComment(item.id, comment)}
                >
                  comment
                </button>
              </div>
              <ul className="my-5 bg-white p-5 h-[100px] overflow-auto">
                {item.data().comments &&
                  item.data().comments.map((comment,i) => {
                    return (
                      <li key={comment.id} className="border-b shadow p-2 mt-3 hover:bg-gray-100 relative" >
                        <button className="text-red-500 absolute right-0 top-3 p-2" onClick={()=>Firebase.deletecomment(item.id,i)}><RiDeleteBin6Line/></button>
                        <p>{comment.comment}</p>
                        <address className="text-sm text-orange-400">{comment.user}</address>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
