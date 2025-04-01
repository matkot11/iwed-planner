import Image from 'next/image';

export default function StartSection({ id }: { id: string }) {
  return (
    <div id={id} className="flex h-full flex-col items-center self-stretch">
      <div className="m-auto flex flex-col items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={75} height={75} />
        <h1 className="font-[poppins] text-2xl font-semibold">IWED PLANNER</h1>
      </div>

      <Image
        src="/firstEnterPagePeople.svg"
        alt="people"
        width={250}
        height={0}
        priority
        className="mt-auto h-auto"
      />
    </div>
  );
}
