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
    
  const formattedDuration = FormatDurationVideo(duration);
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          alt="picture of card"
          className="block w-full h-full object-cover  object-top  rounded-xl"
        />
        <div className="absolute bottom-1 right-1 text-sm px-1 rounded text-secondary bg-secondary-dark">
          {formattedDuration}
        </div>
      </a>
    </div>
  );
};

export default VideoGridItem;
