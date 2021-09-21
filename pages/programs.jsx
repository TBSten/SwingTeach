import Image from "next/image" ;

import Code00_00 from "../codes/C00_00";
import Code00_01 from "../codes/C00_01";
import Code00_02 from "../codes/C00_02";
import Code00_03 from "../codes/C00_03";
import Code00_04 from "../codes/C00_04";
import Code00_05 from "../codes/C00_05";
import Code00_06 from "../codes/C00_06";
import Code00_07 from "../codes/C00_07";
import Code00_08 from "../codes/C00_08";

import img01 from "../img/borderlayout.png" ;
import img02 from "../img/boxlayout-1.png" ;
import img03 from "../img/boxlayout-2.png" ;

function data(title,details){
    return {
        title,
        details,
    } ;
}

const dataset = [
    data("テンプレート",
        <>
            全ての大元のプログラム
            <Code00_00 />
        </>
    ),
    data("レイアウトマネージャの設定",
        <>
            各種レイアウトマネージャを設定する
            <Code00_01 />
        </>
    ),
    data("BorderLayout",
        <>
            5カ所（NORTH,SOUTH,EAST,WEST,CENTER）から
            選んで配置する
            <Code00_02 />
            <Image src={img01}/>
        </>
    ),
    data("BoxLayout 横向き",
        <>
            横向きに並べる
            <Code00_03 />
            <Image src={img02}/>
        </>
    ),
    data("BoxLayout 縦向き",
        <>
            縦向きに並べる
            <Code00_04 />
            <Image src={img03}/>
        </>
    ),
    data("CardLayout",
        <>
            画面の切り替えなどに効果抜群
            <Code00_05 />
        </>
    ),
    data("ボタン",
        <>
            ボタンが押されたときに〇〇したいとき
            <Code00_06 />
        </>
    ),
    data("テキストフィールド",
        <>
            テキストフィールドの値の取得や書き換え
            <Code00_07 />
        </>
    ),
    
    data("ラベル",
        <>
            ラベルの値の取得や書き換え
            <Code00_08 />
        </>
    ),

] ;

export default function Templates(){
    return (
        <div>
            <h1>プログラム集</h1>
            <ul>
                {
                    dataset.map(el=>(
                        <li key={el.title}>
                            <a href={"#"+el.title}>
                                {el.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="todo">
                {
                    dataset.map(el=>(
                        <div className="code" key={el.title} id={el.title}>
                            <h2>{el.title}</h2>
                            {el.details}
                        </div>
                    ))
                }
            </div>
        </div>
    ) ;
}
