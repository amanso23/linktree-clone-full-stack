import { navBarItems } from "@/components/Navbar/data";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-x-2">
        {navBarItems.map(({ label, href }, idx) => (
          <li key={idx}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
