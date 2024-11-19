import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { User } from "lucide-react";

export default function Header() {
  const user = usePage().props.auth.user;

  return (
    <header className="bg-primary dark:bg-primary-dark shadow-md">
      <div className="px-4 ">
        <div className="flex justify-between font-black">
          <div className="flex flex-column items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="/images/CordiSimpleLogo.jpg"
                  alt="CordiSimple logo"
                  className="w-20"
                />
              </Link>
            </div>

            <nav className="flex items-center h-full">
              <Link
                href={route("events.index")}
                className={`text-secondary ${
                  route().current("events.index")
                    ? "bg-third text-secondary"
                    : "hover:bg-third"
                } transition-colors h-full flex items-center px-5`}
              >
                Events
              </Link>

              <Link
                href={route("statuses.index")}
                className={`text-secondary ${
                  route().current("statuses.index")
                    ? "bg-third text-secondary"
                    : "hover:bg-third"
                } transition-colors h-full flex items-center px-2`}
              >
                My reserves
              </Link>
            </nav>
          </div>

          <div className="flex items-center">
            <Link
              href="/login"
              className="text-title hover:text-secondary dark:text-title-dark dark:hover:text-secondary-dark transition-colors mr-4 flex gap-2"
            >
              <p>{user.name}</p>
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
