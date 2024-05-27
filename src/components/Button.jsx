/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Loader from "./Loader";


const Button = ({
  type,
  text,
  onBtnClick,
  iconName,
  imgPath,
  btnStyle,
  imgStyle,
  loading,
  btn_type,
}) => {
  return (
    <>
      {type == "outline" ? (
        <button
          //type={btn_type}
          className={`border-2 flex items-center justify-center p-2 gap-1 border-black text-black text-[13px] rounded-lg ${btnStyle}`}
          onClick={onBtnClick}
        >
          {loading === true ? (
            <Loader />
          ) : (
            <>
              {iconName ? (
                <span>{iconName}</span>
              ) : (
                <>
                  {imgPath && (
                    <img
                      className={`${imgStyle}`}
                      width={24}
                      height={24}
                      src={imgPath}
                      alt=""
                    />
                  )}
                </>
              )}
              {text}
            </>
          )}
        </button>
      ) : (
        <button
          //type={btn_type}
        //   style={{background: 'linear-gradient(90deg, #22A1FE 0%, #FD18EF 100%)'}}
          className={`flex items-center justify-center gap-1 p-2 text-center text-[13px] rounded-lg ${btnStyle}`}
          onClick={onBtnClick}
        >
          {loading === true ? (
            <Loader />
          ) : (
            <>
              {iconName ? (
                <span>{iconName}</span>
              ) : (
                <>
                  {imgPath && (
                    <img src={imgPath} width={24} height={24} alt="" />
                  )}
                </>
              )}
              {text}
            </>
          )}
        </button>
      )}
    </>
  );
};

export default Button;
