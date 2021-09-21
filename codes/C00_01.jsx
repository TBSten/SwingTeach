
import Code from "./Code" ;

export default function Code00_01(){
    return (
<Code title="レイアウトマネージャ">
{`
...

JPanel p = new JPanel() ;

//5カ所から配置位置を選ぶ
p.setLayout(new BorderLayout());

//左から右へ
p.setLayout(new BoxLayout(p, BoxLayout.X_AXIS));

//上から下へ
p.setLayout(new BoxLayout(p, BoxLayout.Y_AXIS));

//画面切り替えレイアウト
p.setLayout(new CardLayout());

...
`}
</Code>
    ) ;
} 