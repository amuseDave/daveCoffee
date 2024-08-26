import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden">
      <Outlet />
    </main>
  );
}
