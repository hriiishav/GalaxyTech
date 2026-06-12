import {
  PhotosContainer,
  PageTitle,
  PhotosGrid,
  PhotoCard,
  PhotoImage,
  PhotoCaption,
  PhotoTitle,
} from "./styled";

function Photos() {
  const photos = [
    { id: 1, title: 'Product Gallery 1' },
    { id: 2, title: 'Product Gallery 2' },
    { id: 3, title: 'Team Photo' },
    { id: 4, title: 'Office Tour' },
  ];

  return (
    <PhotosContainer>
      <PageTitle>Photos</PageTitle>
      <PhotosGrid>
        {photos.map((photo) => (
          <PhotoCard key={photo.id}>
            <PhotoImage>Photo</PhotoImage>
            <PhotoCaption>
              <PhotoTitle>{photo.title}</PhotoTitle>
            </PhotoCaption>
          </PhotoCard>
        ))}
      </PhotosGrid>
    </PhotosContainer>
  );
}

export default Photos;
