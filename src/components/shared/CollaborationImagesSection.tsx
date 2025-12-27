import Image from "next/image";

export default function CollaborationImagesSection() {
  return (
    <section className="relative w-full bg-bgDark py-12 md:py-16 overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        {/* Mobile: Stack vertically */}
        <div className="flex flex-col md:hidden gap-6 items-center">
          <div className="relative w-full" style={{ aspectRatio: "496/498" }}>
            <Image
              src="/images/collaboration-workspace.svg"
              alt="Collaboration workspace"
              width={496}
              height={498}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full" style={{ aspectRatio: "496/498" }}>
            <Image
              src="/images/collaboration-workspace-2.svg"
              alt="Collaboration workspace 2"
              width={496}
              height={498}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop: Overlapping layout */}
        <div
          className="hidden md:block relative"
          style={{ minHeight: "750px" }}
        >
          {/* First Image - Top Left */}
          <div
            className="absolute"
            style={{
              width: "496px",
              height: "498px",
              top: "24px",
              left: "108px",
            }}
          >
            <Image
              src="/images/collaboration-workspace.svg"
              alt="Collaboration workspace"
              width={496}
              height={498}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Second Image - Shifted Down by Half Height */}
          <div
            className="absolute"
            style={{
              width: "496px",
              height: "498px",
              top: "273px",
              left: "700px",
            }}
          >
            <Image
              src="/images/collaboration-workspace-2.svg"
              alt="Collaboration workspace 2"
              width={496}
              height={498}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}








