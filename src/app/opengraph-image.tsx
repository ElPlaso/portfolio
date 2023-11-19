import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "plasokusay.com";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          color: "#5F6368",
          background: "#202124",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="logo"
            src="https://plasokusay.com/images/profile.jpg"
            style={{
              objectFit: "cover",
              borderRadius: "15%",
              border: "4px #5F6368",
            }}
            width={350}
            height={350}
          />
        </div>
        plaso kusay
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
