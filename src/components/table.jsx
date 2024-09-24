"use client";
import TableRow from "./table-row";

export default function Table() {
  return (
    <div className="overflow-x-auto w-full flex items-center justify-center">
      <table className="mt-8 capitalize rounded-md w-11/12 text-center border border-slate-300">
        <thead className="">
          <tr>
            <th className="p-3 text-sm font-semibold border-r">refresh</th>
            <th className="p-3 text-sm font-semibold border-r">thu 25 feb</th>
            <th className="p-3 text-sm font-semibold border-r">thu 26 feb</th>
            <th className="p-3 text-sm font-semibold border-r">thu 27 feb</th>
            <th className="p-3 text-sm font-semibold border-r">thu 28 feb</th>
            <th className="p-3 text-sm font-semibold border-r">thu 29 feb</th>
            <th className="p-3 text-sm font-semibold border-r">thu 01 mar</th>
            <th className="p-3 text-sm font-semibold border-r">thu 02 mar</th>
            <th className="p-3 text-sm font-semibold border-r">thu 03 mar</th>
            <th className="p-3 text-sm font-semibold border-r">thu 04 mar</th>
            <th className="p-3 text-sm font-semibold border-r">thu 05 mar</th>
            <th className="p-3 text-sm font-semibold border-r">thu 06 mar</th>
            <th className="p-3 text-sm font-semibold border-r">thu 07 mar</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  );
}
