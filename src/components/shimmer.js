const ShimmerCard = () => {
    return(
        <div className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-details"></div>
        </div>
    )
}




const Shimmer = () => {
  return (
    <div className="shimmer-container">
     <div className="shimmer-cards">
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
     </div>
    </div>
  );
};
export default Shimmer;
