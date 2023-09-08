export default function Breadcrumbs({ data }) {
  return (
    <section className="flex justify-center text-center text-[--blackColor] bg-[--whiteColor] m-auto h-[5vh] w-[80vw] items-center">
      <a href={data.url}>Volver a {data.back}</a>
    </section>
  );
}
