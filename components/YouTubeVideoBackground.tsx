import React from "react";

type Props = {
    videoId: string
}


const YouTubeBackground = ({ videoId }: Props) => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}
        >
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            ></iframe>
        </div>
    );
};

export default YouTubeBackground;
