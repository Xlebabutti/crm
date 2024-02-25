import { AppHeader } from "@/widgets/app-header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader variant="public" />
      {children}
    </>
  );
}