import { useEffect, useState } from 'react';
import Card from "./Card";
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videosdata, setvideosdata] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${import.meta.env.VITE_API_YOUTUBE}`);
    const json = await data.json();
    setvideosdata(json.items);
    // console.log(json);
  }

  return (
    <div className="flex flex-wrap">
      {
        videosdata.map((video) => (
          <Link 
            key={video.id} 
            to={`/watch?v=${video.id}`}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 p-2"
          >
            <Card info={video} />
          </Link>
        ))
      }
    </div>
  );
};

export default VideoContainer;
