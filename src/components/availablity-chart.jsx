import { RefreshCw } from "lucide-react";

const rooms = [
  { name: "Superior", type: "category", capacity: 50 },
  {
    name: "202",
    repairs: [{ start: "2024-02-25", end: "2024-02-27" }],
    bookings: [{ start: "2024-02-28", end: "2024-03-05" }],
  },
  {
    name: "203",
    cleaning: [{ start: "2024-02-25", end: "2024-02-27" }],
    repairs: [{ start: "2024-03-02", end: "2024-03-05" }],
  },
  { name: "204", bookings: [{ start: "2024-02-27", end: "2024-02-28" }] },
  {
    name: "205",
    cleaning: [{ start: "2024-02-25", end: "2024-02-27" }],
    bookings: [{ start: "2024-02-28", end: "2024-03-04" }],
  },
  {
    name: "Unallocated",
    bookings: [
      { start: "2024-02-25", end: "2024-02-26" },
      { start: "2024-02-27", end: "2024-03-05" },
    ],
  },
  { name: "Deluxe Double/Twin", type: "category", capacity: 55 },
  {
    name: "Deluxe Double/Twin 1",
    bookings: [
      { start: "2024-02-28", end: "2024-03-04" },
      { start: "2024-03-06", end: "2024-03-09" },
    ],
  },
  {
    name: "Deluxe Double/Twin 2",
    bookings: [
      { start: "2024-02-26", end: "2024-03-02" },
      { start: "2024-03-04", end: "2024-03-05" },
    ],
  },
  { name: "Deluxe Double/Twin 3" },
  {
    name: "Deluxe Double/Twin 4",
    bookings: [{ start: "2024-02-26", end: "2024-03-01" }],
  },
  {
    name: "Unallocated",
    bookings: [
      { start: "2024-02-25", end: "2024-02-28" },
      { start: "2024-03-01", end: "2024-03-08" },
    ],
    cleaning: [{ start: "2024-02-25", end: "2024-02-27" }],
  },
  { name: "Premium Deluxe Double", type: "category" },
  { name: "Premium deluxe Double 1" },
  { name: "Premium deluxe Double 2" },
  { name: "Premium deluxe Double 3" },
  { name: "Unallocated" },
  { name: "Premium Deluxe Triple", type: "category" },
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
  const getStatus = (room, date) => {
    const currentDate = date.toISOString().split("T")[0];
    if (
      room.repairs?.some((r) => r.start <= currentDate && r.end >= currentDate)
    )
      return "repair";
    if (
      room.cleaning?.some((c) => c.start <= currentDate && c.end >= currentDate)
    )
      return "cleaning";
    if (
      room.bookings?.some((b) => b.start <= currentDate && b.end >= currentDate)
    )
      return "booked";
    return "available";
  };

  const getStatusBlocks = (room) => {
    let blocks = [];
    let currentBlock = { status: null, start: null, end: null };

    days.forEach((day, index) => {
      const status = getStatus(room, day);
      if (status !== currentBlock.status) {
        if (currentBlock.status) {
          blocks.push(currentBlock);
        }
        currentBlock = { status, start: index, end: index };
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
              {rooms.map((room) => (
                <tr key={room.name}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {room.name}
                    {room.type === "category" && (
                      <span className="ml-2 text-gray-500">
                        {room.capacity}
                      </span>
                    )}
                  </td>
                  <td colSpan={days.length} className="p-0">
                    <div className="flex h-8">
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
                          }`}
                          style={{
                            width: `${
                              ((block.end - block.start + 1) / days.length) *
                              100
                            }%`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
