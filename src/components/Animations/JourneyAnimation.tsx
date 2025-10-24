import { Player } from '@lottiefiles/react-lottie-player';

const JourneyAnimation = () => (
  <div className="w-full h-[500px]">
    <Player
      autoplay
      loop
      src="/animation-1.json"
      style={{ width: '100%', height: '100%' }}
    />
  </div>
);

export default JourneyAnimation;
