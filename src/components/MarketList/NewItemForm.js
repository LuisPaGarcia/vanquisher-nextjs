import Loading from "components/Loading";
import React from "react";

function NewItemForm({
  handleSubmit,
  handleChange,
  itemDescription,
  inputRef,
  loading,
}) {
  const isActive = Boolean(itemDescription.trim());
  return (
    <>
      <div className="mt-4 mb-8">
        <form
          onSubmit={handleSubmit}
          className="space-y-2 divide-y divide-gray-200"
        >
          <div className="space-y-6 sm:space-y-5 mb-4">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Descripción
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  onChange={handleChange}
                  value={itemDescription}
                  ref={inputRef}
                  disabled={loading}
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="given-name"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full justify-center disabled:opacity-50"
            disabled={!isActive || loading}
          >
            {loading && <Loading />}
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </form>
      </div>
    </>
  );
}

export default NewItemForm;
