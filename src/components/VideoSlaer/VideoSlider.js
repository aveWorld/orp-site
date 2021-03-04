import React from 'react';

const VideoSlider = () => (
  <div className="video">
    <div className="video__player">
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        src="https://www.youtube.com/embed/FWi2bn40ma4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <div className="video__list">
      <div className="video__slide">
        Slide Deck
      </div>
      <div className="video__slide">
        1 Pager
      </div>
    </div>

  </div>
);

export default VideoSlider;
