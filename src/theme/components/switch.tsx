import { Box, Button, type JSX, type MenuChildrenProps } from "@/theme";
import { useState } from "react";

export function Switch(): JSX.Element {
  const [state, setState] = useState(false);

  return (
    <Button onClick={() => setState(!state)} plain>
      {() => (
        <Box
          background="brand"
          width="xsmall"
          height="xxsmall"
          pad="xsmall"
          align={state ? "start" : "end"}
          round
        >
          <Box width="50%" height="100%" background="light-1" round="full" />
        </Box>
      )}
    </Button>
  );
}
