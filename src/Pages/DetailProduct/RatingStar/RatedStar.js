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

    const progressBar = (ratingOfStar) => {
        if(soluongDG !== 0) {
            return Math.round(280*ratingOfStar/soluongDG);
        } else
        return 0;
    }

    // const [oneStar, setOneStar] = useState()
    // const [twoStar, setTwoStar] = useState()
    // const [threeStar, setThreeStar] = useState()
    // const [fourStar, setFourStar] = useState()
    // const [fiveStar, setFiveStar] = useState()

    // const [oneStarProgress, setOneStarProgress] = useState();
    // const [twoStarProgress, setTwoStarProgress] = useState(progressBar(twoStar));
    // const [threeStarProgress, setThreeStarProgress] = useState(progressBar(threeStar));
    // const [fourStarProgress,setFourStarProgress] = useState(progressBar(fourStar));
    // const [fiveStarProgress, setFiveStarProgress] = useState(progressBar(fiveStar));

    const oneStar = countDGByRating(1)
    const twoStar = countDGByRating(2)
    const threeStar = countDGByRating(3)
    const fourStar = countDGByRating(4)
    const fiveStar = countDGByRating(5)

    const oneStarProgress = (progressBar(oneStar) === 0 || isNaN(progressBar(oneStar)))? `0`:`[${progressBar(oneStar)}px]`;
    const twoStarProgress = (progressBar(twoStar) === 0 || isNaN(progressBar(twoStar)))? `0`:`[${progressBar(twoStar)}px]`;
    const threeStarProgress = (progressBar(threeStar) === 0 || isNaN(progressBar(threeStar)))? `0`:`[${progressBar(threeStar)}px]`;
    const fourStarProgress = (progressBar(fourStar) === 0 || isNaN(progressBar(fourStar)))? `0`:`[${progressBar(fourStar)}px]`;
    const fiveStarProgress = (progressBar(fiveStar) === 0 || isNaN(progressBar(fiveStar)))? `0`:`[${progressBar(fiveStar)}px]`;

    useEffect(()=>{
        console.log(oneStarProgress,
            twoStarProgress,
            threeStarProgress,
            fourStarProgress,
            fiveStarProgress)
        setLoading(allDG)
    },[])

    useEffect(()=>{
        setDg(true)
    },[loading])
    
    const stars = {
        one: oneStar,
        two: twoStar,
        three: threeStar,
        four: fourStar,
        five: fiveStar,
        total: soluongDG
    }

    if(dg == true)
    {return(
        <div>
            <div className="flex justify-start">
                <span className="mr-[2px]">5</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={`progress-bar w-${fiveStarProgress} h-[8px] rounded-full bg-green-500 relative`}></div>
                </div>
                <span>{stars.five}</span>
            </div>
            <div className="flex justify-start">
                <span className="mr-[2px]">4</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={`progress-bar w-${fourStarProgress} h-[8px] rounded-full bg-green-500 relative`}></div>
                </div>
                <span>{stars.four}</span>
            </div>
            <div className="flex justify-start">
                <span className="mr-[2px]">3</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={`progress-bar w-${threeStarProgress} h-[8px] rounded-full bg-green-500 relative`}></div>
                </div>
                <span>{stars.three}</span>
            </div>
            <div className="flex justify-start">
                <span className="mr-[2px]">2</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={`progress-bar w-${twoStarProgress} h-[8px] rounded-full bg-green-500 relative`}></div>
                </div>
                <span>{stars.two}</span>
            </div>
            <div className="flex justify-start">
                <span className="mr-[2px]">1</span>
                <FaStar size={16} color={"ffc107"}/>
                <div className="h-[8px] w-[280px] bg-slate-200 my-auto rounded-full mx-[4px] relative">
                    <div className={`progress-bar w-${oneStarProgress} h-[8px] rounded-full bg-green-500 relative`}></div>
                </div>
                <span>{stars.one}</span>
            </div>
        </div>
    )
}}

export default RatedStar;