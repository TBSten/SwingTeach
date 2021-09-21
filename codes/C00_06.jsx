
import Code from "./Code" ;

export default function Code00_03(){
    return (
<Code title="ボタン">
{`
...

JButton b1 = new JButton("攻撃");

//ボタンが押されたときにやりたい事
b1.addActionListener(new ActionListener(){
    public void actionPerformed(ActionEvent e){
        //ボタンが押されたときにやりたいこと
        //    例えば
        System.out.println("スライムに10のダメージ！");
    }
});

...
`}
</Code>
    ) ;
} 