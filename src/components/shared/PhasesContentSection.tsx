"use client";

import ContentSection from "./ContentSection";
import ProcessPhases from "./ProcessPhases";

interface PhasesContentSectionProps {
  label: string;
  heading: string;
  description: string;
}

export default function PhasesContentSection({
  label,
  heading,
  description,
}: PhasesContentSectionProps) {
  return (
    <>
      <ContentSection label={label} heading={heading} description={description} />
      <ProcessPhases />
    </>
  );
}

