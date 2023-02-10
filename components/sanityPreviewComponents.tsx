import {Stack, Card, Flex } from '@sanity/ui'
import getYouTubeID from 'get-youtube-id'
import YouTube, { YouTubeProps } from 'react-youtube'

export function MediaPreview(props: any) {
    const {title, url} = props
  
    return (
        <Flex align="center" justify="center" height="fill">
            <Card border padding={3}>
                <Stack space={3} marginBottom={3}>
                    <img src={url} alt={title} style={{width: '100%'}} />
                </Stack>
            </Card>
        </Flex>
    )
}

export function VideoPreview(props: any) {
    const {url} = props
    const id = getYouTubeID(url)
    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
  
    return (
        <YouTube 
            videoId={id!}
            opts={opts}
        />
    )
}