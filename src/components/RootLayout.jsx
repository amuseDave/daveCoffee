import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <main className="flex justify-center flex-col items-center">
      <Outlet />
    </main>
  );
}
