import { useState } from "react";
import MusicList from "../components/data-display/MusicList/MusicList";
import TimeLine from "../components/inputs/TimeLine/Timeline";


const musics = [
   {
      id: 1,
      name: 'Diammonds',
      artist: 'Rihanna',
      time: '95'
   },
   {
      id: 2,
      name: 'Beat It',
      artist: 'Michael Jackson',
      time: '123'
   },
   {
      id: 3,
      name: 'Imagine',
      artist: 'John Lennon',
      time: '118'
   },
]

export default function Index() {

   const [ width, setWidth ] = useState(0)

   return(
      <div>
         <MusicList 
            musics={musics} 
            selectedMusic={musics[0]} 
            onSelect={() => {}}
         />
         <TimeLine 
            onChangeWidth={setWidth} 
            width={width}
         />
      </div>
 ) 
}