interface Props { schema: object; }
export default function SchemaInjector({ schema }: Props) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
