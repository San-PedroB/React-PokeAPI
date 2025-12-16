import AudioPlayer from 'react-h5-audio-player';
import { useState } from 'react';
import "./MusicPlayer.css";
import PokemonCenterTheme from '../../assets/music/PokemonCenterTheme.mp3'
import PokemonOpeningTheme from '../../assets/music/PokemonOpeningTheme.mp3'
import PokemonGymTheme from '../../assets/music/PokemonGymTheme.mp3'

const tracks = [
    {
        url: PokemonOpeningTheme,
        title: "Pokemon Opening Theme"
    },
    {
        url: PokemonCenterTheme,
        title: "Pokemon Center Theme"
    },
    {
        url: PokemonGymTheme,
        title: "Pokemon Gym Theme"
    },
];

export default function Player() {
    const [currentTrack, setCurrentTrack] = useState(0);

    const handleNext = () => {
        setCurrentTrack((prev) =>
            prev < tracks.length - 1 ? prev + 1 : 0
        );
    };

    const handlePrev = () => {
        setCurrentTrack((prev) =>
            prev > 0 ? prev - 1 : tracks.length - 1
        );
    };

    return (
        <div className="music-player">
            <span className="music-player__title">
                {tracks[currentTrack].title}
            </span>

            <AudioPlayer
                className="music-player__audio--compact"
                src={tracks[currentTrack].url}
                autoPlay={true}
                showSkipControls={true}      // muestra prev / next
                showJumpControls={false}     // oculta +/- 10s
                customAdditionalControls={[]} // sin más botones raros
                layout="horizontal"
                onEnded={handleNext}
                onClickNext={handleNext}
                onClickPrevious={handlePrev}
            />
        </div>
    );
}


