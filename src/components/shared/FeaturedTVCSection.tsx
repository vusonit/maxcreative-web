"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

const TVC_VIDEOS = [
  {
    id: "video1",
    videoId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "video2",
    videoId: "9bZkp7q19f0",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
  },
  {
    id: "video3",
    videoId: "9bZkp7q19f0",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
  },
  {
    id: "video4",
    videoId: "kJQP7kiw5Fk",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
  },
];

export default function FeaturedTVCSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(
    TVC_VIDEOS[0]?.videoUrl || null
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const handleThumbnailClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsPlaying(true);
  };

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative w-full bg-bgDark py-16">
      <div className="max-w-content mx-auto px-6">
        <h2
          className="text-textLight text-lg md:text-xl font-medium mb-8"
          style={{
            fontFamily:
              "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
          }}
        >
          Dự án TVC nổi bật
        </h2>

        {/* Main Video Player */}
        <div className="relative w-full mb-6">
          <div
            className="relative w-full bg-bgDark border border-white/20 rounded-lg overflow-hidden"
            style={{ aspectRatio: "16/9", minHeight: "400px" }}
          >
            {isPlaying && selectedVideo ? (
              <iframe
                className="w-full h-full"
                src={selectedVideo}
                title="TVC Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Thumbnail */}
                {selectedVideo && (
                  <Image
                    src={
                      TVC_VIDEOS.find((v) => v.videoUrl === selectedVideo)
                        ?.thumbnail || "/images/image_du_an_1.svg"
                    }
                    alt="Video thumbnail"
                    fill
                    className="object-cover opacity-50"
                  />
                )}
                {/* Play Button */}
                <button
                  onClick={handlePlayButtonClick}
                  className="relative z-10 w-20 h-20 rounded-full bg-white/90 hover:bg-white transition-colors flex items-center justify-center group"
                >
                  <svg
                    className="w-8 h-8 text-bgDark ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail Gallery - 1 hàng ngang (ẩn trên mobile, chỉ hiện từ md trở lên) */}
        <div className="hidden md:flex gap-4 overflow-x-auto pb-2 scrollbar-hide pt-1">
          {TVC_VIDEOS.map((video, index) => (
            <div
              key={video.id}
              className="group relative shrink-0 w-[200px] aspect-video bg-bgDark border border-white/15 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:border-primary hover:scale-105"
              onClick={() => handleThumbnailClick(video.videoUrl)}
            >
              <Image
                src={video.thumbnail}
                alt={`Video ${index + 1}`}
                fill
                className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              />
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-bgDark ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}

          {/* "Tất cả dự án" button */}
          <Link
            href="/tvc-projects"
            className="group relative shrink-0 w-[200px] aspect-video bg-bgDark border border-white/15 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:border-primary hover:-translate-y-1"
          >
            <div className="flex flex-col items-center gap-2">
              <p
                className="text-textLight text-sm"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                }}
              >
                Tất cả dự án
              </p>
              <ArrowIcon
                size={18}
                strokeWidth={2}
                className="text-textLight rotate-0 group-hover:text-primary group-hover:rotate-45 transition-all duration-300"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
