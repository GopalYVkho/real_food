
const Shimmer = () =>{
    return (
        <div className="grid grid-cols-4 gap-4">
            {Array(10).fill("").map((e,i)=>(
            <div key={i} className="shimmer-card"></div>
            ))}
        </div>
    );
}

export default Shimmer;