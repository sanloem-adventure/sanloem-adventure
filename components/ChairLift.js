import React from 'react'

const ChairLift = () => {
  return (
    <session className="flex flex-col xl:flex-row xl:pb-0 pb-10">
      <div className="xl:w-1/2 w-full">
        <img height="100%" width="100%" src="/images/chair-lift.jpg" />
      </div>
      <div className="w-full xl:w-1/2 flex flex-col px-4 xl:px-10 xl:py-10 xl:pr-28  gap-10">
        <h2 className="mt-10 font-light text-2xl">SUTTON</h2>
        <div className="flex flex-col font-light text-lg gap-10">
          <p className="indent-8">Located about 1 and a half hours from Montreal in the Brome-Missisquoi sector, Sutton is an authentic, charming and welcoming place.</p>
          <p className="indent-8">First known for its ski resort, the sector has a majestic mountain range offering a wide variety of activities throughout the year.</p>
          <p className="indent-8">In the heart of the village, you will find microbreweries, bistros, restaurants, cafes and several shops offering local products.</p>
        </div>
        <img src="/images/chair-lift-map.jpg" />
      </div>
    </session>
  )
}

export default ChairLift