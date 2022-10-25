import React from 'react'
import parse from 'html-react-parser';

const ChairLift = ({ sutton_title, sutton_description }) => {
  return (
    <session className="flex flex-col xl:flex-row xl:pb-0 pb-10">
      <div className="xl:w-1/2 w-full">
        <img height="100%" width="100%" src="/images/chair-lift.jpg" />
      </div>
      <div className="w-full xl:w-1/2 flex flex-col px-4 xl:px-10 xl:py-10 xl:pr-28  gap-10">
        <h2 className="mt-10 font-light text-2xl">{sutton_title}</h2>
        <div className="flex flex-col font-light text-lg gap-10">
          {parse(sutton_description)}
        </div>
        <img src="/images/chair-lift-map.jpg" />
      </div>
    </session>
  )
}

export default ChairLift