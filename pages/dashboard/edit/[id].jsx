import AuthWrapper from "../../../components/AuthWrapper";
import Header from "../../../components/Header";

const Edit = () => (
  <AuthWrapper>
    <div classNameName="flex flex-col">
      <Header />
      <div className="flex-grow px-6 py-20 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-6">
          <h1>Edit Landing Page</h1>
          <div className="flex flex-col space-y-4">
            <input
              className="px-3 py-2 rounded-md text-base border"
              type="text"
              placeholder="Title"
            />
            <textarea
              className="px-3 py-2 rounded-md text-base border"
              placeholder="Description"
            ></textarea>

            <div className="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <div className="space-y-2">
              <div className="flex items-center mb-4">
                <input
                  id="disabled-radio-1"
                  type="radio"
                  value=""
                  name="disabled-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="disabled-radio-1"
                  className="ms-2 text-sm font-medium dark:text-gray-500"
                >
                  Draft
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="disabled-radio-2"
                  type="radio"
                  value=""
                  name="disabled-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="disabled-radio-2"
                  className="ms-2 text-sm font-medium dark:text-gray-500"
                >
                  Published
                </label>
              </div>
            </div>
          </div>
          <button className="px-3 py-2 rounded-md text-base bg-gray-600 text-white hover:bg-black transition-all duration-300">
            Update
          </button>
        </div>
      </div>
    </div>
  </AuthWrapper>
);

export default Edit;
