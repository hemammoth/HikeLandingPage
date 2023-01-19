import React from 'react'

function StatsSection() {
  return (
    <div className="flex flex-row bg-dark-green  font-roboto px-24 py-12">
        <div className="flex flex-col items-center w-48 basis-1/4">
            <text className="flex align-center text-bright-blue text-3xl font-bold mb-4">
                100,000+
            </text>
            <text className="align-center text-center text-white text-base font-medium">
                Patients Treated by Our Clinicians
            </text>
        </div>
        <div className="flex flex-col items-center w-48 basis-1/4">
            <text className="flex align-center text-bright-blue text-3xl font-bold mb-4">
                300,000+
            </text>
            <text className="align-center text-center text-white text-base font-medium">
                Pairs of insoles Delivered
            </text>
        </div>
        <div className="flex flex-col items-center w-48 basis-1/4">
            <text className="flex align-center text-bright-green text-3xl font-bold mb-4">
                35,000+
            </text>
            <text className="align-center text-center text-white text-base font-medium">
                Knee, Hip, Ankle, and Foot Surgeries Prevented
            </text>
        </div>
        <div className="flex flex-col items-center w-48 basis-1/4">
            <text className="flex align-center text-bright-green text-3xl font-bold mb-4">
                24/7
            </text>
            <text className="align-center text-center text-white text-base font-medium">
                Customer Support
            </text>
        </div>
    </div>
  )
}

export default StatsSection
