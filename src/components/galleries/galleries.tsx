import { galleries } from "@/data/galleriesData";

function Galleries() {
  return (
    <section
      id="galleries"
      className="h-fit min-h-svh flex flex-col text-left gap-24 p-12"
    >
      <h2 className="text-3xl font-semibold">Galleries</h2>
      {galleries.map((gallery) => (
        <article key={gallery.id} className={gallery.articleClass}>
          <h3 className={gallery.h3Class}>{gallery.title}</h3>
          {gallery.component}
        </article>
      ))}
    </section>
  );
}

export default Galleries;
