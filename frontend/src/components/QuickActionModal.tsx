export interface QuickActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  header: React.ReactNode;
  form: React.ReactNode;
}

const QuickActionModal: React.FC<QuickActionModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  header,
  form,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Background backdrop */}
      <div className="fixed inset-0 bg-neutral-800/75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* Modal panel */}
          <div className="relative transform overflow-hidden rounded-lg bg-neutral-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            {/* Close button */}
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md bg-neutral-900 text-orange-100 hover:text-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal header */}


            <div className="mt-3 mb-10 text-center sm:text-left">
              <h3
                className="text-2xl font-medium text-orange-500"
                id="modal-title"
              >
                {header}
              </h3>
            </div>


            {/* Modal form content */}
            <div className="mt-4">{form}</div>

            {/* Modal actions */}
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={onSubmit}
                className="inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-orange-400 sm:ml-3 sm:w-auto"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 inline-flex w-full justify-center rounded-md border-2 border-orange-100 bg-neutral-900 px-3 py-2 text-sm font-semibold text-orange-100 shadow-sm hover:bg-neutral-800 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActionModal;
