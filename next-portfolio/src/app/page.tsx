import ThreadsScene from "@/components/ThreadsScene";

export default function HomePage() {
  return (
    <div className="w-full h-screen relative">
      <ThreadsScene amplitude={1.3} distance={2} enableMouseInteraction />
      <p>My name is Ed</p>
    </div>
  );
}
