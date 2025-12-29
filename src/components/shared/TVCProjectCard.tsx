"use client";

import { useState } from "react";
import Image from "next/image";

interface TVCProjectCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  onClick?: () => void;
}

export default function TVCProjectCard({
  id,
  title,
  description,
  thumbnail,
  onClick,
}: TVCProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
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
            font-family: var(--font-svn-poppins), 'SVN-Poppins', sans-serif;
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
            font-family: var(--font-svn-poppins), 'SVN-Poppins', sans-serif;
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
            transition: transform 0.3s ease;
          }
          .tvc-icon-button-desktop:hover {
            transform: rotate(45deg);
          }
          .tvc-icon-button-desktop.active {
            transform: rotate(45deg);
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
          onClick={onClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`tvc-icon-button-desktop flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer bg-transparent ${
            isHovered ? "active" : ""
          }`}
        >
          <Image
            src="/icons/icon_plus.svg"
            alt="View more"
            width={28}
            height={28}
          />
        </button>
      </div>
    </>
  );
}
