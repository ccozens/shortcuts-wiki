import ClipboardCopy from "../shared/ClipboardCopy";

export default function Card({
  title,
  content,
  shortcut,
}: {
  title: string;
  content: string | null;
  shortcut: string | null;
}) {
  return (
    <div className="rounded-lg border border-green-400  bg-green-300 p-2">
      <div className="text-xl font-bold">{title}</div>
      <p>{content}</p>
      <div className="min-w-max bg-green-400 p-1 rounded-lg flex justify-between">
        <div >{shortcut}</div>
        <ClipboardCopy className="hover:cursor-pointer" text={shortcut || '' }/>
    </div>
    </div>
  );
}
