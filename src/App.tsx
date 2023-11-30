import './App.css'

function App() {
  
  return (
    <>
      <div className="body">
        <section className="profile">
          <h1 className="profile-title">プロフィール自動生成</h1>
          <div className="profile-flex">
            <div className="profile-item">
              <div className='profile-card'>
                <div className='profile-img'></div>
                <div>たいせい</div>
                <div>お誕生日:</div>
                <div>電話番号:</div>
              </div>
            </div>
            <div className="profile-item">
              <div className="profile-input">
                <label>お名前</label>
                <input type="text" />
              </div>
              <div className="profile-input">
                <label>お誕生日</label>
                <input type="text" />
              </div>
              <div className="profile-input">
                <label>電話番号</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App
