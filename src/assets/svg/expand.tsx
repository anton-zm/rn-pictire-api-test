import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Expand = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    
  >
    <Path
      d="M23 8V1h-7M23 1l-9 9M1 16v7h7M1 23l9-9"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
