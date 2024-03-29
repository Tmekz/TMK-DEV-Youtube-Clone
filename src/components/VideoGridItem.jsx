import { useEffect, useRef, useState } from "react";
import FormatDurationVideo from "../utils/FormatDurationVideo";

const VideoGridItem = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}) => {
  // usestate to play video on hover
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef();

  //   allow us to play the video on hover and reset the time when comes back on hover
  useEffect(() => {
    if (videoRef.current == null) return;
    if (videoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [videoPlaying]);

  // to format the duration of the videos cards
  const formattedDuration = FormatDurationVideo(duration);

  // to format the views with "K" ex:"220k" or "1.2M". Using the object Intl.NumberFormat with undefined to let the settings on the browser to choose th
 const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
   notation: "compact",
 });

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setVideoPlaying(true)}
      onMouseLeave={() => setVideoPlaying(false)}
    >
      {/* the whole picture is an ancor to simulate a link to the real video */}
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          alt="picture of card"
          className="block w-full h-full object-cover  object-top  rounded-xl"
        />
        <div className="absolute bottom-1 right-1 text-sm px-1 rounded text-secondary bg-secondary-dark">
          {formattedDuration}
        </div>
        <video
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-200  ${
            videoPlaying ? "opacity-100 delay-200" : "opacity-0"
          }`}
          ref={videoRef}
          muted
          playsInline
          src={videoUrl}
        ></video>
      </a>
      {/* second div down with all the datas name title views released etc */}
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          <img
            src={channel.profileUrl}
            className="w-12 h-12 rounded-full"
            alt="card profile picture"
          />
        </a>
        <div className=" flex flex-col">
          <a href={id} className="font-bold text-lg">
            {title}
          </a>
          <a href={channel.id} className="text-secondary-text text-sm">
            {channel.name}
          </a>
          <div className="text-secondary-text text-sm">
            {`${VIEW_FORMATTER.format(views)} Views`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
