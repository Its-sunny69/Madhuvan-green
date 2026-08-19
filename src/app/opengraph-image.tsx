import { ImageResponse } from "next/og";

export const alt = "Madhuvan Greens — Family Restaurant in Badlapur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #092d1d 0%, #173d24 52%, #8b651c 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div style={{ color: "#f8cf57", fontSize: 34, letterSpacing: 8, textTransform: "uppercase" }}>
          Family Restaurant
        </div>
        <div style={{ fontSize: 108, fontWeight: 700, marginTop: 28 }}>Madhuvan Greens</div>
        <div style={{ fontSize: 38, marginTop: 34 }}>Veg & non-veg delights amid greenery</div>
        <div style={{ color: "#f8cf57", fontSize: 28, marginTop: 56 }}>Badlapur, Maharashtra</div>
      </div>
    ),
    size,
  );
}
