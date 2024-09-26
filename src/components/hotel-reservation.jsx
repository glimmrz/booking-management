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

export default function HotelReservation() {
  const [guests, setGuests] = useState([
    {
      sn: 1,
      name: "Miss Samira Amin",
      phone: "+880 019 9635 5096",
      room: "Mud House King - MH(5)",
      stay: "Wed Feb 28, 2024 to Sat Mar 02, 2024",
      period: 3,
      adult: "2",
      children: "0",
      rate: 4500,
      amount: 13500,
    },
    {
      sn: 2,
      name: "Mr. Tariq Al-Masri",
      phone: "+880 017 8992 6365",
      room: "Mud House King - MH(4)",
      stay: "Sun Mar 03, 2024 to Wed Mar 06, 2024",
      period: 3,
      adult: "2",
      children: "0",
      rate: 4500,
      amount: 13500,
    },
    {
      sn: 3,
      name: "Mr. Ibrahim Qureshi",
      phone: "+880 019 0518 2973",
      room: "Water Villa - WV(13)",
      stay: "Fri Mar 08, 2024 to Sat Mar 09, 2024",
      period: 1,
      adult: "3",
      children: "1",
      rate: 8000,
      amount: 8000,
    },
    {
      sn: 4,
      name: "Mr. Jamal Farooq",
      phone: "+880 015 5333 8776",
      room: "Executive Deluxe - ED(8)",
      stay: "Wed Mar 06, 2024 to Thu Jan 01, 1970",
      period: 4,
      adult: "2",
      children: "0",
      rate: 3500,
      amount: 14000,
    },
    {
      sn: 5,
      name: "Miss Noura Al-Said",
      phone: "+880 019 2958 7222",
      room: "Presidential Suite - PS(1)",
      stay: "Sat Mar 02, 2024 to Mon Mar 04, 2024",
      period: 2,
      adult: "5",
      children: "2",
      rate: 13000,
      amount: 26000,
    },
    {
      sn: 6,
      name: "Miss Amira Hussain",
      phone: "+880 018 8578 8380",
      room: "Presidential Suite - PS(2)",
      stay: "Sun Mar 03, 2024 to Tue Mar 05, 2024",
      period: 2,
      adult: "5",
      children: "2",
      rate: 13000,
      amount: 26000,
    },
    {
      sn: 7,
      name: "Mr. Ahmad Sharif",
      phone: "+880 019 7402 1003",
      room: "Executive Deluxe - ED(1)",
      stay: "Mon Feb 26, 2024 to Tue Feb 27, 2024",
      period: 1,
      adult: "2",
      children: "0",
      rate: 3500,
      amount: 3500,
    },
    {
      sn: 8,
      name: "Miss Yasmin Aziz",
      phone: "+880 018 3059 1545",
      room: "Superior Deluxe - SD(1)",
      stay: "Sat Mar 09, 2024 to Thu Jan 01, 1970",
      period: 1,
      adult: "2",
      children: "1",
      rate: 4000,
      amount: 4000,
    },
    {
      sn: 9,
      name: "Miss Rania El-Amin",
      phone: "+880 019 1301 0499",
      room: "Mud House King - MH(1)",
      stay: "Thu Feb 29, 2024 to Tue Mar 05, 2024",
      period: 5,
      adult: "2",
      children: "0",
      rate: 4500,
      amount: 22500,
    },
    {
      sn: 10,
      name: "Miss Hana Yusuf",
      phone: "+880 018 8081 3526",
      room: "Superior Deluxe - SD(3)",
      stay: "Wed Mar 06, 2024 to Thu Jan 01, 1970",
      period: 4,
      adult: "2",
      children: "1",
      rate: 4000,
      amount: 16000,
    },
    {
      sn: 11,
      name: "Miss Hana Yusuf",
      phone: "+880 018 8081 3526",
      room: "Executive Deluxe - ED(4)",
      stay: "Fri Mar 01, 2024 to Tue Mar 05, 2024",
      period: 4,
      adult: "2",
      children: "0",
      rate: 3500,
      amount: 14000,
    },
    {
      sn: 12,
      name: "Miss Hana Yusuf",
      phone: "+880 018 8081 3526",
      room: "Presidential Suite - PS(3)",
      stay: "Fri Mar 08, 2024 to Thu Jan 01, 1970",
      period: 2,
      adult: "5",
      children: "2",
      rate: 13000,
      amount: 26000,
    },
    {
      sn: 13,
      name: "Mr. Zain Khalil",
      phone: "+880 015 7237 8295",
      room: "Presidential Suite - PS(2)",
      stay: "Thu Mar 07, 2024 to Sat Mar 09, 2024",
      period: 2,
      adult: "5",
      children: "2",
      rate: 13000,
      amount: 26000,
    },
    {
      sn: 14,
      name: "Miss Mariam Al-Fasi",
      phone: "+880 019 2236 7435",
      room: "Superior Deluxe - SD(6)",
      stay: "Sun Mar 03, 2024 to Tue Mar 05, 2024",
      period: 2,
      adult: "2",
      children: "1",
      rate: 4000,
      amount: 8000,
    },
    {
      sn: 15,
      name: "Miss Safa Abdel-Aziz",
      phone: "+880 017 9301 0786",
      room: "Executive Deluxe - ED(13)",
      stay: "Wed Mar 06, 2024 to Thu Jan 01, 1970",
      period: 4,
      adult: "2",
      children: "0",
      rate: 3500,
      amount: 14000,
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
      {/* <div className="mb-4 flex items-center">
        <Input
          type="text"
          placeholder="Search guests or rooms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm mr-2"
        />
        <Button>
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div> */}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Guest</TableHead>
            <TableHead>Accommodation</TableHead>
            <TableHead>Stay</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>rate</TableHead>
            <TableHead>total</TableHead>
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
                <div>{guest.rate}</div>
              </TableCell>{" "}
              <TableCell>
                <div>{guest.amount}</div>
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
