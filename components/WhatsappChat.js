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
        chatMessage="Hi! 😊 We love helping out! What can we do for you today? "
        darkMode={true}
        buttonStyle={{
          background: 'linear-gradient(to right, #007BFF, #00BFFF)',
        }}
        chatboxStyle={{
          background: '#121212',
          color: '#ffffff',
        }}
        notificationStyle={{
          background: 'linear-gradient(to bottom, #003366, #000033)',
          color: '#ffffff',
        }}
      />
    </div>
  );
};

export default WhatsappChat;
