import Image from "next/image";

// Tất cả logo trong folder public/logo, trừ logo_maxcreative.svg
const ALL_PARTNER_LOGOS = [
  "logo_arya_bay",
  "logo_beverly",
  "logo_bimLand",
  "logo_bmhs_group",
  "logo_fanstasy_home",
  "logo_felicity_phu_quoc",
  "logo_glory_heights",
  "logo_hone",
  "logo_komorebi",
  "logo_lagoon_residences",
  "logo_marina_bayfront",
  "logo_mik",
  "logo_ocean_2",
  "logo_ocean_city",
  "logo_origami",
  "logo_princess_of_manor",
  "logo_rox",
  "logo_simona",
  "logo_skym",
  "logo_sun_beauty_onsen",
  "logo_sun_cosmo_residence_danang",
  "logo_sun_grand_city_hillside_residence",
  "logo_sun_memory",
  "logo_sun_property",
  "logo_the_5",
  "logo_the_beverly_2",
  "logo_the_canopy_residences",
  "logo_the_miani",
  "logo_the_miyabi",
  "logo_the_miyabi_2",
  "logo_the_paris",
  "logo_the_povilion",
  "logo_the_vista",
  "logo_the_zurich",
  "logo_thung_lung_thanh_xuan",
  "logo_tonkin",
  "logo_vincom_royal_park",
  "logo_vinhome",
  "logo_vinhomes_global_gate",
  "logo_vinhomes_global_gate_2",
  "logo_vinhomes_golden_city",
  "logo_vinhomes_golden_mong_cai",
  "logo_vinhomes_golden_river",
  "logo_vinhomes_grand_park",
  "logo_vinhomes_market",
  "logo_vinhomes_ocean_park",
  "logo_vinhomes_royal_island",
  "logo_vinhomes_sky_park",
  "logo_vinhomes_smart_city",
  "logo_vinhomes_the_gallery",
  "logo_vinhomes_wonder_city",
  "logo_vlasta",
  "logo_vmi",
];

export default function TrustedPartnersSection() {
  return (
    <section className="relative w-full bg-bgDark py-16 md:py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-12 md:mb-16">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <p
              className="text-white uppercase text-xs md:text-sm"
              style={{
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                fontWeight: 300,
                fontStyle: "normal",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Đối tác tin tưởng đồng hành
            </p>

            {/* Heading */}
            <h2
              className="text-white text-xl md:text-2xl lg:text-3xl xl:text-[40px]"
              style={{
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "120%",
                letterSpacing: "0%",
                maxWidth: "460px",
              }}
            >
              Được tin chọn bởi các
              <br />
              thương hiệu hàng đầu.
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Description */}
            <p
              className="text-white text-sm md:text-base lg:text-lg xl:text-[20px]"
              style={{
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                fontWeight: 300,
                fontStyle: "normal",
                lineHeight: "140%",
                letterSpacing: "-1%",
                maxWidth: "600px",
              }}
            >
              Chúng tôi tự hào được đồng hành cùng những thương hiệu hàng đầu
              trong lĩnh vực bất động sản. Mỗi dự án là một hành trình hợp tác
              chặt chẽ, nơi sự tin tưởng và tiêu chuẩn cao của đối tác trở thành
              động lực để chúng tôi không ngừng nâng tầm chất lượng sáng tạo.
            </p>
          </div>
        </div>

        {/* Grid layout cho logos */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 md:gap-8">
          {ALL_PARTNER_LOGOS.map((logoName) => (
            <div
              key={logoName}
              className="flex items-center justify-center p-4 bg-bgDark hover:opacity-100 transition-opacity"
            >
              <Image
                src={`/logo/${logoName}.svg`}
                alt={logoName.replace("logo_", "").replace(/_/g, " ")}
                width={120}
                height={60}
                className="w-full h-auto max-h-12 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




