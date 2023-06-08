import ClipboardCopy from "../shared/buttons/ClipboardCopy";
import EditItem from "../shared/buttons/EditItem";
import { WikiPageTypeWithKey } from "@/lib/types";

interface CardProps {
  wikiPage: WikiPageTypeWithKey;
}

export default function Card({ wikiPage }: CardProps) {
  const { title, content, shortcut } = wikiPage;

  return (
    <div className="rounded-lg border border-green-400  bg-green-300 p-2">
      <div className="text-xl font-bold">{title}</div>
      <p>{content}</p>
      <div className="flex min-w-max justify-between rounded-lg bg-green-400 p-1">
        <div>{shortcut}</div>
        <div className="flex">
          <ClipboardCopy text={shortcut || ""} />
          <EditItem wikiPage={wikiPage} />
        </div>
      </div>
    </div>
  );
}
