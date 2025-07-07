import PlexCard from "@/components/PlexCard";
import Default from "../components/AnimaCard"

export default function CardDemo() {
  return (
    <div className="flex flex-wrap gap-10 p-4">
      <PlexCard icon="kk" />
      <PlexCard icon="kk" variant="boxed" />
      <PlexCard icon="kk" variant="boxed" />
    </div>
  );
}
