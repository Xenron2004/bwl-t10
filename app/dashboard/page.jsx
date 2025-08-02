"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import {
  FiUser,
  FiLogOut,
  FiDownload,
  FiEdit,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);
  const ticketRef = useRef();

  const handleDownloadTicket = async () => {
    if (!ticketRef.current) return;

    const canvas = await html2canvas(ticketRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "mm", "a4");

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight - 20);
    pdf.save(`${userDetails.name}_GoldenTicket.pdf`);
  };

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/login");
      return;
    }

    if (session.user.paymentStatus !== "completed") {
      router.push("/payment");
      return;
    }

    // Set user details for demo
    setUserDetails({
      name: session.user.name,
      rsplId: session.user.rsplId,
      email: session.user.email,
      season: "Season 1",
      ticketType: "Golden Ticket",
      registrationDate: new Date().toLocaleDateString(),
      trialDate: "15th March 2024",
      venue: "SMS Stadium, Jaipur",
    });
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (!userDetails) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome, {userDetails.name}!
              </h1>
              <p className="text-gray-400">RSPL ID: {userDetails.rsplId}</p>
            </div>
            <button
              onClick={() => signOut()}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors mt-4 md:mt-0"
            >
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Golden Ticket */}
            <div ref={ticketRef} className="lg:col-span-2">
              <div className="golden-ticket rounded-2xl p-8 text-black relative overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold">🎫 Golden Ticket</h2>
                    <div className="text-right">
                      <div className="text-sm opacity-80">BWL</div>
                      <div className="text-xs opacity-60">2025</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-sm opacity-80 mb-1">Player Name</div>
                      <div className="text-xl font-bold">
                        {userDetails.name}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-80 mb-1">BWL ID</div>
                      <div className="text-xl font-mono font-bold">
                        {userDetails.rsplId}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-80 mb-1">Ticket Type</div>
                      <div className="text-lg font-semibold">
                        {userDetails.ticketType}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-80 mb-1">Season</div>
                      <div className="text-lg font-semibold">
                        {userDetails.season}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/20 pt-4">
                    <div className="text-sm opacity-80 mb-2">
                      Valid for all BWL events and trials
                    </div>
                    <div className="text-xs opacity-60">
                      Issued on: {userDetails.registrationDate}
                    </div>
                  </div>
                </div>
              </div>

              {/* Trial Information */}
              <div className="bg-gray-800 rounded-xl p-6 mt-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  <FiCalendar className="text-yellow-400" />
                  <span>Trial Information</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Trial Date</div>
                    <div className="text-lg font-semibold text-white">
                      {userDetails.trialDate}
                    </div>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Venue</div>
                    <div className="text-lg font-semibold text-white flex items-center space-x-1">
                      <FiMapPin className="text-yellow-400" />
                      <span>{userDetails.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-600 rounded-lg">
                  <div className="text-yellow-400 font-semibold mb-2">
                    📢 Important Instructions:
                  </div>
                  <ul className="text-yellow-100 text-sm space-y-1">
                    <li>• Report at venue 1 hour before trial time</li>
                    <li>• Bring original ID proof and this Golden Ticket</li>
                    <li>• Wear proper cricket attire and bring your kit</li>
                    <li>• Follow all COVID-19 safety protocols</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Summary */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                  <FiUser className="text-yellow-400" />
                  <span>Profile</span>
                </h3>

                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white">{userDetails.email}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">
                      Registration Date
                    </div>
                    <div className="text-white">
                      {userDetails.registrationDate}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Status</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-400">Active</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-4 bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <FiEdit />
                  <span>Edit Profile</span>
                </button>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  Quick Actions
                </h3>

                <div className="space-y-3">
                  <button
                    onClick={handleDownloadTicket}
                    className="w-full btn-primary py-2 px-4 text-center flex items-center justify-center space-x-2"
                  >
                    <FiDownload />
                    <span>Download Ticket</span>
                  </button>

                  <button className="w-full bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <FiDownload />
                    <span>Download Certificate</span>
                  </button>

                  <button className="w-full bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <FaTrophy />
                    <span>View Rankings</span>
                  </button>
                </div>
              </div>

              {/* League Stats */}
              {/* <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">
                  League Stats
                </h3>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">
                      1,247
                    </div>
                    <div className="text-sm text-gray-400">
                      Total Registrations
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">8</div>
                      <div className="text-xs text-gray-400">Teams</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">42</div>
                      <div className="text-xs text-gray-400">Matches</div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
