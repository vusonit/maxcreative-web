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

export default function PartnersSection() {
  return (
    <section className="relative w-full bg-bgDark py-16">
      <div className="max-w-content mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <h2
            className="text-textLight text-lg md:text-xl font-medium"
            style={{
              fontFamily:
                "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
            }}
          >
            Đối tác tin tưởng đồng hành
          </h2>
          <div className="flex-1 h-px bg-white/20"></div>
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

