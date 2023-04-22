import MusicList from "../components/data-display/MusicList/MusicList";

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
 return(
    <div>
      <MusicList 
         musics={musics} 
         selectedMusic={musics[0]} 
         onSelect={() => {}}
      />
    </div>
 ) 
}