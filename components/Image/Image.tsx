/* eslint-disable @next/next/no-img-element */
import { ReactNode, useState } from "react";

interface ImageProps {
  imgSrc: string;
  placeHolder?: ReactNode;
  alt?: string;
  styles?: React.CSSProperties;
}

const Image = ({ imgSrc, placeHolder, alt, styles }: ImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <div style={styles}>
      <img
        onLoad={onLoad}
        src={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          display: loaded ? "block" : "none",
        }}
        alt={alt ? alt : "image"}
      />
      {!loaded ? placeHolder : null}
    </div>
  );
};

export default Image;
