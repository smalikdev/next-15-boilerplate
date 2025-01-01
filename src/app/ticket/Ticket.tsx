import React from "react";
import { TicketProps } from "./Types";

const Ticket: React.FC<TicketProps> = ({
  id,
  dateRange,
  title,
  description,
  status,
  priority,
  tags,
  comments,
  edits,
  action,
  handleTicketClick,
}) => {
  const statusClasses =
    status === "Resolved"
      ? "bg-green-100 text-green-600"
      : "bg-red-100 text-red-600";
  const actionClasses =
    status === "Resolved"
      ? "bg-green-50 text-green-600"
      : "bg-red-50 text-red-600";

  const priorityClasses =
    priority === "High"
      ? "border-red-500 shadow-rose-300 "
      : "bg-orange-100 text-orange-600";

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white min-w-100 cursor-pointer" onClick={() => handleTicketClick(id)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>

          <p className="text-sm text-black">{dateRange}</p>
        </div>


        <div
          className={`text-xs px-3 py-1 rounded-full font-semibold ${statusClasses}`}
        >
          {status === "Resolved" ? "Resolved" : "1 Days Left"}
        </div>
      </div>
      <h3 className="mt-2 text-black font-calibri text-[20px] font-bold leading-[30px] text-left">
        {title}
      </h3>
      <p className="mt-1 text-600 font-calibri">{description}</p>

      {/* bottom row */}
      <div className="flex items-center gap-2 mt-4">

        {tags.map((tag, index) => (
          <span
            key={index}
            className="border text-xs px-2 py-1 border-blue-200 rounded-sm font-medium"
          >
            <span className="bg-blue-950 mr-2 text-black">
              .
            </span>
            {tag}
          </span>
        ))}

        <div className={`flex items-center justify-center border px-2 py-1 rounded-md  shadow-1 ${priorityClasses}`}>
          <span className="inline-block w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
          <span className="text-black font-medium">
            {priority}
          </span>
        </div>

        <div className="flex items-center justify-center border px-2 py-1 rounded-md bg-blue-50 shadow-1 shadow-blue-200">
          <div className="mr-1">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1596_9355)">
                <path d="M3.17461 16.1796C3.09268 16.2485 2.99278 16.2926 2.88665 16.3068C2.78052 16.3209 2.67257 16.3044 2.57548 16.2593C2.47838 16.2142 2.39618 16.1423 2.33852 16.0521C2.28087 15.9619 2.25016 15.8571 2.25 15.75V4.5C2.25 4.35082 2.30926 4.20774 2.41475 4.10225C2.52024 3.99676 2.66332 3.9375 2.8125 3.9375H15.1875C15.3367 3.9375 15.4798 3.99676 15.5852 4.10225C15.6907 4.20774 15.75 4.35082 15.75 4.5V13.5C15.75 13.6492 15.6907 13.7923 15.5852 13.8977C15.4798 14.0032 15.3367 14.0625 15.1875 14.0625H5.80078C5.66828 14.0625 5.54004 14.1094 5.43867 14.1947L3.17461 16.1796Z" stroke="black" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 9.84375C9.46599 9.84375 9.84375 9.46599 9.84375 9C9.84375 8.53401 9.46599 8.15625 9 8.15625C8.53401 8.15625 8.15625 8.53401 8.15625 9C8.15625 9.46599 8.53401 9.84375 9 9.84375Z" fill="black" />
                <path d="M5.90625 9.84375C6.37224 9.84375 6.75 9.46599 6.75 9C6.75 8.53401 6.37224 8.15625 5.90625 8.15625C5.44026 8.15625 5.0625 8.53401 5.0625 9C5.0625 9.46599 5.44026 9.84375 5.90625 9.84375Z" fill="black" />
                <path d="M12.0938 9.84375C12.5597 9.84375 12.9375 9.46599 12.9375 9C12.9375 8.53401 12.5597 8.15625 12.0938 8.15625C11.6278 8.15625 11.25 8.53401 11.25 9C11.25 9.46599 11.6278 9.84375 12.0938 9.84375Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_1596_9355">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-black">
            2
          </div>
        </div>

        <div className="flex items-center justify-center border px-2 py-1 rounded-md bg-blue-50 shadow-1 shadow-blue-200">
          <div className="mr-1">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.2501 4.62477L3.39236 10.5795C3.18652 10.7916 3.07238 11.0761 3.0746 11.3716C3.07683 11.6671 3.19524 11.9499 3.40425 12.1588C3.61326 12.3677 3.89609 12.486 4.1916 12.4881C4.48711 12.4902 4.77158 12.3759 4.98353 12.17L11.9663 5.09094C12.3883 4.66894 12.6254 4.09657 12.6254 3.49977C12.6254 2.90296 12.3883 2.3306 11.9663 1.9086C11.5443 1.48659 10.9719 1.24951 10.3751 1.24951C9.77829 1.24951 9.20593 1.48659 8.78392 1.9086L1.80119 8.98836C1.17677 9.62304 0.828434 10.4787 0.832059 11.3691C0.835685 12.2594 1.19098 13.1123 1.82055 13.7418C2.45011 14.3714 3.30295 14.7267 4.19329 14.7303C5.08363 14.7339 5.93933 14.3856 6.574 13.7612L12.3438 7.99977" stroke="black" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-black">
            2
          </div>
        </div>

        <div className="flex items-center justify-center border px-3 py-1 rounded-md bg-blue-50 shadow-1 shadow-blue-200">
          <button className="bg-blue-50 flex items-center gap-2 bg-gray-100 justify-center">
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.97748 3.71452L9.53553 3.2621C7.58291 1.26318 4.41709 1.26318 2.46447 3.2621C0.511845 5.26101 0.511845 8.5019 2.46447 10.5008C4.41709 12.4997 7.58291 12.4997 9.53553 10.5008C10.671 9.33838 11.1462 7.75593 10.9611 6.24197M9.97748 3.71452H7.32582M9.97748 3.71452V1" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-black font-bold">
              Reopen
            </span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Ticket;
