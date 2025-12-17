import Image from "next/image";

const LOGO_LIST = [
  "logo_vinhome",
  "logo_bimLand",
  "logo_rox",
  "logo_mik",
  "logo_sun_property",
  "logo_vmi",
  "logo_vinhomes_the_gallery",
  "logo_sun_beauty_onsen",
  "logo_vinhomes_golden_city",
  "logo_vinhomes_royal_island",
  "logo_vinhomes_grand_park",
  "logo_vinhomes_global_gate",
  "logo_the_miyabi",
  "logo_the_canopy_residences",
  "logo_the_miani",
  "logo_the_vista",
  "logo_the_paris",
  "logo_komorebi",
  "logo_beverly",
  "logo_sun_cosmo_residence_danang",
  "logo_felicity_phu_quoc",
  "logo_sun_grand_city_hillside_residence",
  "logo_glory_heights",
  "logo_the_beverly_2",
  "logo_origami",
  "logo_princess_of_manor",
  "logo_thung_lung_thanh_xuan",
  "logo_tonkin",
  "logo_ocean_city",
  "logo_vincom_royal_park",
  "logo_vinhomes_ocean_park",
  "logo_fanstasy_home",
  "logo_lagoon_residences",
  "logo_sun_memory",
  "logo_bmhs_group",
  "logo_vinhomes_sky_park",
  "logo_vlasta",
  "logo_vinhomes_smart_city",
  "logo_arya_bay",
  "logo_the_zurich",
  "logo_marina_bayfront",
  "logo_skym",
  "logo_vinhomes_wonder_city",
  "logo_vinhomes_golden_river",
  "logo_the_povilion",
  "logo_hone",
  "logo_simona",
  "logo_the_5",
  "logo_vinhomes_golden_mong_cai",
  "logo_vinhomes_market",
  "logo_vinhomes_global_gate_2",
  "logo_ocean_2",
  "logo_the_miyabi_2",
];

export default function PartnersLogoSection() {
  return (
    <section className="relative w-full h-[72px] sm:h-[96px] md:h-[120px] lg:h-[144px] bg-bgDark overflow-hidden">
      {/* Gradient Background với rounded cutouts */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-white">
        {/* Rounded cutouts ở 2 bên */}
        <div className="absolute left-0 top-0 w-32 h-full bg-bgDark rounded-r-full"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-bgDark rounded-l-full"></div>
      </div>

      {/* Black Banner với logos */}
      <div className="relative z-10 h-full bg-bgDark flex items-center justify-center">
        <div className="w-full h-full flex items-center overflow-hidden">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-12 lg:gap-16 animate-scroll whitespace-nowrap">
            {/* Logo list - duplicate để tạo infinite scroll */}
            {LOGO_LIST.map((logoName, idx) => (
              <Image
                key={`${logoName}-${idx}`}
                src={`/logo/${logoName}.svg`}
                alt={logoName.replace("logo_", "").replace(/_/g, " ")}
                width={120}
                height={40}
                className="h-6 sm:h-8 lg:h-10 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity shrink-0"
              />
            ))}
            {/* Duplicate để tạo seamless loop */}
            {LOGO_LIST.map((logoName, idx) => (
              <Image
                key={`${logoName}-dup-${idx}`}
                src={`/logo/${logoName}.svg`}
                alt={logoName.replace("logo_", "").replace(/_/g, " ")}
                width={120}
                height={40}
                className="h-6 sm:h-8 lg:h-10 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
