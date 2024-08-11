import React, { useEffect } from 'react';
import {PiMedalBold, PiMedalFill, PiMedalLight} from 'react-icons/pi';

const Videos = () => {

  const videoLinks = ['w4e90waxpqc?si=aIDiFfaX-V1hH7a2','ZH9x6h6nUvs?si=EJftTu7kS4E7yTDI','_aoifCGerzo?si=tgcVJG524PXBhSAN','fED01RnWHtk?si=HO4fL6S8cz8MpasU','JdkIfD-m6To?si=AowTp3prjLYy2Cx_','MNCbx2iAxzM?si=tLjSle3wSKOXyY80','kHdoPAQ3mpw?si=umjob78JqZnNbbJx']

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-16 ">
      <div className="padding-y padding-x">

        <h1 className="mb-8 text-left font-mono text-4xl text-theme_black">
          watch sahityotsav
        </h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <div>

            <div className="mx-auto w-full flex flex-col gap-6 font-poppins">

              <div>
                <div className="aspect-w-16 aspect-h-9">

                  <iframe
                    className=""
                    src="https://www.youtube.com/embed/T5FbYJ3s2hU?si=LLUQL0RlyV_TD79p"
                    frameborder="0"
                  />
                </div>
                <h1 className='mt-3 font-medium text-xl'>Stage 01 | Festival of Hope </h1>
              </div>
              <div>
                <div className="aspect-w-16 aspect-h-9">

                  <iframe
                    className=""
                    src="https://www.youtube.com/embed/Gk8BgROnDOk?si=e5H6gIVU4Vr_IYCc"
                    frameborder="0"
                  />
                </div>
                <h1 className='mt-3 font-medium text-xl'>Stage 01 | Festival of Hope </h1>
              </div>
            </div>

          </div>
          <div className="w-full font-poppins text-theme_black flex flex-col">
            <div className="grid grid-cols-2 gap-6">
              {videoLinks.map((link)=>(
                <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${link}`}
                  frameborder="0"
                />
              </div>
              )) }
              
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex bg-light_gray h-auto font-poppins" />
    </section>
  );
};

export default Videos;
