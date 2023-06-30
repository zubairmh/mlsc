import Globe from "@/components/globe";
export default function GlobeComp() {
  return (
    <div className="flex justify-center items-center flex-row min-h-screen">
      <div className="h-96 w-96 rounded-full">
        <Globe scale={1} markerArray={[]} />
      </div>
    </div>
  );
}
