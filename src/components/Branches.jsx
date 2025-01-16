import React from 'react'

const Branches = () => {
  const mall = [
{image: '/malls/megamall.jpg' , mall: 'Sm Megamall' , address: 'EDSA Corner Julia Vargas Avenue, Mandaluyong City', Number:'(02) 789-1234',  time:'10:00 AM - 11:30 PM ',}, 
{image: '/malls/fairview.jpg',mall: 'Sm Fairview' , address: 'Quirino Highway Corner Regalado Avenue, Quezon City', Number:'(02) 8354-7890',  time:'10:00 AM - 10:00 PM  ', },
{image: '/malls/baguio.png',mall: 'SM Baguio' , address: 'Luneta Hill, Upper Session Road, Baguio City', Number:'(074) 619-7835',  time:'10:00 AM - 9:00 PM',}, 
{image: '/malls/trinoma.jpg',mall: 'Trinoma' , address: ' North Avenue Corner Mindanao Avenue, Quezon City', Number:'(02) 7915-5555',  time:'10:00 AM - 9:00 PM'},
{image: '/malls/terraces.jpg',mall: 'Fairview Terraces' , address: '  Quirino Highway Corner Maligaya Drive, Quezon City', Number:' (02) 8324-5678',  time:'10:00 AM - 9:00 PM'},
{image: '/malls/robinsons.jpg', mall: 'Robinsons Place Manila' , address: 'Pedro Gil Street Corner Adriatico Street, Ermita, Manila', Number:'(02) 5314-2888',  time:'10:00 AM - 10:00 PM',},

  ]
 


  return (
   <div className="h-auto bg-[#0A0E1A] py-20 text-white">
  <div className="title-branches text-center py-10">
    <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-bold font-rocknroll">Our Branches</h1>
  </div>
  
  <div className="flex justify-center py-8 px-4 md:px-10 lg:px-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
      {mall.map((malls) => (
        <div className="relative group bg-white w-full h-[300px] overflow-hidden rounded-3xl transform transition duration-300 hover:scale-110">
          <img
            src={malls.image}
            alt="image branches"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-0 bottom-[-100%] w-full h-full bg-black/50 group-hover:bottom-0 group-hover:opacity-100 group-hover:backdrop-blur-sm duration-500">
            <div className="flex flex-col items-center justify-center mx-auto mt-20 space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-rocknroll">{malls.mall}</h2>
              <p className='text-center p-2  md:text-2xl sm:text-xl'>📍{malls.address}</p>
              <p>📞{malls.Number}</p>
              <p>🕒{malls.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  )
}

export default Branches