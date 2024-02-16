"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappChat = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+923094225432"
        accountName="Chill Academy"
        statusMessage={"We're here to help! Expect a reply within the hour."}
        avatar={`/images/Chill_Logo.png`}
        chatMessage="Welcome! 🌟 We're here to support you every step of the way. What can we assist you with today?"
        darkMode={true}
      />
    </div>
  );
};

export default WhatsappChat;
