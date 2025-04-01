import { NotepadText } from 'lucide-react';

export default function AboutSection({ id }: { id: string }) {
  return (
    <div id={id} className="relative flex h-full flex-col items-center justify-center">
      <div className="bg-pink font-poppins absolute top-0 left-0 flex h-40 w-40 items-center rounded-br-full">
        <h5 className="w-90% ml-1 text-center text-sm font-semibold text-white">
          WELCOME TO THE <br /> IWED PLANNER
        </h5>
      </div>
      <NotepadText width={90} height={90} />
      <p className="font-poppins mx-12 mt-8 text-center font-medium">
        THIS APP WILL HELP YOU FIND EVERYTHING YOU NEED TO PLAN YOUR PERFECT WEDDING!!! <br />
        <br /> WE HAVE PREPARED A PLANNER THAT WILL GUIDE YOU THROUGH THIS EXCITING EVENT WITHOUT
        ANY STRESS.
      </p>
    </div>
  );
}
