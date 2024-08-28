import Notifcard from '@/components/ui/Notifcard'
import React from 'react'

const Notification: React.FC = () => {
  return (
    <div className="w-full bg-background-400 shadow-md p-6 lg:p-9 rounded-lg">
        <Notifcard
        previewImage="/images/chair.jpg"
        type="Ad update"
        message="Your ad 'Vintage Chair' has been approved and is now live!"/>
    </div>
  )
}

export default Notification