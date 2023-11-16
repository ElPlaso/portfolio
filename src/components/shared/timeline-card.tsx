export default function TimeLineCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pb-4 shrink-0 flex">
      <div className="px-4 pt-2 pb-4 shadow-lg rounded-2xl border-[1px] dark:border-none dark:bg-[rgb(18,18,18)] dark:shadow-2xl">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
        <div className="flex flex-col w-full">{children}</div>
      </div>
    </div>
  );
}
