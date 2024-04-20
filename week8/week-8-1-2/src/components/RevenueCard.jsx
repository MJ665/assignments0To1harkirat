export default function RevenueCard({
  title,
  showWarning,
  orderCount,
  amount,
}) {
  return (
    <div className="bg-white-500 rounded-sm shadow-md p-4 ">
      <div className="text-gray-4000 flex">
        {title}
        <div className="flex ">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center  font-bold text-4xl ">$ {amount}</div>
      <div className=" text-blue-500 ">
        {orderCount ? (<div className="flex cursor-pointer underline font-medium flex-row ">
          <div>
            {orderCount} order(s)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div></div>
        ) : null}
      </div>
    </div>
  );
}
