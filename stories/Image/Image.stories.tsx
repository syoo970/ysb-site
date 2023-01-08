import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "@/components/Image";
import { Skeleton } from "@mui/material";
import styled from "@emotion/styled";

export default {
  component: Image,
} as ComponentMeta<typeof Image>;

const TEST_IMG_URL =
  "https://cdn.pixabay.com/photo/2022/11/29/17/40/african-elephants-7624960_960_720.jpg";

const ImageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
};

export const Default: ComponentStory<typeof Image> = () => {
  return (
    <Container>
      <Image
        imgSrc={TEST_IMG_URL}
        alt="test image"
        placeHolder={
          <ImgSkeleton
            sx={{ width: "100%", height: "100%" }}
            variant="rectangular"
          />
        }
        styles={ImageStyle}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  aspect-ratio: 16 / 9;
`;

const ImgSkeleton = styled(Skeleton)`
  width: 500px;
  aspect-ratio: 16 / 9;
`;
