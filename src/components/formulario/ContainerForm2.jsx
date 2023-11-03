
export const ContainerForm2 = () => {
  return (
    <div className="grid gap-4 mb-4 sm:grid-cols-2">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required=""
        />
      </div>
      <div>
        <label
          htmlFor="emailConfirmation"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirmación email
        </label>
        <input
          type="email"
          name="emailConfirmation"
          id="emailConfirmation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required=""
        />
      </div>{" "}
      {/* <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required=""
            />
          </div> */}
    </div>
  );
};
