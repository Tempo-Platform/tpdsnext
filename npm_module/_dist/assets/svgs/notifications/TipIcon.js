import React from 'react';
import tokens from '../../../tokens/index.json';
const colorTokens = tokens.colors;
const colorPalettes = colorTokens.color_palettes;
function TipIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
      <path fill={colorPalettes.purple['500']} d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2z"></path>
      <path fill="#fff" d="M12.425 4c-.956.055-2.852.251-4.017.984a.28.28 0 00-.139.232v6.505c0 .214.226.34.418.25 1.2-.626 2.938-.804 3.79-.84a.558.558 0 00.522-.554v-6.04c.018-.304-.26-.554-.574-.536zm-4.834.984C6.426 4.25 4.531 4.054 3.574 4A.542.542 0 003 4.537v6.04c0 .286.226.536.522.554.852.036 2.59.214 3.79.84.192.09.418-.036.418-.25V5.216a.28.28 0 00-.14-.232z"></path>
    </svg>;
}
export default TipIcon;