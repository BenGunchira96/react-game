import React, { useState } from "react"; // นำเข้า React และ useState hook
import "./Game.css"; // เชื่อมกับ ไฟล์ CSS

const GuessGame = () => { //ฟังก์ชันที่ไม่มีพารามิเตอร์ ,=> Arrow Function
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1); // ตัวเลขสุ่ม
  const [guess, setGuess] = useState(""); // ค่าที่ผู้ใช้ใส่
  const [message, setMessage] = useState(""); // ข้อความผลลัพธ์
  const [messageClass, setMessageClass] = useState(""); // Class ของผลลัพธ์
  const [showImage, setShowImage] = useState(false); // แสดง/ซ่อนรูปภาพ

  const handleInputChange = (e) => {
    setGuess(e.target.value); // อัปเดตค่าที่ผู้ใช้ใส่ใน input
  };

  const checkGuess = () => {
    const numericGuess = Number(guess); // แปลงค่าจาก input เป็นตัวเลข

    if (isNaN(numericGuess) || numericGuess === 0) {
      setMessage("กรุณาใส่ตัวเลขเท่านั้น !");
      setMessageClass("low");
      setShowImage(false);
      return;
    }

    if (numericGuess < randomNumber) {
      setMessage("ตัวเลขที่คุณทายน้อยเกินไป !");
      setMessageClass("low");
      setShowImage(false);
    } else if (numericGuess > randomNumber) {
      setMessage("ตัวเลขที่คุณทายมากเกินไป !");
      setMessageClass("high");
      setShowImage(false);
    } else {
      setMessage(`ยินดีด้วย!! คุณทายถูกแล้ว ตัวเลขคือ ${randomNumber}`);
      setMessageClass("correct");
      setShowImage(true);
    }
  };

  return (
    <div>
      <h1>เกมสุ่มทายตัวเลข</h1>
      <p>กรอกตัวเลขระหว่าง 1 ถึง 100 แล้วคลิก "ทายตัวเลข"</p>
      <input
        type="number"
        placeholder="ทายตัวเลขของคุณ"
        value={guess}
        onChange={handleInputChange}
      />
      
      <button onClick={checkGuess}>ทายตัวเลข</button>

      <div id="output" className={messageClass}>
        {message}
      </div>

      {showImage && (
        <img
          className="successImage"
          src="https://stickershop.line-scdn.net/stickershop/v1/product/20079914/LINEStorePC/main.png?v=1"
          alt="ยินดีด้วย"
          style={{ maxWidth: "300px", marginTop: "20px" }}
        />
      )}
    </div>
  );
};

export default GuessGame;
