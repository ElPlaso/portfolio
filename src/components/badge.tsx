export default function Badge({ label }: { label: string }) {
  return (
    <span className="bg-blue-100 text-center truncate text-blue-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-400 dark:text-blue-100 cursor-default">
      {label}
    </span>
  );
}
