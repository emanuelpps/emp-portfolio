import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div class="flex gap-4 flex-wrap justify-center">
        <Image
          class="w-10 h-10 animate-spin"
          src="https://www.svgrepo.com/show/199956/loading-loader.svg"
          alt="Loading icon"
          width={10}
          height={10}
        />
      </div>
      <p className="object-center">Loading...</p>
    </div>
  );
}
