import { useEffect, useMemo, useRef, useState } from "react"
import styles from './AudioPlayer.module.css'
import TimeLine from "../../inputs/TimeLine/Timeline"

export default function AudioPlayer(props) {

  const [ isPlaying, setIsPlaying ] = useState(false)
  const [ canPlay, setCanPlay ] = useState(false)
  const [ duration, setDuration ] = useState(1)
  const [ currentTime, setCurrentTime ] = useState(0)
  const audioRef = useRef(null)
  const width = useMemo(() => {
    return (currentTime / duration) * 100
  }, [duration, currentTime])
  
  useEffect(() => {
    if(props.musics){
      setCurrentTime(0)
      setCanPlay(false)
    }
  }, [props.musics])
  
  useEffect(() => {
    const interval =setInterval(() => {
      isPlaying && setCurrentTime(audioRef.current.currentTime)
    }, 500)   
    return () => clearInterval(interval)
    
  }, [isPlaying])
  
  useEffect(() => {
    if(props.musics) {
      if(isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
        
    }
  }
  }, [isPlaying, props.musics])



  function onCanPlay() {
    setDuration(audioRef.current.duration)
    setCanPlay(true)
  }

  function onEnded() {
    setIsPlaying(false)
  }

  function onChangeTime(percent) {
    if(props.musics) {
      audioRef.current.currentTime = (percent / 100) * duration
    }
  }

  function handlePlay() {
    if(props.musics) {
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={styles['player-container']}>
      <div className={styles['button-container']}>
        <button 
          className={styles['play-button']}
          disabled={!canPlay}
          onClick={handlePlay}
        >
          {
            isPlaying ? `\u2759\u2759` : `\u25b8`
          }
        </button>
        <TimeLine 
          width={width} 
          onChangeWidth={onChangeTime} 
        />
        <audio
          controls
          className={styles['audio']}
          ref={audioRef}
          onCanPlay={onCanPlay}
          onEnded={onEnded}
          src={props?.musics?.url}
        >

        </audio>
      </div>
    </div>
  )
}