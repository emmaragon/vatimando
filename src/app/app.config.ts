import { computeColors } from "./shared/color-utils";

export function initAppPaletteFactory(palette: any) {
  return () => {
    const setColor = (currentColor: string, prefix: string) => {
      const colorPalette = computeColors(currentColor);

      let varStyles = "";

      for (const color of colorPalette) {
        const key = `--${prefix}-${color.name}`;
        const value = color.hex;
        varStyles += `${key}: ${value};`;

        const key2 = `--${prefix}-contrast-${color.name}`;
        const value2 = color.darkContrast ? "black" : "white";
        varStyles += `${key2}: ${value2};`;
      }

      const style = document.createElement("style");
      style.appendChild(document.createTextNode(`:root{${varStyles}}`));
      document.head.appendChild(style);
    };

    for (const key in palette) {
      if (Object.prototype.hasOwnProperty.call(palette, key)) {
        setColor(palette[key], key);
      }
    }
  };
}

