import React from 'react';
import YouTube from 'react-youtube';
 
class YouTubeTutorial extends React.Component {
  render() {
    const opts = {
      height: '500',
      width: '600',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
 
    return <YouTube videoId="6iQ1OOEH1Ns" opts={opts}  />;
  }
 
  
}

export default YouTubeTutorial;