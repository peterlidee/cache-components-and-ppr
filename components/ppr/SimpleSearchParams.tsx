type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function SimpleSearchParams({ searchParams }: Props) {
  const { name } = await searchParams;
  const validatedName = !name ? 'guest' : Array.isArray(name) ? name[0] : name;
  return <div>Hello {validatedName}</div>;
}
