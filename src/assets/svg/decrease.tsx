import React from "react"
import Svg, { Path } from "react-native-svg"

export const Decrease = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    
  >
    <Path
      d="M14 3v7h7M14.48 9.521 23 1M10 21v-7H3M9.521 14.479 1.001 23"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 3v7h7M14 10l9-9M10 21v-7H3M10 14l-9 9"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)