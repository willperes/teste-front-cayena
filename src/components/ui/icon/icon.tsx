import { EyeOnIcon, EyeOffIcon, SunIcon, MoonIcon } from "@/assets";

export type BaseIconProps = {
  size?: number;
} & React.SVGProps<SVGSVGElement>;

export type IconProps = {
  name: IconName;
  size?: number;
} & React.SVGProps<SVGSVGElement>;

export function Icon({ name, size, ...svgProps }: IconProps) {
  const SVGIcon = iconRegistry[name];
  const iconProps: React.ComponentProps<typeof SVGIcon> = {
    size,
  };

  return <SVGIcon {...iconProps} {...svgProps} />;
}

const iconRegistry = {
  eyeOnIcon: EyeOnIcon,
  eyeOffIcon: EyeOffIcon,
  sunIcon: SunIcon,
  moonIcon: MoonIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
