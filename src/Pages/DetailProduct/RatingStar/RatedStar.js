import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const RatedStar = ({allDG, soluongDG}) => {

    const[loading, setLoading] = useState([])
    const[dg, setDg] = useState(false)

    const countDGByRating = (rating) => {
            return allDG.filter((dg)=>{
                return dg.rating === rating;
            }).length;
    }

    const progressBar = (star) => {
        let result
        if(soluongDG !== 0) {
            result = Math.round(280*countDGByRating(star)/soluongDG);
            console.log("result " + result)
            if(!isNaN(result)&& result!==0) {
                return `[${result}px]`
            } else return `0`
        } else
        return `0`;
    }

    useEffect(()=>{
        console.log(allDG)
        setLoading(allDG)
    },[])

    useEffect(()=>{
        setDg(true)
    },[loading])

    if(dg === true)
    // if(!isNaN(loading))
    {
        return (
        <div>
            <div className="flex justify-start">
                <span className="mr-[2px]">5</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={`progress-bar w-${progressBar(5)} h-[8px] rounded-full bg-green-500 relative`}></div>
                </div>
                <span>{countDGByRating(5)}</span>
            </div>
            <div className="flex justify-start">
                <span className="mr-[2px]">4</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={`progress-bar w-${progressBar(4)} h-[8px] rounded-full bg-green-500 relative`}></div>
                </div>
                <span>{countDGByRating(4)}</span>
            </div>
            <div className="flex justify-start">
                <span className="mr-[2px]">3</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={`progress-bar w-${progressBar(3)} h-[8px] rounded-full bg-green-500 relative`}></div>
                </div>
                <span>{countDGByRating(3)}</span>
            </div>
            <div className="flex justify-start">
                <span className="mr-[2px]">2</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={`progress-bar w-${progressBar(2)} h-[8px] rounded-full bg-green-500 relative`}></div>
                </div>
                <span>{countDGByRating(2)}</span>
            </div>
            <div className="flex justify-start">
                <span className="mr-[2px]">1</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={`progress-bar w-${progressBar(1)} h-[8px] rounded-full bg-green-500 relative`}></div>
                </div>
                <span>{countDGByRating(1)}</span>
            </div>
        </div>
    )
}
}
export default RatedStar;