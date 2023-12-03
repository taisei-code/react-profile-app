## Qiita記事

## 【React】<input type="file"> でアップロードした画像を表示させる

## 初めに

type属性の値がtextのときと違い、e.target.valueを設定してもファイルを読み取ることはできませんでした。

## 問題

```javascript

function App() {
  const [profileImg, setProfileImg] = useState('')

  return (
    <>
      <label>プロフィール写真</label>
      <input type="file" onChange={(e) => setProfileImg(e.target.value)} />
      <img src={profileImg} alt="" />
    </>
  );
}


```

## 解決方法

```javascript

function App() {
  const [profileImg, setProfileImg] = useState('')

  const changeProfileImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const imgObject = e.target.files[0];
    setProfileImg(window.URL.createObjectURL(imgObject))
    
  };
  

  return (
    <>
      <label>プロフィール写真</label>
      <input type="file" onChange={changeProfileImg} />
      <img src={profileImg} alt="" />
    </>
  );
}


```

選択したファイルを読み取るには、 e.target.files[0]でFileオブジェクトを取得する。取得したFileオブジェクトを window.URL.createObjectURL（）の引数に入れてuseStateで更新すると画像を表示できる。

 e.target.files[0] の [0] は e.target.filesで取得できるFileListオブジェクトの0番目。

## 終わりに

<input type="file"> を使う機会が無いこともあって、これまでのセオリーで壁にぶつかることを痛感したが、難しく考えないで冷静に調べることが大切。「なぜ、画像が表示されないのか？」「今、書いたコードに原因があるのか？」というように。