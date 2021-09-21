
import Code from "./Code" ;

export default function Code00_03(){
    return (
<Code title="テキストフィールド">
{`
...

JTextField tf = new JTextField("イレブン") ;

...
//テキストフィールドの値取得
System.out.println("テキストフィールドの中身は"+tf.getText());
...
//テキストフィールド内の書き換え
tf.setText("クラウド");
...
`}
</Code>
    ) ;
} 