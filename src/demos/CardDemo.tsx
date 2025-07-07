import PlexCard from "@/components/PlexCard";
import Image from '../components/assets/default.png'

export default function CardDemo() {
  return (
    <div className="flex flex-wrap gap-10 p-4">
      <PlexCard icon="kk" img={Image}/>
      <PlexCard icon="kk" variant="boxed" img={Image} />
      <PlexCard icon="kk" variant="large" img={Image} />
    </div>
  );
}
