
import Code from "./Code" ;

export default function Code00_03(){
    return (
<Code title="ラベル">
{`
...

JLabel lb = new JLabel("0") ;

...
//テキストフィールドの値取得
System.out.println("テキストフィールドの中身は"+lb.getText());
...
//テキストフィールド内の書き換え
lb.setText("99999999");
...
`}
</Code>
    ) ;
} 