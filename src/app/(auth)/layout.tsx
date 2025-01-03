import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-xl max-h-2xl p-6 bg-white rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
}

{
  /* <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                {children}
            </div>
        </div> */
}
