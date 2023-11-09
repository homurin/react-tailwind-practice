import "../index.css";

export default function NotificationBuble() {
  return (
    <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg ">
      <div className="shrink-0">
        <img className="h-16 w-16 rounded-full" src="/homu4.png" alt="homu" />
      </div>
      <div>
        <div className="text-xl font-medium text-black">Tamura Homura</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}
