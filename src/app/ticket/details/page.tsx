
"use client"
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import ReactStars from 'react-stars';

const TIcketDetails: React.FC = () => {
  const ratingChanged = (newRating: any) => {
    console.log(newRating)
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Incident Title */}
        <h1 className="text-2xl font-semibold text-gray-700">Incident</h1>

        {/* Incident Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Info Details */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Creation date</p>
              <p className="font-medium text-gray-700">04 May - 31 Oct</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="inline-block px-3 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-md">
                Open
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">System</p>
              <p className="font-medium text-gray-700">Kastle</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">National ID</p>
              <p className="font-medium text-gray-700">12324</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Assign to</p>
              <p className="font-medium text-gray-700">name</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Created by</p>
              <p className="font-medium text-gray-700">User name</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-500">Ticket description</p>
              <p className="font-medium text-gray-700">text...</p>
            </div>
          </div>

          {/* History Section */}
          <div>
            <h2 className="text-sm font-medium text-gray-600">History</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">2 Jan 2024</p>
                  <p className="text-xs text-gray-500">9:15 AM</p>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium text-green-600 bg-green-100 rounded-md">
                  Open
                </span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">4 Jan 2024</p>
                  <p className="text-xs text-gray-500">11:15 AM</p>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium text-yellow-600 bg-yellow-100 rounded-md">
                  In progress
                </span>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">2 Jan 2024</p>
                  <p className="text-xs text-gray-500">9:16 AM</p>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-md">
                  Resolved
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tabs Section */}

        <div className="mt-8">
          {/* <div className="border-b">
            <div className="flex space-x-6 text-sm font-medium text-gray-500">
              <button className="border-b-2 border-blue-500 text-blue-600 px-2 pb-2">
                Comments
              </button>
              <button className="hover:text-blue-600 px-2 pb-2">Document</button>
            </div> */}
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Comments</TabsTrigger>
              <TabsTrigger value="password">Document</TabsTrigger>
            </TabsList>
            {/* <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent> */}
          </Tabs>
        </div>

        {/* Comments Section */}
        <div className="mt-6">
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index}>
                <p className="text-sm text-gray-600">Today, 02:48 PM</p>
                <p className="font-medium text-gray-800">Andrew Mark</p>
                <p className="text-sm text-gray-500 mt-1">Completed...ask</p>
              </div>
            ))}
          </div>

          {/* Rate Experience */}
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-600">Rate Your Experience (1-5)</p>
            <div className="flex items-center mt-2 space-x-1">
              <div className="mt-2">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={'#ffd700'} />
              </div>
            </div>
          </div>

          {/* Add Comment */}
          {/* <div className="mt-4">
              <textarea
                placeholder="Add Comment"
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500 text-sm"
              ></textarea>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Submit
              </button>
            </div> */}

          <div className="p-0 my-3">
            <Textarea id="description" placeholder="Add Comment" rows={5} />
          </div>

          <Button size={"lg"} variant={"default"}>
            Add Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TIcketDetails;
