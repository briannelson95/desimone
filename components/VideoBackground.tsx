import React from "react";

type Props = {
    videoId: string
}

const VideoBackground = ({desktop, mobile}: any) => {
    return (
        <div 
            className="relative top-0 left-0 h-full w-full z-[-1] overflow-y-hidden"
            dangerouslySetInnerHTML={{ __html: `
                <div>
                    <video class="absolute w-full left-0" loop muted autoplay playsinline>
                        <source src="https://cdn.sanity.io/files/syh87i8h/production/47740fc24044f7eb3d41e769370318a0b20be483.mp4" type="video/mp4" />
                    </video
                </div>
                <div>
                    <video class="hidden absolute left-0" loop muted autoplay playsinline>
                        <source src="./background-video.mp4" type="video/mp4" />
                    </video
                </div>
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
