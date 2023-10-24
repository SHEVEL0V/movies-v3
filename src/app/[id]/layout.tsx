/** @format */

export default function MovieLayout(props: {
  children: React.ReactNode;
  credits: React.ReactNode;
}) {
  return (
    <div className="p-2">
      {props.children}
      {props.credits}
    </div>
  );
}
