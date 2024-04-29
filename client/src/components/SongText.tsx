import { useState } from "react";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const SongText = () => {
  const [songText, setSongText] = useState<string>("Harnaś ice tea - Gawryle");
  const [songImageUrl, setSongImageUrl] = useState<string>(
    "https://i.scdn.co/image/ab67616d0000b273dd32ff7a02e4efe4c300efe0",
  );
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [songAudio, setSongAudio] = useState<HTMLAudioElement>(
    new Audio(
      "https://p.scdn.co/mp3-preview/ef7ef98d998aa10600eea6ab80d19218bb325925?cid=cfe923b2d660439caf2b557b21f31221",
    ),
  );
  const [isSongPlaying, setIsSongPlaying] = useState<boolean>(false);

  // Set default volume
  songAudio.volume = 0.1;

  const handleImageClick = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  const handlePlay = () => {
    if (songAudio) {
      if (songAudio.paused) {
        setIsSongPlaying(true);
        songAudio.play();
      } else {
        setIsSongPlaying(false);
        songAudio.pause();
      }
    }
  };

  return (
    <div className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-neutral-400 p-3 text-center shadow-xl">
      <img
        src={songImageUrl}
        alt="song"
        className="h-10 w-10 cursor-pointer rounded-lg transition hover:scale-150"
        onClick={handleImageClick}
      />
      <h1 className="text-2xl font-bold text-white">{songText}</h1>
      {isPreviewOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
          <img
            src={songImageUrl}
            alt="song"
            className="max-w-3/4 max-h-3/4 z-10 rounded-lg"
            onClick={handleImageClick}
          />
          <div
            className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50"
            onClick={handleImageClick}
          />
        </div>
      )}

      {isSongPlaying ? (
        <FaPauseCircle
          className="h-8 w-8 cursor-pointer text-green-600"
          onClick={() => handlePlay()}
        />
      ) : (
        <FaPlayCircle
          className="h-8 w-8 cursor-pointer text-green-600"
          onClick={() => handlePlay()}
        />
      )}
    </div>
  );
};

export default SongText;
