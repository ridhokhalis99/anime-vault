import { Button } from "@mantine/core";
import Link from "next/link";
import { IconBookmarks } from "@tabler/icons-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div
        style={{
          height: "68px",
          backgroundColor: "#218BE6",
          position: "sticky",
          zIndex: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            maxWidth: "1366px",
            margin: "0 auto",
          }}
        >
          <Link
            style={{
              color: "#fff",
              fontSize: "24px",
            }}
            href="/"
          >
            AnimeVault
          </Link>
          <Button leftIcon={<IconBookmarks size={18} color="#fff" />}>
            Collections
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
