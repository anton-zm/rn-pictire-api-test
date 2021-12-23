import React from "react"
import Svg, { Path } from "react-native-svg"

export const SearchIcon = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
  >
    <Path
      clipRule="evenodd"
      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m22 22-6-6"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

