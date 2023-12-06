import React from 'react'



const hero1 = ({title,description,imageProps}:{title:String , description:String , imageProps:String }) => {
  return (
    <>
    <div>
      {title}
    </div>
    <div>
      IMAGE COMES HERE
    </div>
    <div>
      {description}
    </div>
    </>
  )
}

export default hero1