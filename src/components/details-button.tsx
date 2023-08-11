import { useDetailsContext } from "@/contexts/details-context";

export default function DetailsButton() {
  const { detailsOpen, setDetailsOpen } = useDetailsContext();

  return (
    <button
      className="border border-gray-300 rounded-md px-4 py-2 max-sm:py-3 text-gray-600 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 max-sm:rounded-sm max-sm:border-none max-sm:mt-2"
      onClick={() => setDetailsOpen(!detailsOpen)}
    >
      {detailsOpen ? "Hide details" : "Details"}
    </button>
  );
}
