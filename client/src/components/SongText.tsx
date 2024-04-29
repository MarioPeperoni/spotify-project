import { useState } from "react";

import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const SongText = () => {
  const [song, setSong] = useState<Song>({
    name: "Kinol - Sobel",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b273f92ecef77f22321175f71ff4",
    previewAudio: new Audio(
      "https://p.scdn.co/mp3-preview/5210a693d14e451ac43abde50e944c58bdad55e4?cid=cfe923b2d660439caf2b557b21f31221",
    ),
  });
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [isSongPlaying, setIsSongPlaying] = useState<boolean>(false);

  // Set default volume
  song.previewAudio.volume = 0.1;

  const handleImageClick = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  const handlePlay = () => {
    if (song.previewAudio.paused) {
      setIsSongPlaying(true);
      song.previewAudio.play();
    } else {
      setIsSongPlaying(false);
      song.previewAudio.pause();
    }
  };

  return (
    <div className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-neutral-400 p-3 text-center shadow-xl">
      <img
        src={song.imageUrl}
        alt="song"
        className="h-10 w-10 cursor-pointer rounded-lg transition hover:scale-150"
        onClick={handleImageClick}
      />
      <h1 className="text-2xl font-bold text-white">{song.name}</h1>
      {isPreviewOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
          <img
            src={song.imageUrl}
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
