import { Avatar, clx } from "@medusajs/ui";
import { Link, useLocation } from "@tanstack/react-router";

const Header = () => {
  const { pathname } = useLocation();

  const NAV_LINKS: { title: string; to: string }[] = [
    {
      title: "Trang chủ",
      to: "/",
    },
    {
      title: "Về AlphaBooks",
      to: "/about",
    },
    {
      title: "Tủ Sách",
      to: "/books",
    },
  ];

  return (
    <header className="bg-ui-bg-base h-20">
      <div className="container mx-auto flex h-full items-center gap-5">
        <div>Logo</div>
        <ul className="h-full flex items-center gap-7">
          {NAV_LINKS.map((nav) => {
            let isActive = false;

            if (pathname === "/" && pathname === nav.to) {
              isActive = true;
            } else if (pathname !== "/" && nav.to.includes(pathname)) {
              isActive = true;
            }

            return (
              <Link
                className={clx("txt-compact-medium text-ui-fg-base", {
                  "text-ui-tag-blue-text": isActive,
                })}
                to={nav.to}
              >
                {nav.title}
              </Link>
            );
          })}
        </ul>
        <Avatar size="large" src="" fallback="N" />
        
      </div>
    </header>
  );
};

export default Header;
