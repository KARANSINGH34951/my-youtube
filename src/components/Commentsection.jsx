import React, { useEffect } from 'react'

const Commentsection = ({id}) => {
  useEffect(() => {
    funccomment();
  });

  async function funccomment() {
    const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=${import.meta.env.VITE_API_YOUTUBE}`);
    const json = await data.json();
    console.log(json);
  }

  return (
    <div>Commentsection</div>
  )
}

export default Commentsection