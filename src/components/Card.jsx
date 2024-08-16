import React from 'react';

const Card = ({ info }) => {
  const { snippet = {}, statistics = {} } = info || {};
  const { title = '', thumbnails = {}, channelTitle = '', publishedAt = '' } = snippet;
  const { viewCount = '0', likeCount = '0' } = statistics;

  const thumbnailUrl = thumbnails?.medium?.url || '';
  const formattedDate = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'N/A';

  return (
    
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
        <img
          className="w-full h-24 object-cover"
          src={thumbnailUrl}
          alt={title || 'Video thumbnail'}
        />
        <div className="p-4 flex-grow">
          <h5 className="text-sm font-semibold mb-1 line-clamp-2">{title || 'No title available'}</h5>
          <p className="text-xs text-gray-700 mb-1">
            <span className="font-bold">Channel:</span> {channelTitle || 'Unknown'}
          </p>
          <p className="text-xs text-gray-700 mb-1">
            <span className="font-bold">Views:</span> {viewCount}
          </p>
          <p className="text-xs text-gray-700 mb-1">
            <span className="font-bold">Likes:</span> {likeCount}
          </p>
          <p className="text-xs text-gray-700">
            <span className="font-bold">Uploaded on:</span> {formattedDate}
          </p>
        </div>
      </div>
    
  );
};

export default Card;
