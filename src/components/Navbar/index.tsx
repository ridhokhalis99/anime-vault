import Link from "next/link";
import { Button } from "@mantine/core";
import { IconBookmarks } from "@tabler/icons-react";
import {
  logoLinkStyles,
  navLinksContainerStyles,
  navbarContainerStyles,
} from "./styles";
import colors from "@/styles/colors";

export const Navbar = () => {
  return (
    <div css={navbarContainerStyles}>
      <div css={navLinksContainerStyles}>
        <Link css={logoLinkStyles} href="/">
          AnimeVault
        </Link>
        <Link href="/collection">
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
