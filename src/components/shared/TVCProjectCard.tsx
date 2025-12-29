"use client";

import { useState } from "react";
import Image from "next/image";

interface TVCProjectCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  onClick?: () => void;
  isExpanded?: boolean;
}

export default function TVCProjectCard({
  id,
  title,
  description,
  thumbnail,
  onClick,
  isExpanded = false,
}: TVCProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .tvc-project-card-desktop {
            position: relative;
            width: 1224px;
            height: 224px;
            margin: 0 auto;
          }
          .tvc-title-desktop {
            position: absolute;
            width: 287px;
            height: 70px;
            top: 25px;
            left: 104px;
            font-family: var(--font-svn-poppins);
            font-weight: 400;
            font-style: normal;
            font-size: 40px;
            line-height: 175%;
            letter-spacing: 0%;
          }
          .tvc-media-desktop {
            position: absolute;
            width: 286px;
            height: 161px;
            top: 30px;
            left: 416px;
          }
          .tvc-description-desktop {
            position: absolute;
            top: 30px;
            left: 730px;
            right: 131px;
            font-family: var(--font-svn-poppins);
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            line-height: 175%;
            letter-spacing: 0%;
          }
          .tvc-icon-button-desktop {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 30px;
            right: 31px;
            border: 0.5px solid #FFFFFF;
            border-radius: 200px;
            transition: transform 0.3s ease, border-color 0.3s ease;
          }
          .tvc-icon-button-desktop:hover:not(.clicked) {
            border-color: #F0004D;
          }
          .tvc-icon-button-desktop:hover:not(.clicked) .tvc-icon-image {
            filter: brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(5000%) hue-rotate(330deg) brightness(1) contrast(1);
          }
          .tvc-icon-button-desktop.clicked {
            transform: rotate(45deg) !important;
          }
          .tvc-icon-button-desktop.clicked:hover {
            border-color: #F0004D;
            transform: rotate(45deg) !important;
          }
          .tvc-icon-button-desktop.clicked:hover .tvc-icon-image {
            filter: brightness(0) saturate(100%) invert(20%) sepia(100%) saturate(5000%) hue-rotate(330deg) brightness(1) contrast(1);
          }
          .tvc-icon-image {
            transition: filter 0.3s ease, transform 0.3s ease;
          }
          @media (max-width: 1280px) {
            .tvc-project-card-desktop {
              width: 100%;
              max-width: 1224px;
              padding: 0 24px;
            }
            .tvc-title-desktop {
              left: 24px;
              font-size: clamp(24px, 3vw, 40px);
              width: auto;
              max-width: calc(100% - 400px);
            }
            .tvc-media-desktop {
              left: auto;
              right: 200px;
              width: clamp(200px, 25vw, 286px);
              height: auto;
              aspect-ratio: 286 / 161;
            }
            .tvc-description-desktop {
              left: auto;
              right: 90px;
              font-size: clamp(12px, 1.2vw, 14px);
            }
            .tvc-icon-button-desktop {
              right: 24px;
              width: clamp(40px, 4vw, 50px);
              height: clamp(40px, 4vw, 50px);
            }
          }
          @media (max-width: 768px) {
            .tvc-project-card-desktop {
              height: auto;
              min-height: 300px;
              padding: 20px;
            }
            .tvc-title-desktop {
              position: static;
              width: 100%;
              height: auto;
              margin-bottom: 16px;
              font-size: 28px;
            }
            .tvc-media-desktop {
              position: static;
              width: 100%;
              height: auto;
              aspect-ratio: 16 / 9;
              margin-bottom: 16px;
            }
            .tvc-description-desktop {
              position: static;
              width: 100%;
              margin-bottom: 16px;
              font-size: 14px;
            }
            .tvc-icon-button-desktop {
              position: static;
              align-self: flex-end;
              margin-top: 8px;
            }
          }
        `,
        }}
      />
      <div className="tvc-project-card-desktop">
        {/* Title */}
        <div className="tvc-title-desktop text-white">{title}</div>

        {/* Media Placeholder */}
        <div className="tvc-media-desktop bg-gray-700 overflow-hidden relative">
          {thumbnail ? (
            <Image src={thumbnail} alt={title} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-700" />
          )}
        </div>

        {/* Description Text */}
        <div className="tvc-description-desktop text-white">{description}</div>

        {/* Action Icon - Circle with Plus */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`tvc-icon-button-desktop flex items-center justify-center cursor-pointer bg-transparent ${
            isExpanded ? "clicked" : ""
          }`}
        >
          <Image
            src="/icons/icon_plus.svg"
            alt="View more"
            width={28}
            height={28}
            className="tvc-icon-image"
          />
        </button>
      </div>
    </>
  );
}
