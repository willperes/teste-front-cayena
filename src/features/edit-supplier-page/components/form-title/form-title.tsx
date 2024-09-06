type Props = {
  title: string;
};

export function FormTitle({ title }: Props) {
  return (
    <h2 className={"text--2xl"} style={{ fontWeight: 600 }}>
      {title}
    </h2>
  );
}
