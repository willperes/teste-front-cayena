import Head from "next/head";

type Props = {
  title: string;
};

export function PageHead({ title }: Props) {
  return (
    <Head>
      <title>{`${title} - Suppliers`}</title>
      <meta
        name="description"
        content="Find suppliers for your business with ease."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
