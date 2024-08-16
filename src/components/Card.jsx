import React from 'react';

const Card = ({ info }) => {
  const { snippet = {}, statistics = {} } = info || {};
  const { title = '', thumbnails = {}, channelTitle = '', publishedAt = '' } = snippet;
  const { viewCount = '0', likeCount = '0' } = statistics;

  const thumbnailUrl = thumbnails?.medium?.url || '';
  const formattedDate = new Date(publishedAt).toLocaleDateString();

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
        <img className="w-full h-24 object-cover" src={thumbnailUrl} alt={title} />
        <div className="p-4 flex-grow">
          <h5 className="text-sm font-semibold mb-1 line-clamp-2">{title}</h5>
          <p className="text-xs text-gray-700 mb-1"><span className="font-bold">Channel:</span> {channelTitle}</p>
          <p className="text-xs text-gray-700 mb-1"><span className="font-bold">Views:</span> {viewCount}</p>
          <p className="text-xs text-gray-700 mb-1"><span className="font-bold">Likes:</span> {likeCount}</p>
          <p className="text-xs text-gray-700"><span className="font-bold">Uploaded on:</span> {formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
