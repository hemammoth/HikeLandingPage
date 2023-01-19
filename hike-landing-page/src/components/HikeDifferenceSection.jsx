import React from 'react'
import FootPain from '../assets/footpain.png'
import DottedSquare from '../assets/dottedsquare1.png'

function HikeDifferenceSection() {
  return (
    <div className="flex flex-row bg-white  font-roboto">
        <div className="relative px-24 py-20 basis-1/2">
            <img className="w-3/4 absolute z-10 left-16 top-16" src={FootPain}/>
            <img className="w-3/4 absolute z-0 left-18 top-18" src={DottedSquare}/>
        </div>
        <div className="py-20 pr-36 basis-1/2">
            <div className="flex flex-col items-start basis-1/4 mb-9">
                <div className="mb-6">
                    <text className="text-dark-green text-3xl font-semibold">
                        <u className="decoration-bright-blue underline-offset-16">The H</u>ike Difference
                    </text>
                </div>
                <div>
                    <text className="text-dark-green opacity-80 text-lg font-normal">
                        We use cutting-edge technology to offer mass customization, allowing for Hike Foot Orthotics to be the most accessible and effective on the market. 
                    </text>
                </div>
            </div>
            <div className="basis-3/4">

                <div className="basis-1/4 mb-2">
                    <div className="flex flex-row">
                        <div className="basis-1/6">
                            <div className="w-12 h-12 bg-bright-blue bg-opacity-20 rounded-lg">
                                <text className="absolute text-bright-blue text-3xl font-bold px-4 pt-2">1</text>
                            </div>
                        </div>
                        <div className="basis-5/6">
                            <div className="flex flex-col">
                                <text className="text-dark-green text-xl font-semibold mb-1">
                                    Custom Foot Orthotics for Each Employee.
                                </text>
                                <text className="text-dark-green opacity-80 text-base font-normal">
                                    Fully custom is the only real solution to this problem. With Hike, every single insole we produce is custom from start to finish. 
                                </text>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="basis-1/4 mb-2">
                    <div className="flex flex-row">
                        <div className="basis-1/6">
                            <div className="w-12 h-12 bg-bright-green bg-opacity-20 rounded-lg">
                                <text className="absolute text-bright-green text-3xl font-bold px-4 pt-2">2</text>
                            </div>
                        </div>
                        <div className="basis-5/6">
                            <div className="flex flex-col">
                                <text className="text-dark-green text-xl font-semibold mb-1">
                                    Fast and Easy Implementation using ShapeCapture.
                                </text>
                                <text className="text-dark-green opacity-80 text-base font-normal">
                                    Using our revolutionary ShapeCapture technology, and AI powered insole design tool, your employees will be hiking to better health in no time. 
                                </text>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="basis-1/4 mb-2">
                    <div className="flex flex-row">
                        <div className="basis-1/6">
                            <div className="w-12 h-12 bg-bright-blue bg-opacity-20 rounded-lg">
                                <text className="absolute text-bright-blue text-3xl font-bold px-4 pt-2">3</text>
                            </div>
                        </div>
                        <div className="basis-5/6">
                            <div className="flex flex-col">
                                <text className="text-dark-green text-xl font-semibold mb-1">
                                    Hike is CFO-Friendly.
                                </text>
                                <text className="text-dark-green opacity-80 text-base font-normal">
                                    Hike's custom insoles are most cost-effective than today's solutions on the market. 
                                </text>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="basis-1/4">
                    <div className="flex flex-row">
                        <div className="basis-1/6">
                            <div className="w-12 h-12 bg-bright-green bg-opacity-20 rounded-lg">
                                <text className="absolute text-bright-green text-3xl font-bold px-4 pt-2">4</text>
                            </div>
                        </div>
                        <div className="basis-5/6">
                            <div className="flex flex-col">
                                <text className="text-dark-green text-xl font-semibold mb-1">
                                    We'll keep launching evolved solutions for your problems. 
                                </text>
                                <text className="text-dark-green opacity-80 text-base font-normal">
                                    Hike is developing step tracking technology, pressure mapping to assist with foot health, and more. 
                                </text>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HikeDifferenceSection
