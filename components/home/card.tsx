import Balancer from "react-wrap-balancer";

export default function Card({
  title,
  app,
  content,
  shortcut,
}: {
  title: string;
  app: string | null;
  content: string | null;
  shortcut: string | null;
}) {
  return (
    <div className="rounded-lg border-2 border-green-400  bg-green-800 p-2 w-3/4">
      <h2>
        <Balancer>{title}</Balancer>
      </h2>
      <Balancer>{app}</Balancer>
      <Balancer>{content}</Balancer>
      <Balancer >{shortcut}</Balancer>
    </div>
  );
}
