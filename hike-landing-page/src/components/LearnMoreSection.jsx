import React from 'react'
import HikeMan from '../assets/hikeman.png'

function LearnMoreSection() {
  return (
    <div className="flex flex-row bg-[#f2fcfc] font-roboto">
        <div className="px-24 pt-48	pb-24 basis-1/2">
            <div>
                <text className="font-medium text-6xl mb-3">
                    <span className="text-dark-green">Keep your </span>
                    <span className="text-bright-blue">workforce moving </span>
                    <span className="text-dark-green">with </span>
                    <span className="text-bright-green">Hike.</span>
                </text>
            </div>
            <div>
                <div className="mt-6">
                    <text className="text-dark-green opacity-80 text-lg">
                        Foot pain is running rampant among “on-their-feet” employees globally. Hike provides the highest quality, most affordable, and most scalable integrated solution to solve this problem for employers.
                    </text>
                </div>
                <div className="mt-6">
                    <button className="bg-bright-blue hover:bg-blue-700 text-white items-center px-4 py-2 rounded-lg shadow-sm">
                        <text className="text-base">
                            Learn More &#10230;
                        </text>
                    </button>
                </div>
            </div>
        </div>
        <div className="py-12 basis-1/2">
            <img src={HikeMan}/>
        </div>
    </div>
  )
}

export default LearnMoreSection
