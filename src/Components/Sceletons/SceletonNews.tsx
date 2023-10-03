import React from "react"
import ContentLoader from "react-content-loader"

const SceletonNews:React.FC = () => (
  <ContentLoader 
    speed={2}
    width={366}
    height={366}
    viewBox="0 0 366 366"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="367" height="152" /> 
    <rect x="20" y="208" rx="0" ry="0" width="300" height="24" /> 
    <rect x="20" y="172" rx="0" ry="0" width="146" height="16" /> 
    <rect x="20" y="252" rx="0" ry="0" width="300" height="60" />
  </ContentLoader>
)

export default SceletonNews