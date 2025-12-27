import GraphicProjectsHero from "@/components/shared/GraphicProjectsHero";
import TVCProjectsList from "@/components/shared/TVCProjectsList";

export default function TvcProjectsPage() {
  return (
    <main>
      <GraphicProjectsHero
        title={`Xem những thước phim
kể trọn câu chuyện
thương hiệu.`}
        subtitle={`Các TVC được xây dựng với
chiều sâu, nhịp điệu và tiêu
chuẩn hình ảnh cao cấp.`}
      />
      <TVCProjectsList />
    </main>
  );
}
