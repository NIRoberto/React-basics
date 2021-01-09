import React, { Fragment } from 'react'
import '../style/footer.css'

const Footer = () => {
   return (
      <Fragment>
         <footer>
            <div className="footer-content">
               <img
                  src="data:image/jpeg;base64,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"
                  alt="wwe logo"
               />
            </div>
            <br />
            <div className="footer-content1">
               <ul className="wweOffer">
                  <li>
                     <a href="#p"> videos</a>
                  </li>
                  <li>
                     <a href="#v"> photos</a>
                  </li>
                  <li>
                     <a href="#t"> Superstar</a>
                  </li>
               </ul>
               <br />
               <ul className="wweOffer">
                  <li>
                     <a href="#p">Privacy</a>
                  </li>
                  <li>
                     <a href="#v">Contact</a>
                  </li>
                  <li>
                     <a href="#t">About US</a>
                  </li>
               </ul>
               <br />
               <ul className="wweOffer">
                  <li>
                     <a href="#p"> videos</a>
                  </li>
                  <li>
                     <a href="#v"> photos</a>
                  </li>
                  <li>
                     <a href="#t"> Superstar</a>
                  </li>
               </ul>
               <br />
            </div>
         </footer>
      </Fragment>
   )
}
export default Footer
