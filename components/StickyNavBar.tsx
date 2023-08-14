import React from "react"

export default function StickyNavBar() {
   return <div className="navbar bg-base-100">

      <div className="flex-none">
         <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
               <details>
                  <summary>
                     Parent
                  </summary>
                  <ul className="p-2 ">
                     <li><a>Link 1</a></li>
                     <li><a>Link 2</a></li>
                  </ul>
               </details>
            </li>
         </ul>
      </div>
   </div>
}
