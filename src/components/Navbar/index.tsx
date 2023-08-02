import Link from "next/link";
import { Button } from "@mantine/core";
import { IconBookmarks } from "@tabler/icons-react";
import {
  logoLinkStyle,
  navLinksContainerStyle,
  navbarContainerStyle,
  collectionButtonStyle,
} from "./styles";
import colors from "@/styles/colors";

export const Navbar = () => {
  return (
    <div css={navbarContainerStyle}>
      <div css={navLinksContainerStyle}>
        <Link css={logoLinkStyle} href="/">
          AnimeVault
        </Link>
        <Link href="/collection" css={collectionButtonStyle}>
          <Button
            variant="light"
            leftIcon={<IconBookmarks size={18} color={colors.primary900} />}
          >
            Collections
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
