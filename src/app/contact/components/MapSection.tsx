import React from 'react';

export const MapSection = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.174517032811!2d-113.4825403!3d53.465341099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01fa6bcf80479%3A0x9e754481d828bf01!2sGo%20Green%20Facilities%20Services%20%26%20Janitorial!5e0!3m2!1sen!2sca!4v1708717377505!5m2!1sen!2sca"
      width="100%"
      height="450"
      style={{ border: '0' }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className=" my-20 lg:my-44"
    ></iframe>
  );
};
