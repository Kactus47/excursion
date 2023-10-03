import React from "react"
import ContentLoader from "react-content-loader"

export const SceletonRecomensExursion:React.FC = () => (
  <ContentLoader 
    speed={2}
    width={476}
    height={102}
    viewBox="0 0 476 102"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="2" ry="2" width="100%" height="100%" />
  </ContentLoader>
)
