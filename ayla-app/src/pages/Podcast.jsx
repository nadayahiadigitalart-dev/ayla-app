import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Podcast.css';

const PODCASTS = [
  { id: 1, title: "Understand their way of think..", author: "Dr. Gamal Mohamed, Expert",
     url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 2, title: "Why toddlers say no to every..", author: "Dr. Sarah Amin, Child Psychologist",
     url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 3, title: "The Power of Choices", author: "Dr. Hend Sherif, Parenting Expert",
     url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
];

const Podcast = () => {
  const [currentTrack, setCurrentTrack] = useState(PODCASTS[1]); // Default to second one like your image
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(currentTrack.url));

  
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(() => console.log("User interaction required first"));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const Podcast = () => {
  const [currentTrack, setCurrentTrack] = useState(PODCASTS[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  }
  
  // Start with null
//   const audioRef = useRef(null);

//   useEffect(() => {
    // Initialize audio only once on mount
    // audioRef.current = new Audio(currentTrack.url);
    
    // Cleanup: Pause audio if user leaves the page
//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//       }
//     };
//   }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => console.log("Interaction required"));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Rest of your switchTrack and return code...

  
  const switchTrack = (track) => {
    if (currentTrack.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      audioRef.current = new Audio(track.url);
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <div className="podcast-container">
      <header className="header">
        <Link to="/parenting" className="back-button">‹</Link>
        <h1 className="header-title">Understanding your toddler</h1>
      </header>

    
      <div className="main-player">
        <div className="disc-visual">
           <div className="disc-gradient"></div>
           <button className="main-play-pause" onClick={() => setIsPlaying(!isPlaying)}>
             <span>{isPlaying ? '||' : '▶'}</span>
           </button>
        </div>
        <p className="timer">3:45 - 7:09</p>
      </div>

      <div className="now-playing-info">
        <h2 className="current-title">{currentTrack.title}</h2>
        <p className="current-author">{currentTrack.author}</p>
      </div>

      <h3 className="list-label">Listen to</h3>

      <div className="podcast-list">
        {PODCASTS.map((track) => (
          <div 
            key={track.id} 
            className={`podcast-card ${currentTrack.id === track.id ? 'active-card' : ''}`}
            onClick={() => switchTrack(track)}
          >
            <div className="play-icon-box">
              <span>{currentTrack.id === track.id && isPlaying ? '||' : '▶'}</span>
            </div>
            <div className="card-text">
              <p className="card-title">{track.title}</p>
              <p className="card-author">{track.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;