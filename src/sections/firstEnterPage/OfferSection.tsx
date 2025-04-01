import { CircleDollarSign, Heart, List, Users } from 'lucide-react';
import { createElement } from 'react';

export default function OfferSection({ id }: { id: string }) {
  const OFFERS = [
    {
      icon: Heart,
      description: 'PLAN WEDDING WITH YOUR PARTNER',
    },
    {
      icon: List,
      description: 'TO DO LIST WITH ALL THE MOST IMPORTANT TASKS',
    },
    {
      icon: CircleDollarSign,
      description: 'BUDGET TOOL THAT WILL HELP YOU PLAN ALL YOUR WEDDING EXPENSES',
    },
    {
      icon: Users,
      description: 'GUEST LIST  MANAGER TO SEE WHO’S ATTENDING',
    },
  ] as const;

  return (
    <div id={id} className="flex h-full flex-col items-center">
      <div className="m-auto flex flex-col items-center gap-2">
        <h1 className="text-pink font-[poppins] text-2xl font-medium">WHAT WE OFFER...</h1>
      </div>

      <ul className="flex w-fit flex-col gap-8 mb-12 mx-12">
        {OFFERS.map(({ icon, description }) => (
          <li key={description} className="flex items-center gap-4">
            {createElement(icon, { className: 'h-8 w-8 shrink-0' })}
            <p className="font-poppins text-sm font-medium">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
