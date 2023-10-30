import { useDetailsContext } from "@/contexts/details-context";

export default function DetailsButton() {
  const { detailsOpen, setDetailsOpen } = useDetailsContext();

  return (
    <button
      className="border border-gray-300 dark:border-grayDarkSecondary rounded-md px-4 py-2 max-sm:py-3 text-grayLight dark:text-blueDark hover:bg-gray-100 dark:hover:bg-grayDarkFill max-sm:rounded-sm max-sm:border-none max-sm:mt-2"
      onClick={() => setDetailsOpen(!detailsOpen)}
    >
      {detailsOpen ? "Hide details" : "Details"}
    </button>
  );
}
