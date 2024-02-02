import React from "react";

const Sidebar = ({ className }) => {
  return (
    <div
      className={`relative w-[280px] h-[944px] rounded-[20px] [background:linear-gradient(180deg,rgb(66,133,244)_0%,rgb(60.26,131.43,249.33)_100%)] ${className}`}
    >
      <div className="absolute top-[829px] left-[50px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
        Help
      </div>
      <div className="absolute top-[866px] left-[50px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
        Contact Us
      </div>
      <div className="absolute top-[411px] left-[88px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal]">
        Settings
      </div>
      <div className="absolute top-[349px] left-[88px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal]">
        Users
      </div>
      <div className="absolute top-[287px] left-[88px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal]">
        Schedules
      </div>
      <div className="absolute top-[225px] left-[88px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal]">
        Transactions
      </div>
      <div className="absolute top-[163px] left-[88px] [font-family:'Montserrat',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
        Dashboard
      </div>
      <img
        className="absolute w-[18px] h-[21px] top-[226px] left-[50px]"
        alt="Transaction icon"
        src="https://c.animaapp.com/glaT4QLc/img/transaction-icon-1@2x.png"
      />
      <img
        className="absolute w-[20px] h-[20px] top-[289px] left-[49px]"
        alt="Schedule icon"
        src="https://c.animaapp.com/glaT4QLc/img/schedule-icon-1@2x.png"
      />
      <img
        className="absolute w-[18px] h-[18px] top-[166px] left-[50px]"
        alt="Dashboard icon"
        src="https://c.animaapp.com/glaT4QLc/img/dashboard-icon-1@2x.png"
      />
      <img
        className="absolute w-[17px] h-[18px] top-[414px] left-[50px]"
        alt="Setting icon"
        src="https://c.animaapp.com/glaT4QLc/img/setting-icon-1.svg"
      />
      <img
        className="absolute w-[18px] h-[18px] top-[352px] left-[50px]"
        alt="User icon"
        src="https://c.animaapp.com/glaT4QLc/img/user-icon-1@2x.png"
      />
      <div className="absolute top-[59px] left-[50px] [font-family:'Montserrat',Helvetica] font-bold text-white text-[36px] tracking-[0] leading-[normal]">
        Board.
      </div>
    </div>
  );
};

export default Sidebar;
