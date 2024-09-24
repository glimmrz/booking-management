import Icon from "./icon";

export default function Sidebar() {
  return (
    <aside className="bg-slate-200 w-16 h-screen">
      <div className="flex flex-col gap-4 items-center pt-4 text-slate-500">
        <Icon icon="chart" size={28} />
        <Icon icon="user" size={28} />
        <div className="text-blue-400 border border-slate-400 bg-white p-2 rounded-full">
          <Icon icon="settings" size={28} />
        </div>
        <Icon icon="group" size={28} />
        <Icon icon="security" size={28} />
        <Icon icon="chat" size={28} />
        <Icon icon="shop" size={28} />
        <Icon icon="code" size={28} />
        <Icon icon="question" size={28} />
      </div>
    </aside>
  );
}
