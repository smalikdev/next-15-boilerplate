'use-client'
import React, { useState } from "react";
import Ticket from "./Ticket";
import { TicketProps } from "./Types";
import TicketFull from "./TicketFull"; // Assuming this component is already created

const TicketList: React.FC = () => {
  const [selectedTicket, setSelectedTicket] = useState<TicketProps | null>(null);

  const cards: TicketProps[] = [
    {
      id: '1',
      dateRange: "04 May - 31 Oct",
      title: "Incident",
      description: "We have a long 000 for this client so we have to move faster...",
      status: "Pending" as "Pending",
      priority: "High",
      tags: ["NEW DIGITAL"],
      comments: 2,
      edits: 1,
      action: "Reopen",
    },
    {
      id: '2',
      dateRange: "04 May - 31 Oct",
      title: "Incident",
      description: "We have a long 000 for this client so we have to move faster...",
      status: "Resolved" as "Resolved",
      priority: "High",
      tags: ["NEW DIGITAL"],
      comments: 2,
      edits: 1,
      action: "Reopen",
    }
  ];

  const handleTicketClick = (id: string) => {
    const selected = cards.find((card) => card.id === id);
    setSelectedTicket(selected || null);
  };

  const handleClose = () => {
    setSelectedTicket(null);
  };

  return (
    <div className="relative">
      {/* Ticket List */}
      <div className={`grid grid-cols-2 sm:grid-cols-2 gap-4 ${selectedTicket && false ? 'blur-sm' : ''}`}>
        {cards.map((card) => (
          <Ticket handleTicketClick={handleTicketClick} key={card.id} {...card} />
        ))}
      </div>

      {/* TicketFull Component */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-gray-900 bg-opacity-50 transition-opacity"
            onClick={handleClose}
          ></div>
          {/* Sliding Panel */}
          <div
            className="relative bg-white w-3/10 h-full shadow-lg transition-transform transform translate-x-0"
          >
            {/* <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              ✕
            </button> */}
            <TicketFull {...selectedTicket} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketList;
