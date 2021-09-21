
function todo (title,desc){
    return {
        title,
        desc,
    } ;
}
const todos = [
    todo("ウィンドウの表示",
        <>
            先生にもらったプリントなどを参考にまずはウィンドウを表示できるように
            <div>
                参考：
                <a href="https://www.javadrive.jp/tutorial/ini/index1.html">
                    Swingの基本
                </a>
            </div>
        </>),
    todo("コンポーネントの位置合わせ",
        <>
            つぎはレイアウトマネージャを調べたりして、
            ウィンドウやパネルに部品を自由に配置できるようになろう
            <div>
                参考：
                <ul>
                    <li>
                        <a href="https://www.javadrive.jp/tutorial/borderlayout/">
                            BorderLayout
                        </a>
                    </li>
                    <li>
                        <a href="https://www.javadrive.jp/tutorial/boxlayout/">
                            BoxLayout
                        </a>
                    </li>
                    <li>
                        <a href="https://www.javadrive.jp/tutorial/cardlayout/">
                            CardLayout
                        </a>
                    </li>
                </ul>
            </div>
        </>),
    todo("画面の切り替え",
        <>
            レイアウトマネージャである「CardLayout」を使って
            画面の切り替えをできるようになろう
            <div>
                参考：
                <a href="https://www.javadrive.jp/tutorial/cardlayout/">
                    CardLayout
                </a>
            </div>
        </>),
    todo("〇〇したら××するをできるように",
        <>
            <b>「ボタンを押したら 画面を切り替える」</b>や
            <b>「一定時間たったら ラベルの文字を切り替える」</b>をできるようになるために、
            イベントを学ぼう
            <div>
                参考：
                <a href="https://www.javadrive.jp/tutorial/ini/index1.html#section4">
                    イベントについて
                </a>
            </div>
        </>),
    todo("ゲームを完成させよう",
        <>
            上をこなすことが出来ればあとは自分の力で
            「どこに」「どんな処理」をかけばいいか、
            どんな部品を使えばいいのか、を
            考えれるはず！がんばれ！
        </>),
] ;

export default function Miyatomo() {
    return (
      <div >
        <h1>みやともへ</h1>
        <h2>完成までにやるべきこと</h2>
        <ol>
            {
                todos.map(el=>(
                    <li key={el.title}>
                        <a href={"#"+el.title}>{el.title}</a>
                    </li>
                ))
            }
        </ol>
        {
            todos.map(el=>(
                <div key={el.title} id={el.title} className="todo">
                    <h2>{el.title}</h2>
                    {el.desc}
                </div>
            ))
        }
      </div>
    )
  }
  

