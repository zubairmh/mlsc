import Globe from "@/components/globe"
export default function GlobeComp() {
    return <div className="flex justify-center items-center overflow-hidden min-h-screen">
        <Globe scale={0.5} markerArray={[]}/>
    </div>
}