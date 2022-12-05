import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div
      className="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      Collections
    </motion.div>
  );
};

export default Profile;
