import React from "react";

type Props = {
    videoId: string
}

const VideoBackground = ({ videoId }: Props) => {
    return (
        <div className="relative top-0 left-0 h-full w-full z-[-1]">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
            />
        </div>
    );
};

export default VideoBackground;
