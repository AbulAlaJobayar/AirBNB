import { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "../../Shard/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";

const Room = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  const [rooms, setRoom] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("./room.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter((room) => room.category === category);
          setRoom(filtered);
        } else {
          setRoom(data);
        }

        setLoading(false);
      });
  }, [category]);
  if (loading) {
    return <Loader></Loader>;
  }

  return (
   <>
   {
    rooms&&rooms.length>0? <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2x:grid-cols-6 gap-8">
    {rooms.map((room, index) => (
      <p key={index}>
        <Card room={room}></Card>
      </p>
    ))}
  </div>:<div className="pt-12">
    <Heading
    title="No Rooms Available In This Category"
    subtitle="Please Selected Other Category"
    center={true}
    ></Heading>
  </div>
   }
   </>
  );
};

export default Room;
