import React, { useEffect } from 'react';
import {PiMedalBold, PiMedalFill, PiMedalLight} from 'react-icons/pi';

const Videos = () => {

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
                    src="https://www.youtube.com/embed/rkLU1MHRtv8?si=MegD99cC2fu5Tclq"
                    frameborder="0"
                  />
                </div>
                <h1 className='mt-3 font-medium text-xl'>Stage 01 | Festival of Hope <span className='text-red-600 animate-pulse'>SOON</span></h1>
              </div>
              <div>
                <div className="aspect-w-16 aspect-h-9">

                  <iframe
                    className=""
                    src="https://www.youtube.com/embed/rkLU1MHRtv8?si=MegD99cC2fu5Tclq"
                    frameborder="0"
                  />
                </div>
                <h1 className='mt-3 font-medium text-xl'>Stage 01 | Festival of Hope <span className='text-red-600 animate-pulse'>SOON</span></h1>
              </div>
            </div>

          </div>
          <div className="w-full font-poppins text-theme_black flex flex-col">
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/rkLU1MHRtv8?si=MegD99cC2fu5Tclq"
                  frameborder="0"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex bg-light_gray h-auto font-poppins" />
    </section>
  );
};

export default Videos;
