import { useState } from "react";
import MusicList from "../components/data-display/MusicList/MusicList";
import AudioPlayer from "../components/data-display/AudioPlayer/AudioPlayer";


const musics = [
   {
      id: 1,
      name: 'Shadowing',
      artist: 'Abcde',
      time: '122',
      url: 'musics/Shadowing.mp3'
   },
   {
      id: 2,
      name: 'Stoker',
      artist: 'Fghij',
      time: '65',
      url: 'musics/Stoker.mp3'
   },
]

export default function Index() {

   

   return(
      <div>
         <MusicList 
            musics={musics} 
            selectedMusic={musics[0]} 
            onSelect={() => {}}
         />
         <AudioPlayer musics={musics[0]} />
      </div>
 ) 
}