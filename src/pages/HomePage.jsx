// HomePage.js
import React from 'react';
import Masonry from '../components/Masonry';

const items = [
   {
  id: "1",
  img: "https://picsum.photos/id/1015/600/900?grayscale",
  url: "https://example.com/one",
  height: 700,
},
{
  id: "2",
  img: "https://picsum.photos/id/1011/600/750?grayscale",
  url: "https://example.com/two",
  height: 550,
},
{
  id: "3",
  img: "https://picsum.photos/id/1020/600/800?grayscale",
  url: "https://example.com/three",
  height: 800,
},
{
  id: "4",
  img: "https://picsum.photos/id/1035/600/700?grayscale",
  url: "https://example.com/four",
  height: 600,
},
{
  id: "5",
  img: "https://picsum.photos/id/1041/600/850?grayscale",
  url: "https://example.com/five",
  height: 750,
},
{
  id: "6",
  img: "https://picsum.photos/id/1043/600/600?grayscale",
  url: "https://example.com/six",
  height: 500,
},
{
  id: "7",
  img: "https://picsum.photos/id/1050/600/900?grayscale",
  url: "https://example.com/seven",
  height: 700,
},
{
  id: "8",
  img: "https://picsum.photos/id/1059/600/750?grayscale",
  url: "https://example.com/eight",
  height: 620,
},
{
  id: "9",
  img: "https://picsum.photos/id/1069/600/800?grayscale",
  url: "https://example.com/nine",
  height: 680,
},
{
  id: "10",
  img: "https://picsum.photos/id/1074/600/650?grayscale",
  url: "https://example.com/ten",
  height: 560,
},
    // ... more items
];


const HomePage = () => {
  return (
    <div className="textCenter">
      <h2>Welcome to the Home Page</h2>
      <p>This is the main content of the home page.</p>
          <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />
      </div>
  );
};

export default HomePage;
