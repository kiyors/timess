import { Activity, Sparkles, Zap } from "lucide-react";
import type React from "react";

const BRAND_BLUE = "#395299";
const BRAND_YELLOW = "#FBCC03";

const wrapperStyle: React.CSSProperties = {
  backgroundColor: "#fcfcfc",
  backgroundImage: "radial-gradient(#e5e5e5 1px, transparent 1px)",
  backgroundSize: "32px 32px",
  width: "100%",
  height: "100%",
  fontFamily: "Inter, sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#171717",
  position: "relative",
  padding: "4rem",
};

const innerContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  maxWidth: "1000px",
  position: "relative",
  zIndex: 1,
};

const headerRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  marginBottom: "2.5rem",
};

const logoWrapperStyle: React.CSSProperties = {
  width: "5.5rem",
  height: "5.5rem",
  backgroundColor: BRAND_BLUE,
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 8px 16px rgba(57, 82, 153, 0.2)",
};

const logoTextStyle: React.CSSProperties = {
  color: BRAND_YELLOW,
  fontSize: "44px",
  fontWeight: 800,
  letterSpacing: "-0.05em",
  lineHeight: 1,
};

const h1Style: React.CSSProperties = {
  fontSize: "5.5rem",
  fontWeight: 700,
  margin: 0,
  letterSpacing: "-0.04em",
  lineHeight: 1,
  color: "#111111",
};

const titleBaseStyle: React.CSSProperties = {
  fontWeight: 700,
  color: "#1a1a1a",
  maxWidth: "920px",
  margin: 0,
  marginBottom: "1rem",
  lineHeight: 1.15,
  letterSpacing: "-0.03em",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: 400,
  color: "#4a4a4a",
  maxWidth: "920px",
  margin: 0,
  marginBottom: "4rem",
  lineHeight: 1.35,
  letterSpacing: "-0.015em",
};

const footerRowBaseStyle: React.CSSProperties = {
  display: "flex",
  gap: "2.5rem",
  alignItems: "center",
  color: "#555555",
  fontSize: "1.35rem",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
};

const footerItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
};

export async function OgTemplate({ title, description }: any) {
  return (
    <div style={wrapperStyle}>
      <div style={innerContainerStyle}>
        <div style={headerRowStyle}>
          <div style={logoWrapperStyle}>
            <span style={logoTextStyle}>in</span>
          </div>
          <h1 style={h1Style}>Indiefluence</h1>
        </div>

        <p
          style={{
            ...titleBaseStyle,
            fontSize: title && title.length > 50 ? "3.0rem" : "3.8rem",
          }}
        >
          {title || "From ideas to impact."}
        </p>

        {description && <p style={descriptionStyle}>{description}</p>}

        <div
          style={{
            ...footerRowBaseStyle,
            marginTop: description ? "0" : "3rem",
          }}
        >
          <div style={footerItemStyle}>
            <Zap size={24} color={BRAND_BLUE} strokeWidth={2.5} />
            <span>Growth Studio</span>
          </div>
          <div style={footerItemStyle}>
            <Activity size={24} color={BRAND_BLUE} strokeWidth={2.5} />
            <span>Psychology-Led</span>
          </div>
          <div style={footerItemStyle}>
            <Sparkles size={24} color={BRAND_BLUE} strokeWidth={2.5} />
            <span>AI Solutions</span>
          </div>
        </div>
      </div>
    </div>
  );
}
