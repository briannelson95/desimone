import React from "react";

type Props = {
    videoId: string
}

const VideoBackground = ({ videoId }: Props) => {
    return (
        <div className="relative -top-0 left-0 h-[325%] w-[325%] lg:-left-36 lg:w-[120%] lg:h-[120%] z-[-1]">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    );
};

export default VideoBackground;
