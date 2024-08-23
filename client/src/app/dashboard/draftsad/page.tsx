import Itemcard from '@/components/ui/Itemcard'
import React from 'react'

type DraftAd = {
    id?: number;
    name?: string;
    description?: string;
    price?: string;
    location?: string;
    daysAdded?: number;
    itemImage?: string;
  };

  type DraftAdsProps={
    
  }
  type Props = {
    drafts?: DraftAd[];
    
    
  };
 
const DraftsAd: React.FC<Props> = ({drafts=defaultAds}) => {
  return (
    <div className="w-full relative flex flex-row items-center justify-center flex-wrap content-center py-9 px-0 box-border gap-6">
        {drafts.map((item) => (
          <Itemcard
            key={item.id}
            name={item.name || "Default Category"}
            description={item.description || "Default description"}
            price={item.price || "Default price"}
            location={item.location || "Default location"}
            daysAdded={item.daysAdded || 0}
            itemImage={item.itemImage || "/images/chair.jpg"}/>
        ))}
    </div>
  )
}

export default DraftsAd