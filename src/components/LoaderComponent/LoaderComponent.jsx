import { trefoil } from 'ldrs'




 
const LoaderComponent = () => {
  trefoil.register()
  return (  
  <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  }}>
    <l-trefoil
  size="70"
  stroke="4"
  stroke-length="0.15"
  bg-opacity="0.1"
  speed="1.4" 
  color="black" 
></l-trefoil>
  </div>
  )
};

export default LoaderComponent