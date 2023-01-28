import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center mt-0">
      <div className="text-center relative">
        <Image src="/images/404.png" alt="404" width={600} height={600}/>
      </div>
    </div>
  );
}
