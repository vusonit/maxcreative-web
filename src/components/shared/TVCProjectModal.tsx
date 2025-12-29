"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface TVCProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  thumbnail?: string;
}

// Danh sách video ngẫu nhiên từ internet
const RANDOM_VIDEOS = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
];

export default function TVCProjectModal({
  isOpen,
  onClose,
  title,
  description,
  thumbnail,
}: TVCProjectModalProps) {
  const [videoUrl, setVideoUrl] = useState<string>("");

  // Chọn video ngẫu nhiên khi modal mở
  useEffect(() => {
    if (isOpen) {
      const randomVideo =
        RANDOM_VIDEOS[Math.floor(Math.random() * RANDOM_VIDEOS.length)];
      setVideoUrl(randomVideo);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .tvc-modal-container {
            position: relative;
            width: 100%;
            height: 833px;
            background: #F0004D;
            animation: slideIn 0.3s ease-out;
          }
          .tvc-modal-title {
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
            color: white;
          }
          .tvc-modal-thumbnail {
            position: absolute;
            width: 286px;
            height: 161px;
            top: 30px;
            left: 416px;
            background: #1a1a1a;
            overflow: hidden;
          }
          .tvc-modal-description {
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
            color: white;
          }
          .tvc-modal-close {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 30px;
            right: 31px;
            border: 0.5px solid #FFFFFF;
            border-radius: 200px;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }
          .tvc-modal-close:hover {
            opacity: 0.8;
            transform: rotate(45deg);
          }
          .tvc-modal-video-container {
            position: absolute;
            width: 1016px;
            height: 566px;
            top: 228px;
            left: 104px;
            background: #1a1a1a;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .tvc-modal-video {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes slideIn {
            from {
              transform: translateY(-20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `,
        }}
      />
      <div className="tvc-modal-container">
        {/* Title */}
        <div className="tvc-modal-title">{title}</div>

        {/* Thumbnail */}
        <div className="tvc-modal-thumbnail relative">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-900" />
          )}
        </div>

        {/* Description */}
        <div className="tvc-modal-description">{description}</div>

        {/* Close Icon - Circle with Plus (same position as original) */}
        <button
          className="tvc-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <Image
            src="/icons/icon_plus.svg"
            alt="Close"
            width={28}
            height={28}
          />
        </button>

        {/* Video Container */}
        <div className="tvc-modal-video-container">
          {videoUrl && (
            <video
              className="tvc-modal-video"
              controls
              autoPlay
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </>
  );
}

