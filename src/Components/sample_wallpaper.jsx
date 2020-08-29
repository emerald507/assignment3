import React from 'react'
import hulk from '../img/hulk-1.jpg';
import venom from '../img/venom-1.jpg';
import venom1 from '../img/venom-2.jpg'

function SampleWallpaper() {
    return (
        /* Sample Wallpaper  */
        <div className="sample-wallpaper">
        {/* Wallpaper #1 */}
       <article className="wallpaper">
         <img src={venom} alt="Wallpaper #1" className="wallpaper" />
       </article>
             {/* Wallpaper #2 */}
            <article className="wallpaper">
              <img src={hulk} alt="Wallpaper #1" className="wallpaper" />
            </article>
  
             {/* Wallpaper #3 */}
            <article className="wallpaper">
              <img src={venom1} alt="Wallpaper #1" className="wallpaper" />
            </article>
       </div>
    )
}

export default SampleWallpaper;
