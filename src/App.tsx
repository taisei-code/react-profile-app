import { useState } from 'react';
import './App.css'

function App() {
  const [name, setName] = useState('アーセナル')
  const [birthday, setBirthday] = useState('')
  const [number, setNumber] = useState('')
  const [profileImg, setProfileImg] = useState('')

  const changeProfileImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    
    const imgObject = e.target.files[0];
    setProfileImg(window.URL.createObjectURL(imgObject))
    
  };
  
  return (
    <>
      <div className="body">
        <section className="profile">
          <h1 className="profile-title">プロフィール自動生成</h1>
          <div className="profile-flex">
            <div className="profile-item">
              <div className='profile-card'>
                <div className='profile-img'>
                  <img src={profileImg} alt="" />
                </div>
                <h2>{name}</h2>
                <div className='profile-info'>
                  <div>お誕生日：{birthday}</div>
                  <div>電話番号：{number}</div>
                </div>
              </div>
            </div>
            <div className="profile-item">
              <div className="profile-input">
                <label>お名前</label>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="profile-input">
                <label>お誕生日</label>
                <input type="date" onChange={(e) => setBirthday(e.target.value)}/>
              </div>
              <div className="profile-input">
                <label>電話番号</label>
                <input type="tel" onChange={(e) => setNumber(e.target.value)}/>
              </div>
              <div className="profile-input file">
                <label>プロフィール写真</label>
                <input type="file" onChange={changeProfileImg} />
              </div>
              <button className='register-btn'>Download as PNG</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App
