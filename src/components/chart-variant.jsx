"use client";
import { RefreshCw, ChevronDown, ChevronRight } from "lucide-react";
import React from "react";
import { useState } from "react";

const roomsData = [
  {
    name: "Mud House King",
    capacity: 5,
    rooms: [
      {
        name: "MH1",
        type: "category",
        bookings: [
          {
            bookie: "Mr. Ali Raza",
            start: "2024-03-05",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "MH2",
        type: "category",
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-02-28",
            end: "2024-02-29",
          },
        ],
        bookings: [
          {
            bookie: "Ms Aisha Begum",
            start: "2024-03-01",
            end: "2024-03-06",
          },
          {
            bookie: "Ms Yasmin Aziz",
            start: "2024-03-07",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "MH3",
        type: "category",
        repairs: [
          {
            name: "Repairs",
            start: "2024-02-27",
            end: "2024-02-28",
          },
        ],
      },
      {
        name: "MH4",
        type: "category",
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-02-25",
            end: "2024-02-26",
          },
        ],
        bookings: [
          {
            bookie: "Ms Aisha Begum",
            start: "2024-02-27",
            end: "2024-03-03",
          },
          {
            bookie: "Ms Layla Mahmoud",
            start: "2024-03-04",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "MH5",
        type: "category",
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-03",
            end: "2024-03-04",
          },
        ],
        bookings: [
          {
            bookie: "Ms Noura Al-Said",
            start: "2024-03-05",
            end: "2024-03-09",
          },
        ],
      },
    ],
  },
  {
    name: "Superior Deluxe",
    capacity: 6,
    rooms: [
      {
        name: "SD1",
        type: "category",
      },
      {
        name: "SD2",
        type: "category",
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-08",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "SD3",
        type: "category",
      },
      {
        name: "SD4",
        type: "category",
        repairs: [
          {
            name: "Repairs",
            start: "2024-03-04",
            end: "2024-03-05",
          },
        ],
        bookings: [
          {
            bookie: "Ms Safa Abdel-Aziz",
            start: "2024-03-06",
            end: "2024-03-07",
          },
          {
            bookie: "Ms Nadia Omar",
            start: "2024-03-08",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "SD5",
        type: "category",
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-04",
            end: "2024-03-05",
          },
        ],
      },
      {
        name: "SD6",
        type: "category",
      },
    ],
  },
  {
    name: "Executive Deluxe",
    capacity: 15,
    rooms: [
      {
        name: "ED1",
        type: "category",
        bookings: [
          {
            bookie: "Ms Aisha Begum",
            start: "2024-03-01",
            end: "2024-03-03",
          },
          {
            bookie: "Ms Zainab Ismail",
            start: "2024-03-04",
            end: "2024-03-06",
          },
          {
            bookie: "Mr. Bilal Mahmood",
            start: "2024-03-07",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "ED2",
        type: "category",
        repairs: [
          {
            name: "Repairs",
            start: "2024-03-07",
            end: "2024-03-08",
          },
        ],
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-09",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "ED3",
        type: "category",
        bookings: [
          {
            bookie: "Ms Amira Hussain",
            start: "2024-03-07",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "ED4",
        type: "category",
        bookings: [
          {
            bookie: "Mr. Ibrahim Qureshi",
            start: "2024-03-02",
            end: "2024-03-05",
          },
        ],
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-06",
            end: "2024-03-07",
          },
        ],
      },
      {
        name: "ED5",
        type: "category",
        repairs: [
          {
            name: "Repairs",
            start: "2024-03-04",
            end: "2024-03-05",
          },
        ],
      },
      {
        name: "ED6",
        type: "category",
        repairs: [
          {
            name: "Repairs",
            start: "2024-02-27",
            end: "2024-02-28",
          },
        ],
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-02-29",
            end: "2024-03-01",
          },
        ],
      },
      {
        name: "ED7",
        type: "category",
        bookings: [
          {
            bookie: "Ms Amira Hussain",
            start: "2024-02-27",
            end: "2024-03-03",
          },
          {
            bookie: "Ms Rania El-Amin",
            start: "2024-03-04",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "ED8",
        type: "category",
        repairs: [
          {
            name: "Repairs",
            start: "2024-03-02",
            end: "2024-03-04",
          },
        ],
        bookings: [
          {
            bookie: "Ms Amira Hussain",
            start: "2024-03-05",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "ED9",
        type: "category",
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-06",
            end: "2024-03-07",
          },
        ],
      },
      {
        name: "ED10",
        type: "category",
      },
      {
        name: "ED11",
        type: "category",
        bookings: [
          {
            bookie: "Ms Aisha Begum",
            start: "2024-03-08",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "ED12",
        type: "category",
        bookings: [
          {
            bookie: "Ms Mariam Al-Fasi",
            start: "2024-02-25",
            end: "2024-02-29",
          },
        ],
      },
      {
        name: "ED13",
        type: "category",
        repairs: [
          {
            name: "Repairs",
            start: "2024-03-02",
            end: "2024-03-03",
          },
        ],
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-04",
            end: "2024-03-05",
          },
        ],
        bookings: [
          {
            bookie: "Ms Aisha Begum",
            start: "2024-03-06",
            end: "2024-03-08",
          },
        ],
      },
      {
        name: "ED14",
        type: "category",
        bookings: [
          {
            bookie: "Mr. Omar Farouk",
            start: "2024-02-26",
            end: "2024-02-28",
          },
          {
            bookie: "Ms Nadia Omar",
            start: "2024-02-29",
            end: "2024-03-02",
          },
          {
            bookie: "Mr. Tariq Al-Masri",
            start: "2024-03-03",
            end: "2024-03-05",
          },
        ],
      },
      {
        name: "ED15",
        type: "category",
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-07",
            end: "2024-03-08",
          },
        ],
        bookings: [
          {
            bookie: "Mr. Kamal Haddad",
            start: "2024-03-09",
            end: "2024-03-09",
          },
        ],
      },
    ],
  },
  {
    name: "Water Villa",
    capacity: 15,
    rooms: [
      {
        name: "WV1",
        type: "category",
        bookings: [
          {
            bookie: "Ms Rania El-Amin",
            start: "2024-02-29",
            end: "2024-03-02",
          },
          {
            bookie: "Ms Samira Amin",
            start: "2024-03-03",
            end: "2024-03-05",
          },
          {
            bookie: "Mr. Tariq Al-Masri",
            start: "2024-03-06",
            end: "2024-03-08",
          },
        ],
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-09",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "WV2",
        type: "category",
      },
      {
        name: "WV3",
        type: "category",
      },
      {
        name: "WV4",
        type: "category",
        bookings: [
          {
            bookie: "Ms Leila Hakim",
            start: "2024-03-08",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "WV5",
        type: "category",
      },
      {
        name: "WV6",
        type: "category",
        repairs: [
          {
            name: "Repairs",
            start: "2024-02-27",
            end: "2024-02-28",
          },
        ],
        bookings: [
          {
            bookie: "Mr. Rashid Al-Amir",
            start: "2024-02-29",
            end: "2024-03-01",
          },
        ],
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-02",
            end: "2024-03-03",
          },
        ],
      },
      {
        name: "WV7",
        type: "category",
        repairs: [
          {
            name: "Repairs",
            start: "2024-03-02",
            end: "2024-03-03",
          },
        ],
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-04",
            end: "2024-03-05",
          },
        ],
      },
      {
        name: "WV8",
        type: "category",
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-01",
            end: "2024-03-02",
          },
        ],
      },
      {
        name: "WV9",
        type: "category",
        repairs: [
          {
            name: "Repairs",
            start: "2024-02-25",
            end: "2024-02-26",
          },
        ],
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-02-27",
            end: "2024-02-28",
          },
        ],
        bookings: [
          {
            bookie: "Ms Soraya Khoury",
            start: "2024-02-29",
            end: "2024-03-01",
          },
          {
            bookie: "Mr. Bilal Mahmood",
            start: "2024-03-02",
            end: "2024-03-03",
          },
        ],
      },
      {
        name: "WV10",
        type: "category",
        repairs: [
          {
            name: "Repairs",
            start: "2024-02-26",
            end: "2024-02-27",
          },
        ],
        bookings: [
          {
            bookie: "Ms Zainab Ismail",
            start: "2024-02-28",
            end: "2024-02-29",
          },
          {
            bookie: "Mr. Bilal Mahmood",
            start: "2024-03-01",
            end: "2024-03-02",
          },
          {
            bookie: "Mr. Omar Farouk",
            start: "2024-03-03",
            end: "2024-03-04",
          },
        ],
      },
      {
        name: "WV11",
        type: "category",
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-05",
            end: "2024-03-06",
          },
        ],
      },
      {
        name: "WV12",
        type: "category",
        bookings: [
          {
            bookie: "Ms Noura Al-Said",
            start: "2024-02-27",
            end: "2024-02-28",
          },
          {
            bookie: "Mr. Ibrahim Qureshi",
            start: "2024-02-29",
            end: "2024-03-01",
          },
          {
            bookie: "Mr. Bilal Mahmood",
            start: "2024-03-02",
            end: "2024-03-03",
          },
        ],
        repairs: [
          {
            name: "Repairs",
            start: "2024-03-04",
            end: "2024-03-06",
          },
        ],
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-07",
            end: "2024-03-08",
          },
        ],
      },
      {
        name: "WV13",
        type: "category",
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-02-29",
            end: "2024-03-01",
          },
        ],
        bookings: [
          {
            bookie: "Ms Safa Abdel-Aziz",
            start: "2024-03-02",
            end: "2024-03-06",
          },
          {
            bookie: "Mr. Ibrahim Qureshi",
            start: "2024-03-07",
            end: "2024-03-09",
          },
        ],
      },
      {
        name: "WV14",
        type: "category",
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-03-01",
            end: "2024-03-02",
          },
        ],
      },
      {
        name: "WV15",
        type: "category",
        cleaning: [
          {
            name: "Cleaning",
            start: "2024-02-25",
            end: "2024-02-26",
          },
        ],
        repairs: [
          {
            name: "Repairs",
            start: "2024-02-27",
            end: "2024-02-28",
          },
        ],
        bookings: [
          {
            bookie: "Ms Amira Hussain",
            start: "2024-02-29",
            end: "2024-03-04",
          },
          {
            bookie: "Mr. Tariq Al-Masri",
            start: "2024-03-05",
            end: "2024-03-09",
          },
        ],
      },
    ],
  },
  {
    name: "Presidential Suite",
    capacity: 3,
    rooms: [
      {
        name: "PS1",
        type: "category",
      },
      {
        name: "PS2",
        type: "category",
      },
      {
        name: "PS3",
        type: "category",
        repairs: [
          {
            bookie: "Repairs",
            start: "2024-03-05",
            end: "2024-03-06",
          },
        ],
        bookings: [
          {
            bookie: "Mr. Rashid Al-Amir",
            start: "2024-03-07",
            end: "2024-03-09",
          },
        ],
      },
    ],
  },
];

const startDate = new Date("2024-02-25");
const endDate = new Date("2024-03-09");

const getDaysBetweenDates = (start, end) => {
  const days = [];
  let currentDate = new Date(start);
  while (currentDate <= end) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return days;
};

const formatDate = (date) => {
  return `${date.getDate()} ${date.toLocaleString("default", {
    month: "short",
  })}`;
};

const days = getDaysBetweenDates(startDate, endDate);

export default function HotelAvailabilityChart() {
  const [expandedCategories, setExpandedCategories] = useState(
    roomsData.map((category) => category.name)
  );

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const getStatus = (room, date) => {
    const currentDate = date.toISOString().split("T")[0];
    if (
      room.repairs?.some((r) => r.start <= currentDate && r.end >= currentDate)
    )
      return { status: "repair" };
    if (
      room.cleaning?.some((c) => c.start <= currentDate && c.end >= currentDate)
    )
      return { status: "cleaning" };
    const booking = room.bookings?.find(
      (b) => b.start <= currentDate && b.end >= currentDate
    );
    if (booking) return { status: "booked", bookie: booking.bookie };
    return { status: "available" };
  };

  const getStatusBlocks = (room) => {
    let blocks = [];
    let currentBlock = { status: null, start: null, end: null, bookie: null };

    days.forEach((day, index) => {
      const { status, bookie } = getStatus(room, day);
      if (status !== currentBlock.status || bookie !== currentBlock.bookie) {
        if (currentBlock.status) {
          blocks.push(currentBlock);
        }
        currentBlock = { status, bookie, start: index, end: index };
      } else {
        currentBlock.end = index;
      }
    });
    blocks.push(currentBlock);
    return blocks;
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  <div className="flex items-center">
                    <RefreshCw className="h-5 w-5 text-gray-400 mr-2" />
                    refresh
                  </div>
                </th>
                {days.map((day) => (
                  <th
                    key={day.toISOString()}
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    {formatDate(day)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {roomsData.map((category) => (
                <React.Fragment key={category.name}>
                  <tr className="bg-gray-50">
                    <td
                      colSpan={days.length + 1}
                      className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      <button
                        className="flex items-center focus:outline-none"
                        onClick={() => toggleCategory(category.name)}
                      >
                        {expandedCategories.includes(category.name) ? (
                          <ChevronDown className="h-5 w-5 mr-2" />
                        ) : (
                          <ChevronRight className="h-5 w-5 mr-2" />
                        )}
                        {category.name}
                        {category.capacity && (
                          <span className="ml-2 text-gray-500">
                            {category.capacity}
                          </span>
                        )}
                      </button>
                    </td>
                  </tr>
                  {expandedCategories.includes(category.name) &&
                    category.rooms.map((room) => (
                      <tr key={`${category.name}-${room.name}`}>
                        <td className="whitespace-nowrap py-4 pl-8 pr-3 text-sm font-medium text-gray-900 sm:pl-10">
                          {room.name}
                        </td>
                        <td colSpan={days.length} className="p-0">
                          <div className="flex h-8 relative">
                            {getStatusBlocks(room).map((block, index) => (
                              <div
                                key={index}
                                className={`h-full rounded-md ${
                                  block.status === "repair"
                                    ? "bg-amber-700"
                                    : block.status === "cleaning"
                                    ? "bg-blue-500"
                                    : block.status === "booked"
                                    ? "bg-green-500"
                                    : "bg-white"
                                } relative group`}
                                style={{
                                  width: `${
                                    ((block.end - block.start + 1) /
                                      days.length) *
                                    100
                                  }%`,
                                }}
                              >
                                <p className="text-white text-center font-extrabold text-xs">
                                  {block.bookie}
                                </p>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
