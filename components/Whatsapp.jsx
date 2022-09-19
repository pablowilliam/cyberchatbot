import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";

const Whats = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+351 939 121 286"
      accountName="CyberChatBot"
      avatar="/images/banner.png"
      statusMessage="Online"
      chatMessage="Olá! Como posso te ajudar?"
      placeholder="Digite sua mensagem"
      allowClickAway
      notification
      notificationDelay={60000} // 1 minute
      notificationSound
    />
  );
};

export default Whats;
