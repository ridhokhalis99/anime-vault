import colors from "@/styles/colors";
import { IconBoxSeam } from "@tabler/icons-react";
import { useMemo } from "react";
import { useAnime } from "@/contexts/animeContext";
import { isEmpty } from "lodash";

const StashBox = () => {
  const { stashBox } = useAnime();
  const text = useMemo(() => {
    if (isEmpty(stashBox)) return "No items in stash box";
    return `${stashBox.length} Items in stash box`;
  }, [stashBox.length]);

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        position: "fixed",
        bottom: "60px",
        right: "60px",
        padding: "10px",
        backgroundColor: colors.primary900,
        borderRadius: "12px",
        cursor: "pointer",
      }}
    >
      <IconBoxSeam color={colors.white} />
      <p
        style={{
          color: colors.white,
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default StashBox;
