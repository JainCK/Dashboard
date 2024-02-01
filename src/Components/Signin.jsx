import React from "react";
import 'tailwindcss/tailwind.css';

const SignIn = () => {
  return (
    <div className="bg-[#f8faff] flex flex-row justify-center w-full">
      <div className="bg-[#f8f8f8] overflow-hidden w-[1440px] h-[1024px]">
        <div className="relative h-[1024px] bg-[#f8faff]">
          <div className="absolute w-[720px] h-[1024px] top-0 left-0 bg-[url(left-side.svg)] bg-[100%_100%]">
            <div className="absolute top-[463px] left-[171px] [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[72px] tracking-[0] leading-[normal]">
              Board.
            </div>
            <div className="absolute top-[59px] left-[73px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[24px] tracking-[0.36px] leading-[29.4px] whitespace-nowrap">
              LOGO
            </div>
            <img className="absolute w-[299px] h-[48px] top-[909px] left-[144px]" alt="Frame" src="../Frame-2.png" />
          </div>
          <div className="absolute w-[435px] h-[391px] top-[399px] left-[813px]">
            <div className="absolute w-[423px] h-[348px] top-0 left-0 bg-white rounded-[20px]">
              <div className="absolute w-[357px] h-[44px] top-[65px] left-[33px] bg-neutral-100 rounded-[10px]">
                <div className="absolute w-[156px] top-[11px] left-[16px] [font-family:'Lato-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                  johndoe@gmail.com
                </div>
              </div>
              <div className="absolute w-[357px] h-[44px] top-[162px] left-[33px] bg-[#eaeaea] rounded-[10px]">
                <div className="absolute w-[82px] top-[11px] left-[16px] [font-family:'Lato-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                  ••••••••
                </div>
                <img
                  className="absolute w-px h-[20px] top-[12px] left-[99px] object-cover"
                  alt="Line"
                  src="line-1.svg"
                />
              </div>
              <div className="absolute w-[359px] h-[44px] top-[271px] left-[33px]">
                <div className="relative w-[357px] h-[44px] bg-[#4285f4] rounded-[10px]">
                  <div className="w-[112px] top-[10px] left-[124px] text-white text-[16px] text-center absolute [font-family:'Montserrat-Bold',Helvetica] font-bold tracking-[0] leading-[normal]">
                    Sign In
                  </div>
                </div>
              </div>
              <div className="absolute w-[105px] top-[33px] left-[33px] [font-family:'Lato-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                Email address
              </div>
              <div className="absolute w-[75px] top-[131px] left-[33px] [font-family:'Lato-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                Password
              </div>
              <div className="absolute w-[136px] top-[228px] left-[34px] [font-family:'Lato-Regular',Helvetica] font-normal text-[color:var(--link)] text-[16px] tracking-[0] leading-[normal]">
                Forgot password?
              </div>
            </div>
            <p className="absolute w-[287px] top-[370px] left-[68px] [font-family:'Lato-Regular',Helvetica] font-normal text-transparent text-[16px] text-center tracking-[0] leading-[normal]">
              <span className="text-[#848484]">Don’t have an account? </span>
              <span className="text-[#346ad4]">Register here</span>
            </p>
          </div>
          <div className="absolute w-[200px] h-[33px] top-[339px] left-[813px]">
            <div className="relative w-[198px] h-[33px] bg-white rounded-[10px]">
              <div className="w-[130px] left-[47px] absolute h-[16px] top-[9px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[color:var(--secondary-text)] text-[12px] text-center tracking-[0] leading-[normal]">
                Sign in with Google
              </div>
              <img
                className="absolute w-[15px] h-[15px] top-[9px] left-[21px]"
                alt="Google icon"
                src="google-icon-1.svg"
              />
            </div>
          </div>
          <div className="absolute w-[200px] h-[33px] top-[339px] left-[1038px]">
            <div className="relative w-[198px] h-[33px] bg-white rounded-[10px]">
              <div className="w-[121px] left-[50px] absolute h-[16px] top-[9px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[color:var(--secondary-text)] text-[12px] text-center tracking-[0] leading-[normal]">
                Sign in with Apple
              </div>
              <img className="absolute w-[13px] h-[15px] top-[8px] left-[26px]" alt="Apple" src="apple-1.svg" />
            </div>
          </div>
          <div className="w-[144px] top-[234px] left-[813px] text-black text-[36px] absolute [font-family:'Montserrat-Bold',Helvetica] font-bold tracking-[0] leading-[normal]">
            Sign In
          </div>
          <p className="absolute w-[177px] top-[288px] left-[813px] [font-family:'Lato-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            Sign in to your account
          </p>
        </div>
      </div>
    </div>
  );
};


export default SignIn