import { useMemo } from "react";
import { useScreenSize } from "../use-screen-size/use-screen-size";
import { breakpointValue } from "@/theme";

export function useBreakpoints() {
  const { width } = useScreenSize();

  const xsUp = useMemo(() => width >= breakpointValue.xs, [width]);
  const smUp = useMemo(() => width >= breakpointValue.sm, [width]);
  const mdUp = useMemo(() => width >= breakpointValue.md, [width]);
  const lgUp = useMemo(() => width >= breakpointValue.lg, [width]);
  const xlUp = useMemo(() => width >= breakpointValue.xl, [width]);

  return {
    xsUp,
    smUp,
    mdUp,
    lgUp,
    xlUp,
  };
}
