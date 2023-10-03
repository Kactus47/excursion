import React from "react"
import ContentLoader from "react-content-loader"

export const SceletonExursion:React.FC = () => (
  <ContentLoader 
    speed={2}
    width={366}
    height={366}
    viewBox="0 0 366 366"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="2" ry="2" width="100%" height="100%" />
  </ContentLoader>
)
