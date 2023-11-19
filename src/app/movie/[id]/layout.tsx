/** @format */

import CreditsBtn from "@/components/button/creditsBtn";
import ReviewsBtn from "@/components/button/reviewsBtn";

export default function MovieLayout(props: {
  children: React.ReactNode;
  credits: React.ReactNode;
  reviews: React.ReactNode;
  params: { id: string };
}) {
  const id = props.params.id;

  return (
    <div className="h-[90%] p-2 overflow-auto ">
      {props.children}
      <CreditsBtn id={id} />
      {props.credits}
      <ReviewsBtn id={id} />
      {props.reviews}
    </div>
  );
}
