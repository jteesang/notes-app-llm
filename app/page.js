import Image from "next/image";
import Editor from "@/app/components/Editor";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <h1 className="font-mono text-lg py-10">apple notes... but llm</h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-sans text-lg lg:flex">
        <Editor></Editor>
      </div>
    </main>
  );
}
