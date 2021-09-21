
import Code from "./Code" ;

export default function Code00_03(){
    return (
<Code title="BoxLayout">
{`
...

JButton b1 = new JButton("Google");
JButton b2 = new JButton("Yahoo!");
JButton b3 = new JButton("MSN");

JPanel p = new JPanel();
CardLayout layout = new CardLayout() ;
p.setLayout(layout);

p.add(b1,"title-page");
p.add(b2,"game-page");
p.add(b3,"result-page");

...
//画面を切り替えたいところで

layout.show(p, "game-page");  //pがgame-pageに切り替わる

...
`}
</Code>
    ) ;
} 