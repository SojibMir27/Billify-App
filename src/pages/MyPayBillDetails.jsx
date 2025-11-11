import React from "react";
import UpdateBill from "./UpdateBill";
import { useLoaderData } from "react-router";
import jsPDF from "jspdf";

const MyPayBillDetails = () => {
  const bill = useLoaderData();
  const { username, Phone, Address, amount, date, _id ,title} = bill;

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    const now = new Date();
    const currentDateTime = now.toLocaleString();

    pdf.setFontSize(24);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(30, 30, 150);
    pdf.text("Bill Details", 105, 20, { align: "center" });

    pdf.setDrawColor(30, 30, 150);
    pdf.setLineWidth(1.5);
    pdf.line(20, 25, 190, 25);

    pdf.setFillColor(240, 240, 255);
    pdf.rect(15, 35, 180, 80, "F");

    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(0, 0, 0);
    const startY = 50;
    const gap = 12;

    pdf.text(`Bill ID: ${_id}`, 105, startY, { align: "center" });
    pdf.text(`Name: ${username}`, 105, startY + gap, { align: "center" });
    pdf.text(`Phone: ${Phone}`, 105, startY + gap * 2, { align: "center" });
    pdf.text(`Location: ${Address}`, 105, startY + gap * 3, {
      align: "center",
    });
    pdf.text(`Amount: ${amount} BDT`, 105, startY + gap * 4, {
      align: "center",
    });
    pdf.text(`Bill Date: ${date}`, 105, startY + gap * 5, { align: "center" });
    
    pdf.setFontSize(12);
    pdf.setTextColor(100, 100, 100);
    pdf.text(`Downloaded At: ${currentDateTime}`, 105, startY + gap * 6, {
      align: "center",
    });

    pdf.save(`Bill-${_id}.pdf`);
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-500 rounded w-11/12 md:w-4/12 mx-auto my-5 p-4">
      <div className="card-body">
        <figure className="relative h-48 overflow-hidden rounded-xl flex justify-center items-center">
          <img
            src={"https://i.ibb.co/bMG03j88/paidbilldetails.jpg"}
            alt="Bill Details"
            className="w-full h-full object-cover opacity-50"
          />
          <span className="absolute bg-red-600 text-white text-sm font-bold px-4 py-2 rounded shadow-lg">
            Bill ID : {_id}
          </span>
        </figure>

        <p className="text-center">
          <span className="font-semibold">Bill Name:</span> {title}
        </p>
        
        <p className=" text-center">
          <span className="font-semibold">Name:</span> {username}
        </p>
        
        <p className="text-center">
          <span className="font-semibold">Phone:</span> {Phone}
        </p>
        <p className="text-center">
          <span className="font-semibold">Location:</span> {Address}
        </p>
        <p className="text-center">
          <span className="font-semibold">Amount:</span> {amount} BDT
        </p>
        <p className="text-center">
          <span className="font-semibold">Date:</span> {date}
        </p>

        {/* Update Modal */}
        <UpdateBill bill={bill} />

        <button
          onClick={handleDownloadPDF}
          className="btn mt-4 btn-sm text-white rounded bg-gradient-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 w-full"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default MyPayBillDetails;
