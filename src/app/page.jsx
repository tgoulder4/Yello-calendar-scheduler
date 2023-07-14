import inter from "next/font/google";
import Head from "next/head";
export default function Home() {
  return (
    <main>
      <section className="flex">
        <div className="visual"></div>
        <article className="font-bold text-white text-4xl">
          Now entering focus mode.
        </article>
      </section>
      <section className="flex">
        <article></article>
        <div className="visual"></div>
      </section>
      <section className=""></section>
    </main>
  );
}
