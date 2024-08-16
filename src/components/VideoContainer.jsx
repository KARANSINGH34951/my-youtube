import { useEffect, useState } from 'react'
import Card from "./Card"

const VideoContainer = () => {

  const [videosdata,setvideosdata]=useState([])

  useEffect(()=>{
    fetchdata()
  },[])

  async function fetchdata(){
    const data=await fetch (`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${import.meta.env.VITE_API_YOUTUBE}`)

    const json= await data.json()
    setvideosdata(json.items)
    // console.log(json);
  }

  

  return (
    <div className='flex flex-wrap'> 
      {
        videosdata.map((video)=>(
          <Card info={video}/>
        ))

      }
      <Card info={videosdata[0]}/>
    </div>
  )
}

export default VideoContainer