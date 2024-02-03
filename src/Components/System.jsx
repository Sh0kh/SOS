import React from 'react'
import '../style/System.css'
function System() {
  return (
    <section className='system'>
        <div className='system__bg'></div>
        <div className='container'>
            <h3>
                 Can My Computer Run this game?
            </h3>
            <h1>
                System requirements
            </h1>
            <div className='sysytem__wrapper'>
                <div className='system__grid1'>
                    <div>
                        <h2>
                            OS:
                        </h2>
                        <h4>
                            Windows 7 64-bit only
                            (No OSX support at this time)
                        </h4>
                    </div>
                    <div>
                        <h2>
                            pROCESSOR:
                        </h2>
                        <h4>
                            Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ
                        </h4>
                    </div>
                </div>
                <div className='system__grid2'>
                    <div>
                        <h2>
                            mEMORY:
                        </h2>
                        <h4 className='system__grid__text'>
                            8 GB RAM
                        </h4>
                    </div>
                    <div>
                        <h2>
                            storage:
                        </h2>
                        <h4 className='system__grid__text'>
                             8 GB available space
                        </h4>
                    </div>
                </div>
                <div className='system__grid__bottom'>
                    <h2>
                      GRAPHICS:
                    </h2>
                    <h4>
                         NVIDIA GeForce GTX 660 2GB or 
                        AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
                    </h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default System