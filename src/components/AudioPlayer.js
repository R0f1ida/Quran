import React, { useRef } from "react";

const AudioPlayer = (props) => {
  const audioRefs = useRef([]);

  const handleAudioEnd = (index) => {
    // Check if there's a next audio element
    if (audioRefs.current[index + 1]) {
      // Play the next audio
      audioRefs.current[index + 1].play();
    }
  };

  return (
    <div>
        {
            props.audioList.map((index) => {
                return (
                    <audio
                        ref={(el) => (audioRefs.current[index] = el)}
                        onEnded={() => handleAudioEnd(index)}
                    >
                        <source src={`https:\/\/cdn.islamic.network\/quran\/audio\/128\/ar.alafasy\/${index + 1}.mp3`} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                )
            })
        }

      {/* <audio
        ref={(el) => (audioRefs.current[1] = el)}
        onEnded={() => handleAudioEnd(1)}
      >
        <source src="https:\/\/cdn.islamic.network\/quran\/audio\/128\/ar.alafasy\/3.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio
        ref={(el) => (audioRefs.current[2] = el)}
        onEnded={() => handleAudioEnd(2)}
      >
        <source src="https:\/\/cdn.islamic.network\/quran\/audio\/128\/ar.alafasy\/4.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}
      <button onClick={() => audioRefs.current[0].play()}>Play All</button>
    </div>
  );
};

export default AudioPlayer;
