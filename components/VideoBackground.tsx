import React from "react";

type Props = {
    videoId: string
}

const VideoBackground = ({ videoId }: Props) => {
    return (
        <div 
            className="relative top-0 left-0 h-full w-full z-[-1] overflow-y-hidden"
            dangerouslySetInnerHTML={{ __html: `
                <video class="absolute -top-20 left-0 h-[125%] w-[125%]" loop muted autoplay playsinline>
                    <source src="./background-video.mp4" type="video/mp4" />
                </video
            `}}
        >
            {/* <video 
                className="absolute -top-20 left-0 h-[125%] w-[125%]" 
                dangerouslySetInnerHTML={{ __html: 
                    `loop muted autoplay playsinline
                    <source src="./background-video.mp4" type="video/mp4" />`
                }}
            >
                <source src="./background-video.mp4" type="video/mp4" />
            </video> */}
            {/* <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playlist=${videoId}&loop=1&controls=0&modestbranding=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
            /> */}
        </div>
    );
};

export default VideoBackground;
