import SidebarNav from "./nav";

export default function Sidebar() {
  return (
    <aside id="sidebar" className="w-64 h-screen fixed top-0 left-0 bg-blue-custom text-white p-2 overflow-y-auto transition-transform transform">
      <div className="flex flex-col justify-center items-center mb-6">
        <a href="/">
          <img src="/img/capivara.webp" alt="Capibara Logo" className="w-30 h-30 px-3 pt-5" />
          <span className="logo-title">Algorithm Guru</span>
        </a>
      </div>
      <SidebarNav />
    </aside>
  )
}