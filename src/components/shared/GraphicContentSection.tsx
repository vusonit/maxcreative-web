"use client";

import ContentSection from "./ContentSection";
import HorizontalGraphicProjects from "./HorizontalGraphicProjects";

interface GraphicContentSectionProps {
  label: string;
  heading: string;
  description: string;
}

export default function GraphicContentSection({
  label,
  heading,
  description,
}: GraphicContentSectionProps) {
  return (
    <>
      <ContentSection label={label} heading={heading} description={description} />
      <HorizontalGraphicProjects />
    </>
  );
}









