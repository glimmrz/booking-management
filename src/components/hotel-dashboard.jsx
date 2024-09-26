"use client";
import React, { useState } from "react";
import {
  BedDouble,
  Mail,
  Moon,
  MoreVertical,
  Search,
  User,
} from "lucide-react";

// Card Component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white p-4 rounded-lg shadow ${className}`}>
    {children}
  </div>
);

// Button Component
const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    icon: "h-10 w-10",
  };
  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Table Components
const Table = ({ children }) => (
  <div className="w-full overflow-auto">
    <table className="w-full caption-bottom text-sm">{children}</table>
  </div>
);

const TableHeader = ({ children }) => (
  <thead className="bg-slate-200">{children}</thead>
);

const TableBody = ({ children }) => <tbody>{children}</tbody>;

const TableRow = ({ children }) => (
  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
    {children}
  </tr>
);

const TableHead = ({ children }) => (
  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
    {children}
  </th>
);

const TableCell = ({ children }) => (
  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{children}</td>
);

// Input Component
const Input = ({ className, ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

export default function HotelDashboard() {
  const [guests, setGuests] = useState([
    {
      sn: 1,
      name: "Mr. Bilal Mahmood",
      phone: "+880 018 5448 1080",
      room: "Superior Deluxe - SD(4)",
      stay: "Wed Mar 06, 2024 to Thu Jan 01, 1970",
      period: 4,
      adult: "2",
      children: "1",
      status: "Check out",
    },
    {
      sn: 2,
      name: "Mr. Jamal Farooq",
      phone: "+880 019 4282 5331",
      room: "Executive Deluxe - ED(10)",
      stay: "Tue Mar 05, 2024 to Fri Mar 08, 2024",
      period: 3,
      adult: "2",
      children: "0",
      status: "Check in",
    },
    {
      sn: 3,
      name: "Mr. Ibrahim Qureshi",
      phone: "+880 015 2494 9150",
      room: "Presidential Suite - PS(3)",
      stay: "Fri Mar 01, 2024 to Wed Mar 06, 2024",
      period: 5,
      adult: "5",
      children: "2",
      status: "Check out",
    },
    {
      sn: 4,
      name: "Miss Zainab Ismail",
      phone: "+880 015 8487 2135",
      room: "Executive Deluxe - ED(1)",
      stay: "Thu Feb 29, 2024 to Sat Mar 02, 2024",
      period: 2,
      adult: "2",
      children: "0",
      status: "Check out",
    },
    {
      sn: 5,
      name: "Mr. Kareem Siddiqui",
      phone: "+880 015 1512 0864",
      room: "Executive Deluxe - ED(14)",
      stay: "Mon Feb 26, 2024 to Wed Feb 28, 2024",
      period: 2,
      adult: "2",
      children: "0",
      status: "Check out",
    },
    {
      sn: 6,
      name: "Miss Noura Al-Said",
      phone: "+880 015 0912 4306",
      room: "Executive Deluxe - ED(13)",
      stay: "Sat Mar 09, 2024 to Thu Jan 01, 1970",
      period: 4,
      adult: "2",
      children: "0",
      status: "Check out",
    },
    {
      sn: 7,
      name: "Miss Samira Amin",
      phone: "+880 017 0511 5672",
      room: "Water Villa - WV(8)",
      stay: "Thu Mar 07, 2024 to Thu Jan 01, 1970",
      period: 4,
      adult: "3",
      children: "1",
      status: "Check in",
    },
    {
      sn: 8,
      name: "Mr. Ali Raza",
      phone: "+880 018 8205 3635",
      room: "Presidential Suite - PS(1)",
      stay: "Fri Mar 01, 2024 to Sun Mar 03, 2024",
      period: 2,
      adult: "5",
      children: "2",
      status: "Check out",
    },
    {
      sn: 9,
      name: "Mr. Bilal Mahmood",
      phone: "+880 018 5448 1080",
      room: "Mud House King - MH(4)",
      stay: "Wed Mar 06, 2024 to Thu Mar 07, 2024",
      period: 1,
      adult: "2",
      children: "0",
      status: "Check in",
    },
    {
      sn: 10,
      name: "Miss Fatima Zahra",
      phone: "+880 015 0985 2392",
      room: "Superior Deluxe - SD(4)",
      stay: "Sun Mar 03, 2024 to Mon Mar 04, 2024",
      period: 1,
      adult: "2",
      children: "1",
      status: "Check in",
    },
    {
      sn: 11,
      name: "Miss Amira Hussain",
      phone: "+880 015 7467 1447",
      room: "Presidential Suite - PS(3)",
      stay: "Thu Mar 07, 2024 to Thu Jan 01, 1970",
      period: 5,
      adult: "5",
      children: "2",
      status: "Check out",
    },
    {
      sn: 12,
      name: "Miss Samira Amin",
      phone: "+880 017 0511 5672",
      room: "Superior Deluxe - SD(1)",
      stay: "Thu Mar 07, 2024 to Thu Jan 01, 1970",
      period: 4,
      adult: "2",
      children: "1",
      status: "Check in",
    },
    {
      sn: 13,
      name: "Mr. Ibrahim Qureshi",
      phone: "+880 015 2494 9150",
      room: "Mud House King - MH(3)",
      stay: "Tue Feb 27, 2024 to Wed Feb 28, 2024",
      period: 1,
      adult: "2",
      children: "0",
      status: "Check out",
    },
    {
      sn: 14,
      name: "Miss Zainab Ismail",
      phone: "+880 015 8487 2135",
      room: "Water Villa - WV(1)",
      stay: "Sat Mar 09, 2024 to Thu Jan 01, 1970",
      period: 3,
      adult: "3",
      children: "1",
      status: "Check out",
    },
    {
      sn: 15,
      name: "Miss Mariam Al-Fasi",
      phone: "+880 018 9241 5460",
      room: "Presidential Suite - PS(3)",
      stay: "Wed Feb 28, 2024 to Fri Mar 01, 2024",
      period: 2,
      adult: "5",
      children: "2",
      status: "Check in",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredGuests = guests.filter(
    (guest) =>
      guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guest.room.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    {
      title: "Arrivals",
      value: guests.filter((g) => g.status === "Arriving").length,
      // icon: "🛬",
    },
    {
      title: "Departs",
      value: guests.filter((g) => g.status === "Check out").length,
    },
    {
      title: "Inhouse",
      value: guests.filter((g) => g.status === "In House").length,
    },
    { title: "Bookings", value: guests.length },
  ];

  const handleStatusChange = (sn, newStatus) => {
    setGuests(
      guests.map((guest) =>
        guest.sn === sn ? { ...guest, status: newStatus } : guest
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <div className="text-2xl font-bold">
              {stat.value} {stat.icon}
            </div>
            <div className="text-sm text-gray-500">{stat.title}</div>
          </Card>
        ))}
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Guest</TableHead>
            <TableHead>Accommodation</TableHead>
            <TableHead>Stay</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredGuests.map((guest, index) => (
            <TableRow key={guest.sn}>
              <TableCell>
                <div>{guest.name}</div>
                <div className="text-sm text-gray-500">{guest.phone}</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  {guest.room}
                  <BedDouble className="ml-2 h-4 w-4" />
                </div>
              </TableCell>
              <TableCell>
                <div>{guest.stay}</div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex items-center bg-slate-100 p-1 rounded-md">
                    <span className="mr-1">{guest.period}</span>
                    <Moon className="h-4 w-4 mr-2" />
                  </div>
                  <div className="flex items-center bg-slate-100 p-1 rounded-md">
                    <span className="mr-1">{guest.adult}</span>
                    <User className="h-4 w-4 mr-2" />
                  </div>
                  <div className="flex items-center bg-slate-100 p-1 rounded-md">
                    <span>{guest.children}</span>
                    <User className="h-3 w-4 mr-2" />
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Button
                  variant={guest.status === "Check out" ? "default" : "outline"}
                  size="sm"
                  onClick={() =>
                    handleStatusChange(
                      guest.id,
                      guest.status === "Check out" ? "In House" : "Check out"
                    )
                  }
                >
                  {guest.status}
                </Button>
                {guest.amount && (
                  <div className="text-sm text-gray-500 mt-1 px-3">
                    ৳{guest.amount}
                  </div>
                )}
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
