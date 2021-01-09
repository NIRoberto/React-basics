import React from 'react';
import '../style/Wrestle.css';
import roman from '../images/roman.jfif';
import John from '../images/cena.jfif';
import orton from '../images/orton.jfif';
import seth from '../images/seth.jfif';

var wrestles = [
   {
      id: 1,
      img: roman,
      name: 'Roman reigns',
      weight: 132,
   },
   {
      id: 2,
      img: John,
      name: 'John cena',
      weight: 140,
   },
   {
      id: 3,
      img: orton,
      name: 'Randy Orton',
      weight: 120,
   },
   {
      id: 4,
      img: seth,
      name: 'Seth Rollins',
      weight: 120,
   },
];

const WrestleImage = () => {
   return (
      <main>
         <h1>WWE superstar 2021</h1>
         <section>
            {wrestles.map((info) => {
               return <WrestleInfo key={info.id} info={info} />;
            })}
         </section>
      </main>
   );
};

const WrestleInfo = (props) => {
   const { img, name, weight } = props.info;
   return (
      <article className="card">
         <div className="img">
            <img src={img} alt="Roman " />
         </div>
         <div className="text">
            <h3 className="name">{name}</h3>
            <p>Weight {weight}</p>
         </div>
      </article>
   );
};

export default WrestleImage;
