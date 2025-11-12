import React from "react";
import UseTitle from "../hooks/UseTitle";
import { useLoaderData } from "react-router";
import BillDetailsCard from "./BillDetailsCard";
import { motion } from "framer-motion";

const BillDetails = () => {
  UseTitle("Bill-Details || Billify");
  const bill = useLoaderData();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <BillDetailsCard bill={bill} />
    </motion.div>
  );
};

export default BillDetails;
