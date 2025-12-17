type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage(props: Props) {
  return (
    <main>
      <section className="max-w-content mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-light text-textLight">
          Dự án: {props.params.slug}
        </h1>
      </section>
    </main>
  );
}


