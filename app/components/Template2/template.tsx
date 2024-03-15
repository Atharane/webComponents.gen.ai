import React from 'react'
import Hero2 from '../Hero/hero2'
import PreviewHeader from "../../../components/previewHeader"
import Footer1 from '../../../components/footers/one'
import Navbar2 from '../../../components/navbar/one'
const template = () => {
  return (
    <>
    <div className='bg-slate-900'>
        {/* HI HEM HERE */}
        <div className="w-full shadow-2xl p-12 bg-white/10 rounded-lg space-y-4">
          <PreviewHeader />

          <div className="space-y-4" id="site-preview">
            <Navbar2 title={"tp"}></Navbar2>
            <Hero2
              title={"Title"}
              description={
                "description"
              }
              // imageUrl="https://www.wedaways.com/wp-content/uploads/2018/08/honeymoon-planning.jpg"
              imageUrl={`https://image.pollinations.ai/prompt/DynamicSexyScarletJohanson?width=1680&height=1080&nologo=true`}
            />
            <Footer1 footerline={"Footer"} />
          </div>
        </div>
    </div>
    </>
  )
}

export default template