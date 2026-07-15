type Props = {
  data: unknown;
  id?: string;
};

export default function StructuredData({ data, id = "json-ld" }: Props) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
