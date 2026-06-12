import {
  VideosContainer,
  PageTitle,
  VideosGrid,
  VideoCard,
  VideoThumbnail,
  VideoTitle,
  VideoDescription,
} from "./styled";

function Videos() {
  const videos = [
    { id: 1, title: 'Product Introduction', description: 'Learn about our latest products' },
    { id: 2, title: 'Company Overview', description: 'Get to know GalaxyTech' },
    { id: 3, title: 'Customer Testimonials', description: 'What our customers say' },
  ];

  return (
    <VideosContainer>
      <PageTitle>Videos</PageTitle>
      <VideosGrid>
        {videos.map((video) => (
          <VideoCard key={video.id}>
            <VideoThumbnail>Video Thumbnail</VideoThumbnail>
            <VideoTitle>{video.title}</VideoTitle>
            <VideoDescription>{video.description}</VideoDescription>
          </VideoCard>
        ))}
      </VideosGrid>
    </VideosContainer>
  );
}

export default Videos;
