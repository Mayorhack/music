import React, { useEffect, useRef, useState } from "react";
import image from "../assets/10.png";
import song from "../assets/asake.mp3";
import {
  BiPause,
  BiPlay,
  BiShuffle,
  BiSkipNext,
  BiSkipPrevious,
  BiVolumeFull,
} from "react-icons/bi";
import { RiRepeatOneLine } from "react-icons/ri";

const Player = () => {
  const audioElement = useRef({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState({});
  const clickRef = useRef();
  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElement.current.currentTime = (divprogress / 100) * currentSong.length;
  };
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);
  const onPlaying = () => {
    const duration = audioElement.current?.duration;
    const ct = audioElement.current?.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };
  return (
    <div className="player">
      <audio src={song} ref={audioElement} onTimeUpdate={onPlaying}></audio>
      <div className="album">
        <img src={image} alt="" />
        <p className="music_name">Seasons in</p>
        <p className="artist">James</p>
      </div>
      <div className="player_controls">
        <div className="player_control">
          <BiShuffle />
          <BiSkipPrevious />
          <div className="" onClick={() => setIsPlaying((prev) => !isPlaying)}>
            {!isPlaying ? <BiPlay /> : <BiPause />}
          </div>
          <BiSkipNext />
          <RiRepeatOneLine />
        </div>
        <div className="progressbar" onClick={checkWidth}>
          <div
            className="progress"
            style={{
              width: `${
                (audioElement.current.currentTime /
                  audioElement.current.duration) *
                100
              }%`,
            }}
          >
            <div className="marker"></div>
          </div>
        </div>
      </div>
      <div className="volume_control">
        <BiVolumeFull />
        <div className="progressbar">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;
