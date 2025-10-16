import React from 'react';

const InfinityBanners = () => {
  const topItems = "Track Shipments • Predict Delays • Blockchain Verified • ";
  const bottomItems = " Secure •  Fast •  Transparent •  Analytics • ";

  return (
    <>
      {/* Top Banner - Scrolling Right
      <div className="overflow-hidden  py-3">
        <div className="animate-scroll-right whitespace-nowrap inline-block">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-white text-lg font-medium mx-8">
              {topItems}
            </span>
          ))}
        </div>
      </div> */}

      {/* Bottom Banner - Scrolling Left */}
      <div className="overflow-hidden py-3">
        <div className="animate-scroll-left whitespace-nowrap inline-block">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-white text-lg font-medium mx-8">
              {bottomItems}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfinityBanners;
